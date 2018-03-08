import Vue from 'vue'
import Vuex from 'vuex'
import file from './modules/file'
import fileTab from './modules/fileTab'
import crrentFile from './modules/currentFile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    file,
    fileTab,
    crrentFile
  },
  strict: true
})