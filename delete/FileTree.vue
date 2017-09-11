<template>
  <!--文件目录树-->
  <main class="file-tree-main">

    <!--拖动条-->
    <div class="drag"></div>

    <!--文件目录头-->
    <div class="file-tree-head-div">笔记列表
      <span style="position: relative;">
        <i class="fa fa-plus" style="position: absolute;color: green;left: -6px;top: -7px;font-size: 15px;border:"></i>
        <i class="fa fa-file-text" style="color: white;"></i>
      </span>
      <span style="position: relative;">
        <i class="fa fa-plus" style="position: absolute;color: green;left: -6px;top: -7px;font-size: 15px; z-index:2;"></i>
        <i class="fa fa-folder-open" style="color: white;transform: scaleY(1.3);"></i>
      </span>
      <i class="fa fa-refresh"></i>
    </div>

    <!--文件目录div-->
    <div class="file-content-div">
      <!--文件目录内容-->
      <file-item v-for="item in fileTree" :key="item" :file-tree="item" :left="left" :left-add-num="leftAddNum"></file-item>
    </div>

  </main>
</template>
<script>
import fileTree from '../static/js/init.js'
import fileItem from './file-item.vue'

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
}
</style>
