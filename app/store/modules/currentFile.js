import * as types from '../mutation-types'

const originFile = {
  isDir: false,
  name: '',
  isEditing: false,
  path: ''
}

const state = {
  // 当前编辑的文件
  crrentFile: {
    isDir: false,
    name: '',
    isEditing: false,
    path: ''
  }
}

const getters = {
  getCrrentFile() {
    return state.crrentFile
  }
}

const actions = {
  // 设置当前打开的文件
  [types.SET_CURRENT_FILE](context, fileObj) {
    context.commit(types.SET_CURRENT_FILE, fileObj)
  },
  // 重置当前打开的文件为空
  [types.RESET_CURRENT_FILE](context) {
    context.commit(types.RESET_CURRENT_FILE)
  }
}

const mutations = {
  // 设置当前打开的文件
  [types.SET_CURRENT_FILE](state, fileObj) {
    state.crrentFile = fileObj
  },
  // 重置当前打开的文件
  [types.RESET_CURRENT_FILE](state) {
    state.crrentFile = originFile
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}