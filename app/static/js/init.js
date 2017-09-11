var fs = require('fs')

const filesTree = {};

(() => {
  console.log(`当前工作路径${process.cwd()}`)
  console.log(`当前文件路径${__filename}`)
  console.log(`当前文件目录路径${__dirname}`)
  console.time('测试 获取文件目录fn 速度: ')
  // 获取当前工作路径
  const path = process.cwd()

  // 判断目录是否存在
  if (fs.existsSync(`${path}\\note\\`)) {
  } else { // 创建初始文件
    fs.mkdirSync(`${path}\\note\\`)
  }
  // 初始化文件树对象
  Object.assign(filesTree, {
    name: 'note',
    isDir: false,
    children: null
  })
  // 设置循环遍历文件树要用到的对象栈
  let pathObjArray = []
  // 获取根文件状态
  let fileStat = fs.statSync(`${path}\\note\\`)
  // 判断根文件是否是目录
  if (fileStat.isDirectory()) {
    filesTree.isDir = true // true
    filesTree.isFold = false // false为打开
    filesTree.children = []
    filesTree.path = `${path}\\note\\`
    pathObjArray.push({ [`${path}\\note\\`]: filesTree.children })
  }
  // 执行遍历
  while (pathObjArray.length > 0) {
    let objTmp = pathObjArray.shift()
    let pathTmp = Object.keys(objTmp)[0] // 获取对象key值
    let filesArray = fs.readdirSync(pathTmp) // 同步readdir().文件数组列表
    for (let i = 0, length = filesArray.length; i < length; i++) {
      let file = filesArray[i]
      let isDirFlag = fs.statSync(`${pathTmp}${file}`).isDirectory()
      if (!isDirFlag) {
        let suffix = file.substring(file.lastIndexOf('.'), file.length)
        if (suffix !== '.mnote') {
          continue
        }
      }
      let obj = {
        isDir: isDirFlag,
        children: null
      }
      if (isDirFlag) {
        obj.name = file
        obj.isFold = true // true为折叠
        obj.children = []
        obj.path = `${pathTmp}${file}\\`
        pathObjArray.push({ [`${pathTmp}${file}\\`]: obj.children })
      } else {
        obj.name = file.substring(0, file.lastIndexOf('.'))
        obj.path = `${pathTmp}${file}`
      }
      objTmp[pathTmp].push(obj)
    }
  }
  console.log('init sucessful')
  console.log(filesTree)
  console.timeEnd('测试 获取文件目录fn 速度: ')
})()

export default filesTree
