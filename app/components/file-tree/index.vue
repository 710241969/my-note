<template>
  <!--文件目录树模块-->
  <main class="file-tree-main">

    <!--拖动条-->
    <div class="drag"></div>

    <!--文件目录头-->
    <div class="file-tree-head-div">笔记列表
      <!-- 文件操作按钮组 -->
      <span style="margin-left: 5px;">
        <!-- 添加文件按钮 -->
        <span class="file-btn-span" @click="showInput(1)">
          <i class="fa fa-plus file-btn-plus-i"></i>
          <i class="fa fa-file-text file-btn-i"></i>
        </span>
        <!-- 添加文件夹按钮 -->
        <span class="file-btn-span" @click="showInput(2)">
          <i class="fa fa-plus file-btn-plus-i"></i>
          <i class="fa fa-folder-open file-btn-i" style="transform: scaleY(1.3);"></i>
        </span>
        <!-- 刷新文件目录按钮 -->
        <span class="file-btn-span">
          <i class="fa fa-refresh file-btn-i"></i>
        </span>
      </span>
    </div>
    <!--文件目录树展示div-->
    <div class="file-content-div">
      <!--文件目录内容-->
      <file-item v-for="item in fileTree" :key="item" :file-tree="item" :left="left" :left-add-num="leftAddNum">
      </file-item>
    </div>

  </main>
</template>
<script>
import * as types from '../../store/mutation-types'
import FILE_TREE from '../../static/js/init.js'
import FileItem from './file-item.vue'
// import fileOperator from '../../static/utils/file-operator.js'

export default {
  data() {
    return {
      fileTree: [], // 文件树
      rootPath: '', // 根目录路径
      left: 12, // 文件树CSS样式定位值
      leftAddNum: 12 // 文件树CSS样式定位累加值
    }
  },
  computed: {
  },
  created() {
    this.fileTree = [FILE_TREE] // 初始化文件树
    this.rootPath = FILE_TREE.path // 初始化根目录路径数据
    // this.$store.dispatch(types.SET_ROOT_PATH, FILE_TREE.path)
  },
  methods: {
    // 显示输入框，通过type区分是创建文件还是创建文件夹，1文件，2文件夹
    showInput(type) {
      this.setCurrentPath()
      this.$store.dispatch(types.SET_CREATE_TYPE, type) // 设置创建的类型

      // 当输入框被加载后，在去设置获得光标。
      // 使用Promise就是为了在设置光标时，输入框已经被加载，否则报错，因为输入框还没加载完成
      new Promise((resolve, reject) => {
        this.$store.dispatch(types.SET_INPUT_VISIBLE, true)
        return resolve()
      }).then(() => {
        document.getElementById('name-input').focus()
      })
    },
    setCurrentPath() {
      if (!this.$store.getters.currentDirPath) {
        this.$store.dispatch(types.SET_CURRENT_DIR_PATH, this.rootPath)
        this.$store.dispatch(types.SET_CURRENT_DIR_OBJ, FILE_TREE)
      }
      if (this.$store.getters.currentDirOBJ.isFold) {
        this.$store.dispatch(types.UPDATE_CURRENT_DIR_OBJ_FOLD)
      }
    }
  },
  components: {
    FileItem
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
    background-color: black;
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
