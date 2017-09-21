import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  clickFileObj: { // 当前点击的文件对象,path:路径;isDir:是否文件夹
    path: null,
    isDir: null
  },
  clickFilePath: '', // 当前点击文件路径
  openFileObj: {},
  openFileContent: '',
  initPath: '',
  inputVisible: false,
  fileBarArray: [],

  currentDirPath: '', // 当前选择的文件夹路径
  currentShowFile: {// 当前打开文件路径
    name: '',
    path: '',
    content: ''
  }
}

// getters
const getters = {
  clickFileObj() {
    return state.clickFileObj
  },
  clickFilePath() {
    return state.clickFileObj.path
  },
  // openFilePath() {
  //   return state.openFileObj.path
  // },
  initPath() {
    return state.initPath
  },
  inputVisible() {
    return state.inputVisible
  },
  currentDirPath() {
    return state.currentDirPath
  },
  getFileBarArray() {
    return state.fileBarArray
  },
  getCurrentShowFile() {
    return state.currentShowFile
  },
  getFileByIndex(index) {
    return state.fileBarArray[index]
  }
}

// actions
const actions = {
  [types.SET_CLICK_FILE_OBJ](context, fileObj) {
    context.commit(types.SET_CLICK_FILE_OBJ, fileObj)
  },
  [types.SET_INIT_PATH](context, path) {
    context.commit(types.SET_INIT_PATH, path)
  },
  [types.SET_OPEN_FILE_OBJ](context, path) {
    context.commit(types.SET_OPEN_FILE_OBJ, path)
  },
  [types.SET_INPUT_VISIBLE](context, boolean) {
    context.commit(types.SET_INPUT_VISIBLE, boolean)
  },
  [types.SET_CURRENT_DIR_PATH](context, path) {
    context.commit(types.SET_CURRENT_DIR_PATH, path)
  },
  // 文件BAR条添加文件对象
  [types.ADD_FILE_BAR_ITEM](context, fileObj) {
    context.commit(types.ADD_FILE_BAR_ITEM, fileObj)
  },
  // 设置当前打开的文件路径
  [types.SET_CURRENT_SHOW_FILE](context, fileObj) {
    context.commit(types.SET_CURRENT_SHOW_FILE, fileObj)
  }
}

// mutations
const mutations = {
  [types.SET_CLICK_FILE_OBJ](state, fileObj) {
    state.clickFileObj.path = fileObj.path
    state.clickFileObj.isDir = fileObj.isDir
  },
  [types.SET_OPEN_FILE_OBJ](state, path) {
    state.openFileObj = path
  },
  [types.SET_INIT_PATH](state, path) {
    state.initPath = path
  },
  [types.SET_INPUT_VISIBLE](state, boolean) {
    state.inputVisible = boolean
  },
  [types.SET_CURRENT_DIR_PATH](state, path) {
    state.currentDirPath = path
  },
  // 文件BAR条添加文件对象
  [types.ADD_FILE_BAR_ITEM](state, fileObj) {
    for (let i = 0; i < state.fileBarArray.length; i++) {
      if (state.fileBarArray[i].path === fileObj.path) {
        return
      }
    }
    state.fileBarArray.push(fileObj)
  },
  // 设置当前打开的文件路径
  [types.SET_CURRENT_SHOW_FILE](state, fileObj) {
    state.currentShowFile.name = fileObj.name
    state.currentShowFile.path = fileObj.path
    state.currentShowFile.content = fileObj.content
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
