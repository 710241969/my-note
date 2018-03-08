import * as types from '../mutation-types'

const state = {
  fileTabArray: []// 文件标签数组
}

const getters = {
  getFileBarArray() {
    return state.fileTabArray
  }
}

const actions = {
  // 文件Tab条添加文件对象
  [types.ADD_FILE_TAB_ITEM](context, fileObj) {
    context.commit(types.ADD_FILE_TAB_ITEM, fileObj)
  },
  // 文件Tab条删除文件对象
  [types.DELETE_FILE_TAB_ITEM](context, fileObj) {
    context.commit(types.DELETE_FILE_TAB_ITEM, fileObj)
  }
}

const mutations = {
  // 文件Tab条添加文件对象
  [types.ADD_FILE_TAB_ITEM](state, fileObj) {
    for (let i = 0; i < state.fileTabArray.length; i++) {
      if (state.fileTabArray[i].path === fileObj.path) {
        return
      }
    }
    state.fileTabArray.push(fileObj)
  },
  // 文件Tab条删除文件对象
  [types.DELETE_FILE_TAB_ITEM](state, path) {
    let index
    for (let i = 0; i < state.fileTabArray.length; i++) {
      if (path === state.fileTabArray[i].path) {
        index = i
        break
      }
    }
    state.fileTabArray.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}