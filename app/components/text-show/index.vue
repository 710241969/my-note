<template>
  <!--文本内容-->
  <div class="text-show">
    <!-- 标签页 -->
    <div style="height:39px;background-color:rgb(243, 243, 243);box-shadow: 0px 1px 10px black;">
      <file-bar v-for="file in this.$store.getters.getFileBarArray" :key="file" :file="file"></file-bar>
    </div>
    <div style="height: 670px;">
      <div contenteditable="true" class="title-input-div"></div>
      <div contenteditable="true" class="text-input-div"></div>
    </div>
  </div>
</template>

<script>
import fileBar from './file-bar.vue'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    fileBar
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
  overflow-x: auto;
  overflow-y: auto;
}



.title-input-div {
  // text-align: center;
  padding: 10px 10px 0 10px;
  height: 29px; // margin-top: 10px;
  font-size: 25px;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid black;
  border-left: none; // position: absolute;
  // left: 0;
  // right: 0;
  &:focus {
    outline: none;
  }
}

.text-input-div {
  padding: 10px;
  height: 610px;
  &:focus {
    outline: none;
  }
}
</style>
