<template>
  <div>
    <div v-if="fileTree.isDir" @click="clickFile(fileTree)" @dblclick="fileTree.isFold=!fileTree.isFold" :class="[isClick?'click-file-div':'no-click-file-div']" :style="{paddingLeft:`${left}px`}">
      <i v-if="fileTree.isFold" class="fa fa-folder"></i>
      <i v-else class="fa fa-folder-open"></i>
      {{fileTree.name}}
    </div>
    <div v-else :class="[isClick?'click-file-div':'no-click-file-div']" :style="{paddingLeft:`${left}px`}" @click="clickFile(fileTree)">
      <i class=" fa fa-file-text "></i>
      {{fileTree.name}}
    </div>
    <file v-show="!fileTree.isFold" v-for="item in fileTree.children " :key="item " :file-tree="item " :left="left+leftAddNum " :left-add-num="leftAddNum "></file>
  </div>
</template>

<script>
import * as types from '../store/mutation-types'

export default {

  name: 'file',
  data() {
    return {
    }
  },
  computed: {
    isClick() {
      return this.$store.getters.clickFilePath === this.fileTree.path
    }
  },
  props: {
    fileTree: {},
    left: {},
    leftAddNum: {}
  },
  methods: {
    clickFile(fileObj) {
      this.$store.dispatch(types.SET_CLICK_FILE_PATH, fileObj.path)
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