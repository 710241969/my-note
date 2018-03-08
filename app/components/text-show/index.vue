<template>
  <!--文本内容-->
  <div class="text-show">
    <!-- 标签页 -->
    <div style="height:39px;background-color:rgb(243, 243, 243);box-shadow: 0px 1px 10px black;">
      <file-tab v-for="(file,index) in fileTabArray" :key="file" :file="file" :index="index"></file-tab>
    </div>
    <div style="height: 670px;">

      <div style="position:relative;">
        <hr class="option-btn-hr" />
        <span style="margin-left:5px;">
          <i v-if="currentShowFileEditable" class="fa fa-unlock option-btn-i" @click="saveContent">保存</i>
          <i v-else class="fa fa-lock option-btn-i" @click="editContent">编辑</i>
          <i class="fa fa-trash option-btn-i"></i>
        </span>
      </div>

      <!-- 标题 -->
      <div contenteditable="true" class="title-input-div"></div>

      <editor-bar v-if="currentShowFileEditable"></editor-bar>

      <!-- 正文内容 -->
      <content-div v-model="contentHTML"></content-div>
    </div>
  </div>
  </div>
</template>

<script>
import * as types from '../../store/mutation-types'
import FileTab from './file-tab.vue'
import EditorBar from './editor-bar.vue'
import ContentDiv from './content-div.vue'
import * as fileOperator from '../../static/utils/file-operator.js'

export default {
  data() {
    return {
      contentHTML: ''
      // currentFile: {}
    }
  },
  computed: {
    // 文件Tab标签页列表
    fileTabArray() {
      return this.$store.getters.getFileBarArray
    },
    currentFile() {
      return this.$store.getters.getCurrentShowFile
    },
    currentFileContent() {
      return this.$store.getters.getCrrentFile.content
    },
    currentShowFileEditable() {
      return this.$store.getters.getCurrentShowFile.editable
    }
  },
  watch: {
    // 当前文件内容改变则改变传入编辑div的内容
    currentFileContent: function(val, oldVal) {
      this.contentHTML = val
    }
  },
  created() {},
  mounted() {},
  methods: {
    saveContent() {
      // 修改 保存/编辑状态 按钮从保存变为编辑（可编辑）
      this.$store.dispatch(types.SET_EDITABLE, false)
      // 修改并保存内容
      this.$store.dispatch(types.UPDATE_CONTENT, this.contentHTML)
      fileOperator.writeFile(this.currentFile.path, this.contentHTML)
    },
    editContent() {
      // 修改 保存/编辑状态 按钮从编辑变为保存（不可编辑）
      this.$store.dispatch(types.SET_EDITABLE, true)
    }
  },
  components: {
    FileTab,
    EditorBar,
    ContentDiv
  }
}
</script>

<style lang="scss">
.text-show {
  top: 61px;
  right: 0px;
  bottom: 0px;
  left: 200px;
  background-color: white;
  position: absolute;
  overflow-y: hidden;
}

.title-input-div {
  // text-align: center;
  padding: 10px 10px 0 10px;
  height: 29px; // margin-top: 10px;
  font-size: 25px;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid #cccccc;
  border-left: none; // position: absolute;
  // left: 0;
  // right: 0;
  &:focus {
    outline: none;
  }
}

.option-btn-hr {
  position: absolute;
  top: 20px;
  left: 0px;
  right: 0px;
  z-index: 1;
}

.option-btn-i {
  background-color: rgb(243, 243, 243);
  font-size: 20px;
  padding: 4px;
  min-width: 20px;
  height: 20px;
  text-align: center;
  margin: 6px 0 0 2px;
  border: 2px solid gainsboro;
  position: relative;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
}
</style>
