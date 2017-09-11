module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0, // 文件以单一的换行符结束
    'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
  },
  'env': {
    'browser': true,
    'node': true
  }
}
