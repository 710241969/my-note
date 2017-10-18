import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  // rootPath: '', // 根目录路径
  clickFileObj: { // 当前点击的文件对象,path:路径;isDir:是否文件夹
    path: null,
    isDir: null
  },
  clickFilePath: '', // 当前点击文件路径
  openFileObj: {},
  openFileContent: '',
  inputVisible: false,
  fileBarArray: [],

  currentDirPath: null, // 当前选择的目录路径
  createType: 1,

  currentShowFile: {// 当前打开的文件
    name: '',
    path: '',
    content: '',
    editable: false // 初始为不可编辑
  },

  currentDirOBJ: null // 当前所在目录，可影响视图，添加文件、文件夹时使用
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
  // rootPath() {
  //   return state.rootPath
  // },
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
  },
  getCreateType() {
    return state.createType
  },
  currentDirOBJ() {
    return state.currentDirOBJ
  }
}

// actions
const actions = {
  [types.SET_CLICK_FILE_OBJ](context, fileObj) {
    context.commit(types.SET_CLICK_FILE_OBJ, fileObj)
  },
  [types.SET_ROOT_PATH](context, path) {
    context.commit(types.SET_ROOT_PATH, path)
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
  },
  // 转换当前文件的 编辑/保存 状态
  [types.SET_EDITABLE](context, boolean) {
    context.commit(types.SET_EDITABLE, boolean)
  },
  [types.UPDATE_CONTENT](context, contentString) {
    context.commit(types.UPDATE_CONTENT, contentString)
  },
  [types.SET_CREATE_TYPE](context, type) {
    context.commit(types.SET_CREATE_TYPE, type)
  },

  // 设置当前所在目录
  [types.SET_CURRENT_DIR_OBJ](context, dirOBJ) {
    context.commit(types.SET_CURRENT_DIR_OBJ, dirOBJ)
  },
  [types.UPDATE_CURRENT_DIR_OBJ_FOLD](context) {
    context.commit(types.UPDATE_CURRENT_DIR_OBJ_FOLD)
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
  // [types.SET_ROOT_PATH](state, path) {
  //   state.rootPath = path
  // },
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
  },
  [types.SET_EDITABLE](state, boolean) {
    state.currentShowFile.editable = boolean
  },
  [types.UPDATE_CONTENT](state, contentString) {
    state.currentShowFile.content = contentString
  },
  [types.SET_CREATE_TYPE](state, type) {
    state.createType = type
  },
  [types.SET_CURRENT_DIR_OBJ](state, dirOBJ) {
    state.currentDirOBJ = dirOBJ
  },
  [types.UPDATE_CURRENT_DIR_OBJ_FOLD](state) {
    state.currentDirOBJ.isFold = !state.currentDirOBJ.isFold
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
