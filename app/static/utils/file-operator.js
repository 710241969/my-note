var fs = require('fs')

function getFileContent(path) {
  return fs.readFileSync(path, 'UTF-8')
}

function createText(path) {
  fs.createWriteStream(path)
}

function createDir(path) {
  return fs.mkdirSync(path)
}

export { getFileContent, createText, createDir }