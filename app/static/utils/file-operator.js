var fs = require('fs')

// options encoding默认utf8

// 读取文件内容
export function readFile(path) {
  return fs.readFileSync(path, 'UTF-8')
}

// 文件写入内容
export function writeFile(path, data) {
  fs.writeFileSync(path, data)
}

// 创建文件
export function createFile(path) {
  fs.createWriteStream(path + '.mnote')
}

// 创建文件夹
export function createDir(path) {
  return fs.mkdirSync(path)
}

// 创建文件或文件夹
export function createFileOrDir(path, type) {
  return new Promise((resolve, reject) => {
    if (type === 1) {
      fs.createWriteStream(`${path}.mnote`)
      return resolve()
    } else {
      fs.mkdir(`${path}`, (err) => {
        if (err) {
          return reject()
        }
        return resolve()
      })
    }
  })
}

// 遍历文件夹，重新构造该级目录
export function throughPath(fileObj) {
  // 判断目录是否存在
  if (!fs.existsSync(`${fileObj.path}`)) {
    console.log('文件不存在')
    return
  }
  let filesTree = {}
  // 初始化文件树对象
  Object.assign(filesTree, {
    name: fileObj.name,
    isDir: true,
    isFold: false,
    children: [],
    path: fileObj.path
  })
  // 设置循环遍历文件树要用到的对象栈
  let pathObjArray = []
  pathObjArray.push({ [`${filesTree.path}`]: filesTree.children })

  // 执行遍历
  while (pathObjArray.length > 0) {
    let objTmp = pathObjArray.shift()
    let pathTmp = Object.keys(objTmp)[0] // 获取对象key值
    let filesArray = fs.readdirSync(pathTmp) // 同步readdir().文件数组列表
    let fileArrayTmp = []
    let dirArrayTmp = []
    for (let i = 0, length = filesArray.length; i < length; i++) {
      let file = filesArray[i]
      let isDirBoolean = fs.statSync(`${pathTmp}${file}`).isDirectory()
      if (!isDirBoolean) {
        let suffix = file.substring(file.lastIndexOf('.'), file.length)
        if (suffix !== '.mnote') {
          continue
        }
      }
      let obj = {
        isDir: isDirBoolean,
        children: null
      }
      if (isDirBoolean) {
        obj.name = file
        obj.isFold = true // true为折叠
        obj.children = []
        obj.path = `${pathTmp}${file}\\`
        pathObjArray.push({ [`${pathTmp}${file}\\`]: obj.children })
        dirArrayTmp.push(obj)
      } else {
        obj.name = file.substring(0, file.lastIndexOf('.'))
        obj.path = `${pathTmp}${file}`
        fileArrayTmp.push(obj)
      }
    }
    objTmp[pathTmp].push(...dirArrayTmp, ...fileArrayTmp)
  }
  return filesTree
}

// export default fileOperator