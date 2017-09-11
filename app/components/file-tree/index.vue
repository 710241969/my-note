<template>
  <!--文件目录树-->
  <main class="file-tree-main">

    <!--拖动条-->
    <div class="drag"></div>

    <!--文件目录头-->
    <div class="file-tree-head-div">笔记列表
      <!-- 文件操作按钮组 -->
      <span style="margin-left: 5px;">
        <!-- 添加文件按钮 -->
        <span class="file-btn-span" @click="createText">
          <i class="fa fa-plus file-btn-plus-i"></i>
          <i class="fa fa-file-text file-btn-i"></i>
        </span>
        <!-- 添加文件夹按钮 -->
        <span class="file-btn-span" @click="createDir">
          <i class="fa fa-plus file-btn-plus-i"></i>
          <i class="fa fa-folder-open file-btn-i" style="transform: scaleY(1.3);"></i>
        </span>
        <!-- 刷新文件目录按钮 -->
        <span class="file-btn-span">
          <i class="fa fa-refresh file-btn-i"></i>
        </span>
      </span>
    </div>

    <!--文件目录div-->
    <div class="file-content-div">
      <!--文件目录内容-->
      <file-item v-for="item in fileTree" :key="item" :file-tree="item" :left="left" :left-add-num="leftAddNum"></file-item>
    </div>

  </main>
</template>
<script>
import * as types from '../../store/mutation-types'
import fileTree from '../../static/js/init.js'
import fileItem from './file-item.vue'
import { createDir, createText } from '../../static/utils/file-operator.js'

export default {
  data() {
    return {
      fileTree: [],
      left: 12,
      leftAddNum: 12
    }
  },
  created() {
    this.fileTree = [fileTree]
    this.$store.dispatch(types.SET_INIT_PATH, fileTree.path)
  },
  methods: {
    createText() {
      this.$store.dispatch(types.SET_INPUT_VISIBLE, true)
      let path = this.getPath()
      createText(path)
    },
    createDir() {
      this.$store.dispatch(types.SET_INPUT_VISIBLE, true)
      let path = this.getPath()
      createDir(path)
    },
    getPath() {
      let path = this.$store.getters.clickFilePath
      if (!path) {
        path = this.$store.getters.initPath
      }
      if (!this.$store.getters.clickFileObj.isDir) {
        path = path.substring(0, path.lastIndexOf('\\') + 1)
      }
      console.log(path)
      return path
    }
  },
  components: {
    fileItem
  }
}
</script>

<style lang="scss">
.file-tree-main {
  top: 61px;
  width: 200px;
  height: 100%;
  background-color: rgb(0, 191, 255);
  position: fixed;
  user-select: none;

  .file-tree-head-div {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #888888;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    line-height: 30px;
  }
  .file-content-div {
    top: 51px;
    bottom: 0;
    right: 5px;
    left: 0;
    margin-bottom: 61px;
    background-color: #f0f0f0;
    position: absolute;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .drag {
    height: 100%;
    width: 5px;
    background-color: white;
    float: right;
    cursor: ew-resize;
  }

  .file-ul {
    border-left: 1px solid black;
    margin: 3px 0 3px 5px;
    list-style: none;
  }
  .file-li {
    margin: 2px 0 2px 5px;
    list-style: none;
  }
  .file-btn-span {
    margin: 0 3px 0 3px;
    position: relative;
    color: white;
    cursor: pointer;
    .file-btn-plus-i {
      position: absolute;
      color: green;
      left: -6px;
      top: -3px;
      font-size: 15px;
      z-index: 2;
    }
    .file-btn-i {
      font-size: 15px;
    }
  }
}
</style>
