<template>
  <div>
    <div v-if="fileTree.isDir" :class="[isClick?'click-file-div':'no-click-file-div']" :style="{paddingLeft:`${left}px`}" @click="clickFile(fileTree)" @dblclick="fileTree.isFold=!fileTree.isFold">
      <i v-if="fileTree.isFold" class="fa fa-folder"></i>
      <i v-else class="fa fa-folder-open"></i>
      {{fileTree.name}}
    </div>
    <div v-else :class="[isClick?'click-file-div':'no-click-file-div']" :style="{paddingLeft:`${left}px`}" @click="clickFile(fileTree)" @dblclick="dbClickOpenText(fileTree)">
      <i class=" fa fa-file-text "></i>
      {{fileTree.name}}
    </div>
    <input v-if="inputVisible">
    <file v-show="!fileTree.isFold" v-for="(item,index) in fileTree.children " :key="item " :file-tree="item " :left="left+leftAddNum " :left-add-num="leftAddNum"></file>
  </div>
</template>

<script>
import * as types from '../../store/mutation-types'
import { getFileContent } from '../../static/utils/file-operator.js'

export default {

  name: 'file',
  data() {
    return {
    }
  },
  props: {
    fileTree: {},
    left: {},
    leftAddNum: {}
  },
  computed: {
    isClick() {
      return this.$store.getters.clickFilePath === this.fileTree.path
    },
    inputVisible() {
      return (
        this.$store.getters.currentDirPath === this.fileTree.path && this.$store.getters.inputVisible && this.fileTree.isDir)
    }
  },
  methods: {
    clickFile(fileObj) {
      let path = fileObj.path
      if (fileObj.isDir) {
        this.$store.dispatch(types.SET_CURRENT_DIR_PATH, path)
      } else {
        this.$store.dispatch(types.SET_CURRENT_DIR_PATH, path.substring(0, path.lastIndexOf('\\') + 1))
      }
      this.$store.dispatch(types.SET_CLICK_FILE_OBJ, fileObj)
    },
    // 双击文件打开
    dbClickOpenText(fileObj) {
      let file = {
        name: fileObj.name,
        path: fileObj.path
      }
      file.content = getFileContent(fileObj.path)
      this.$store.dispatch(types.ADD_FILE_BAR_ITEM, file)// 文件BAR条添加文件对象
      this.$store.dispatch(types.SET_CURRENT_SHOW_FILE, file)// 设置当前打开的文件路径

      // console.log()
      // console.log(file)
      // console.log()
    }
  }
}
</script>

<style lang="scss">
.no-click-file-div {
  cursor: pointer;
  &:hover {
    background-color: #cccedb
  }
}

.click-file-div {
  cursor: pointer;
  background-color: #6c6c6c
}
</style>