var fs = require('fs')

// options encoding默认utf8

const fileOperator = {}

// 读取文件内容
fileOperator.readFile = (path) => {
  return fs.readFileSync(path, 'UTF-8')
}

// 文件写入内容
fileOperator.writeFile = function (path, data) {
  fs.writeFileSync(path, data)
}

// 创建文件
fileOperator.createFile = (path) => {
  fs.createWriteStream(path + '.mnote')
}

// 创建文件夹
fileOperator.createDir = (path) => {
  return fs.mkdirSync(path)
}

// 创建文件或文件夹
fileOperator.createFileOrDir = (path, type) => {
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

export default fileOperator