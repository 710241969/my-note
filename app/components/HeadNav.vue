<template>
  <!--顶部灰色导航栏-->
  <nav class="head-nav-main">

    <!--头像-->
    <div class="icon-div">
    </div>

    <!--头像右侧部分-->
    <div style="margin-left: 160px;position: relative;">

      <!--窗口按钮-->
      <div class="nav-window-div">
        <div class="window-div" style="">
          <i class="fa fa-window-minimize window-i" @click="minWin"></i>
          <i v-if="isMaximized" class="fa fa-window-restore window-i" @click="restore"></i>
          <i v-else class="fa fa-window-maximize window-i" @click="maxWin"></i>
          <i class="fa fa-window-close-o window-i window-i-close" @click="closeWin"></i>
        </div>
      </div>

      <!--搜索框-->
      <div class="nav-search-div" style="min-width: 500px;height: 40px;">
        <div class="search-div">
          <i class="fa fa-search search-i"></i>
          <input class="search-input" placeholder="输入搜索内容" />
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
import { remote } from 'electron'

export default {
  data() {
    return {
      isMaximized: null
    }
  },
  created() {
    this.isMaximized = remote.getCurrentWindow().isMaximized()
  },
  methods: {
    minWin() {
      remote.getCurrentWindow().minimize()
    },
    restore() {
      remote.getCurrentWindow().restore()
      this.isMaximized = false
    },
    maxWin() {
      remote.getCurrentWindow().maximize()
      this.isMaximized = true
    },
    closeWin() {
      remote.getCurrentWindow().close()
    }
  }
}

</script>

<style lang="scss">
.head-nav-main {
  width: 100%;
  min-width: 1280px;
  height: 60px;
  background-color: #e6e6e6;
  border-bottom: 1px solid #a8a8a8;
  position: fixed;
  user-select: none;

  .icon-div {
    width: 50px;
    height: 50px;
    margin: 5px;
    background-color: black;
    float: left;
    cursor: pointer;
  }

  .nav-window-div {
    min-width: 500px;
    height: 20px;
    .window-div {
      right: 4px;
      position: fixed;
      top: 3px;
      .window-i {
        width: 40px;
        text-align: center;
        color: #969696;
        cursor: pointer;
        border-bottom: 1px solid ghostwhite;
        border-left: 1px solid ghostwhite;
        border-right: 1px solid ghostwhite;
        &:hover {
          background-color: #f0f0f0;
        }
      }
      .window-i-close {
        &:hover {
          color: white;
          background-color: red;
        }
      }
    }
  }

  .nav-search-div {
    min-width: 500px;
    height: 40px;
    .search-div {
      width: 250px;
      height: 30px;
      margin: 5px;
      font-size: 14px;
      display: inline-block;
      position: relative;
      .search-i {
        position: absolute;
        width: 20px;
        height: 20px;
        padding: 5px 5px 5px 10px;
        right: 0;
        top: 0;
        text-align: center;
        color: #bfcbd9;
        font-size: 1.3em;
        cursor: pointer;
        &:hover {
          color: #8391a5;
        }
      }
      .search-i:hover+.search-input {
        border-color: #8391a5;
      }
      .search-input {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: block;
        font-size: inherit;
        height: 100%;
        line-height: 1;
        outline: none;
        padding-top: 3px;
        padding-right: 35px;
        padding-bottom: 3px;
        padding-left: 10px;
        width: 100%;
        padding-right: 35px;
        &:hover {
          border-color: #8391a5;
        }
        &:focus {
          outline: none;
          border-color: #20a0ff;
        }
      }
    }
  }
}
</style>