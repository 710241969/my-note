<template>
  <div>
    <div v-if="fileTree.isDir" class="file-div" :class="[isClick?'click-file-div':'no-click-file-div']" :style="{paddingLeft:`${left}px`}" @click="clickFile(fileTree)" @dblclick="dbclickUpdateFold">
      <!-- @dblclick="fileTree.isFold=!fileTree.isFold" -->
      <i :class="[fileTree.isFold?'fa fa-folder':'fa fa-folder-open']"></i>
      {{fileTree.name}}
    </div>
    <div v-else class="file-div" :class="[isClick?'click-file-div':'no-click-file-div']" :style="{paddingLeft:`${left}px`}" @click="clickFile(fileTree)" @dblclick="dbClickOpenText(fileTree)">
      <i class="fa fa-file-text "></i>
      {{fileTree.name}}
    </div>

    <!-- 文件名/目录名 输入框v-if="inputVisible"v-model="inputName"  -->
    <div v-if="inputVisible" :style="{marginLeft:`${left+12}px`}" style="height:20px;    position: relative;">
      <i :class="[createType===1?'fa fa-file-text':'fa fa-folder']" style="position: absolute;"></i>
      <div id="name-input" class="name-input" style="user-modify:read-write-plaintext-only;background-color:white;" @blur="createFileOrDir">
      </div>
    </div>

    <file v-show="!fileTree.isFold " v-for="(item,index) in fileTree.children " :key="item " :file-tree="item " :left="left+leftAddNum " :left-add-num="leftAddNum "></file>

  </div>
</template>

<script>
import * as types from '../../store/mutation-types'
import * as fileOperator from '../../static/utils/file-operator.js'

export default {

  name: 'file',
  data() {
    return {
      inputName: '',
      path: ''
      // fileTree: this.fileTrees
    }
  },
  props: {
    fileTree: {},
    left: {},
    leftAddNum: {}
  },
  watch: {
  },
  computed: {
    isClick() {
      return this.$store.getters.clickFilePath === this.fileTree.path
    },
    inputVisible() {
      return (
        this.$store.getters.currentDirPath === this.fileTree.path && this.$store.getters.inputVisible && this.fileTree.isDir)
    },
    createType() {
      return this.$store.getters.getCreateType
    }
  },
  created() {
  },
  methods: {
    // 点击文件
    clickFile(fileObj) {
      let path = fileObj.path
      // 设置当前所在文件路径
      if (fileObj.isDir) {
        this.$store.dispatch(types.SET_CURRENT_DIR_PATH, path)
        this.$store.dispatch(types.SET_CURRENT_DIR_OBJ, fileObj) // 设置当前所在文件夹对象
      } else {
        this.$store.dispatch(types.SET_CURRENT_DIR_PATH, path.substring(0, path.lastIndexOf('\\') + 1))
      }
      this.$store.dispatch(types.SET_CLICK_FILE_OBJ, fileObj)
    },
    dbclickUpdateFold() {
      this.$store.dispatch(types.UPDATE_CURRENT_DIR_OBJ_FOLD)
    },
    // 双击文件打开
    dbClickOpenText(fileObj) {
      let file = {
        name: fileObj.name,
        path: fileObj.path
      }
      file.content = fileOperator.readFile(fileObj.path)
      this.$store.dispatch(types.ADD_FILE_BAR_ITEM, file)// 文件BAR条添加文件对象
      this.$store.dispatch(types.SET_CURRENT_SHOW_FILE, file)// 设置当前打开的文件路径
    },
    // 创建文件夹或者文件
    createFileOrDir() {
      this.inputName = document.getElementById('name-input').innerText
      return new Promise((resolve, reject) => {
        if (this.inputName) {
          fileOperator.createFileOrDir(this.$store.getters.currentDirPath + this.inputName, this.$store.getters.getCreateType).then(() => {
            this.inputName = ''
            this.fileTree = fileOperator.throughPath(this.fileTree)
            return resolve()
          })
        } else {
          this.inputName = ''
        }
        return resolve()
      }).then(() => {
        this.$store.dispatch(types.SET_INPUT_VISIBLE, false)
      })
    }
  }
}
</script>

<style lang="scss">
.name-input {
  height: 18px;
  position: absolute;
  left: 19px;
  right: 0;
  border: none;
  &:focus {
    outline: rgba(0, 122, 204, 0.4) solid 1px // outline: none; // border: 1px solid rgba(0, 122, 204, 0.4);
  }
}

.file-div {
  height: 20px;
  cursor: pointer;
}

.no-click-file-div {
  &:hover {
    background-color: #cccedb
  }
}

.click-file-div {
  color: white;
  background-color: #6c6c6c
}
</style>