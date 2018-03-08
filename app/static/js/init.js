var fs = require('fs')

console.log(`当前工作路径${process.cwd()}`)
console.log(`当前文件路径${__filename}`)
console.log(`当前文件目录路径${__dirname}`)

// 获取当前工作路径
const path = process.cwd()

let dirMap = {}

const fileRegular = /(.*)\.([^.]*)/
function initFile(eventType, filename) {
  if (eventType === 'change') {
    console.log('文件:' + filename + ' 被修改！')
  }
  if (eventType === 'rename') {
    console.log('文件:' + filename + ' 被新建/删除！')
  }

  console.time('测试 获取文件目录fn 速度: ')

  // 判断目录是否存在
  if (!fs.existsSync(`${path}\\note\\`)) {
    fs.mkdirSync(`${path}\\note\\`) // 不存在则创建初始文件
  }

  let fileTree = {}
  // 初始化文件树对象
  Object.assign(fileTree, {
    name: 'note'
  })

  // 设置循环遍历文件树要用到的对象队列
  let pathChildArray = []
  // 获取根文件状态
  let fileStat = fs.statSync(`${path}\\note\\`)
  // 判断根文件是否是目录
  if (fileStat.isDirectory()) {
    fileTree.isDir = true // 是目录
    fileTree.isFold = false // false为打开
    fileTree.children = []
    fileTree.path = `${path}\\note\\`
    fileTree.father = null
    pathChildArray.push({ [`${path}\\note\\`]: fileTree.children })
  }
  // 执行遍历
  while (pathChildArray.length > 0) {
    let objTmp = pathChildArray.shift() // 弹出队列第一个
    let pathTmp = Object.keys(objTmp)[0] // 获取对象key值
    let filesArray = fs.readdirSync(pathTmp) // 同步readdir() 文件数组列表
    let dirArrayTmp = []
    let fileArrayTmp = []
    for (let i = 0, length = filesArray.length; i < length; i++) {
      let file = filesArray[i]
      let isDirBoolean = fs.statSync(`${pathTmp}${file}`).isDirectory()

      let obj = {
        father: pathTmp
      }
      if (isDirBoolean) { // 是目录
        Object.assign(obj, {
          isDir: true,
          name: file,
          isFold: true, // true为折叠
          children: [],
          path: `${pathTmp}${file}\\`
        })
        pathChildArray.push({ [`${pathTmp}${file}\\`]: obj.children })
        dirArrayTmp.push(obj)
        dirMap[obj.path] = obj
      } else { // 不是目录
        let suffix = file.match(fileRegular)[2] // file.substring(file.lastIndexOf('.'), file.length)
        if (suffix !== 'mnote') {
          continue
        }
        Object.assign(obj, {
          isDir: false,
          name: file.match(fileRegular)[1], // file.substring(0, file.lastIndexOf('.')),
          isEditing: false, // 是否为编辑状态，否
          path: `${pathTmp}${file}`
        })
        fileArrayTmp.push(obj)
      }
    }
    objTmp[pathTmp].push(...dirArrayTmp, ...fileArrayTmp)
  }
  console.log('init sucessful')
  console.log(fileTree)
  console.timeEnd('测试 获取文件目录fn 速度: ')
  return fileTree
}

// fs.watch(`${path}\\note\\`, initFile)

let filesTree = initFile()

export { filesTree, dirMap }
