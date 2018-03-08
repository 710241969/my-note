<template>
  <div class="file-tab-div" :class="[isCurentShowFile?'file-tab-current-div':'']" @click="choseCurrentFile(file)">
    <span class="file-name-span" v-html="file.name"></span>
    <i class="fa fa-times bar-close-i" @click.stop="closeFile(file)"></i>
  </div>
  <!-- <div class="file-tab-div  file-tab-chose-div">
                                                    <i class="fa fa-times bar-close-i"></i>
                                                  </div> -->
</template>

<script>
import * as types from '../../store/mutation-types'
export default {
  data() {
    return {}
  },
  computed: {
    isCurentShowFile() {
      return this.file.path === this.$store.getters.getCrrentFile.path
    }
  },
  props: {
    file: {},
    index: {}
  },
  created() {},
  methods: {
    choseCurrentFile(fileObj) {
      let file = this.$store.getters.getFileBarArray[this.index]
      this.$store.dispatch(types.SET_CURRENT_FILE, file) // 设置当前打开的文件路径
    },
    closeFile(fileObj) {
      this.$store.dispatch(types.RESET_CURRENT_FILE) // 重置当前文件
      this.$store.dispatch(types.DELETE_FILE_TAB_ITEM, fileObj.path) // 关闭文件
    }
  }
}
</script>

<style lang="scss">
.file-tab-div {
  height: 100%;
  min-width: 150px;
  border-left-color: rgb(243, 243, 243);
  border-right-color: rgb(243, 243, 243);
  background-color: rgb(236, 236, 236);
  float: left;
  text-align: center;
  position: relative; // border: 1px solid transparent;
  border-left: 1px solid #f3f3f3;
  border-right: 1px solid #f3f3f3;
  user-select: none;
  cursor: pointer;

  .file-name-span {
    /* top: 20px; */
    /* font-size: 16px; */
    /* margin-top: 9px; */
    padding-top: 9px;
    display: inline-block;
    /* display: block; */
  }

  &:hover > .bar-close-i {
    visibility: visible;
  }
  .bar-close-i {
    //关闭按钮<i></i>标签样式
    visibility: hidden;
    position: absolute;
    left: 133px;
    top: 10px;
  }
}

.file-tab-current-div {
  background-color: white;
}
</style>