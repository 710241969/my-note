var fs = require('fs')

function openText(path) {
  return fs.readFileSync(path, 'UTF-8')
}

function createText(path) {
  fs.createWriteStream(path)
}

function createDir(path) {
  return fs.mkdirSync(path)
}

export { openText, createText, createDir }