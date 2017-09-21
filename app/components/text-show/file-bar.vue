<template>
  <div class="file-bar-div" :class="[isCurentShowFile?'file-bar-current-div':'']" @click="changeOpenFile(file)">
    <span class="file-name-span" v-html="file.name"></span>
    <i class="fa fa-times bar-close-i"></i>
  </div>
  <!-- <div class="file-bar-div  file-bar-chose-div">
                                                    <i class="fa fa-times bar-close-i"></i>
                                                  </div> -->
</template>

<script>
import * as types from '../../store/mutation-types'
export default {
  data() {
    return {
    }
  },
  computed: {
    isCurentShowFile() {
      return this.file.path === this.$store.getters.getCurrentShowFile.path
    }
  },
  props: {
    file: {},
    index: {}
  },
  created() {
  },
  methods: {
    changeOpenFile(fileObj) {
      let file = this.$store.getters.getFileBarArray[this.index]
      this.$store.dispatch(types.SET_CURRENT_SHOW_FILE, file)// 设置当前打开的文件路径
    }
  }
}

</script>

<style lang="scss">
.file-bar-div {
  height: 100%;
  width: 150px;
  border-left-color: rgb(243, 243, 243);
  border-right-color: rgb(243, 243, 243);
  background-color: rgb(236, 236, 236);
  float: left;
  text-align: center;
  position: relative; // border: 1px solid transparent;
  border-left: 1px solid #f3f3f3;
  border-right: 1px solid #f3f3f3;
  cursor: pointer;

  .file-name-span {
    /* top: 20px; */
    /* font-size: 16px; */
    /* margin-top: 9px; */
    padding-top: 9px;
    display: inline-block;
    /* display: block; */
  }

  &:hover>.bar-close-i {
    visibility: visible;
  }
  .bar-close-i {
    visibility: hidden;
    position: absolute;
    left: 133px;
    top: 10px;
  }
}

.file-bar-current-div {
  background-color: white;
}
</style>