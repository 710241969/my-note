import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  // rootPath: '', // 根目录路径
  clickFileObj: { // 当前点击的文件对象
  },
  clickFilePath: '', // 当前点击文件路径
  openFileObj: {},
  openFileContent: '',
  inputVisible: false,

  currentDirPath: null, // 当前选择的目录路径
  createType: 1,

  currentShowFile: {// 当前打开的文件
    name: '',
    path: '',
    content: '',
    editable: false // 初始为不可编辑
  },
  currentDirOBJ: null, // 当前所在目录，可影响视图，添加文件、文件夹时使用
  dirMap: {}, // 路径map（删除时文件、目录时使用）
  filesTree: {}
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

  getCurrentShowFile() {
    return state.currentShowFile
  },
  getFileByIndex(index) {
    return state.fileTabArray[index]
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
  },
  [types.SET_DIR_MAP](context, dirMap) {
    context.commit(types.SET_DIR_MAP, dirMap)
  },
  [types.SET_FILES_TREE](context, filesTree) {
    context.commit(types.SET_FILES_TREE, filesTree)
  },
  [types.DELETE_ITEM](context, choseFile) {
    context.commit(types.DELETE_ITEM, choseFile)
  }
}

// mutations
const mutations = {
  [types.SET_CLICK_FILE_OBJ](state, fileObj) {
    state.clickFileObj = fileObj
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
  },
  [types.SET_DIR_MAP](state, dirMap) {
    state.dirMap = dirMap
  },
  [types.SET_FILES_TREE](state, filesTree) {
    state.filesTree = filesTree
  },
  // 删除文件或文件夹
  [types.DELETE_ITEM](state, choseFile) {
    let fatherDir = choseFile.father
    let childrenArray = state.dirMap[fatherDir].children
    for (let i = 0; i < childrenArray.length; i++) {
      if (childrenArray[i].path === choseFile.path) {
        childrenArray.splice(i, 1)
        return
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
