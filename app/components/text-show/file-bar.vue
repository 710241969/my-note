<template>
  <div class="file-bar-div">
    <span class="file-name-span" v-html="file.name"></span>
    <i class="fa fa-times bar-close-i"></i>
  </div>
  <!-- <div class="file-bar-div  file-bar-chose-div">
                  <i class="fa fa-times bar-close-i"></i>
                </div> -->
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    file: {}
  },
  created() {
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
  position: relative;

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

.file-bar-chose-div {
  background-color: white;
}
</style>