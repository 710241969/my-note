<template>
  <div id="app">
    <head-nav></head-nav>
    <file-tree></file-tree>
    <text-show></text-show>
  </div>
</template>

<script>
import HeadNav from './components/HeadNav.vue'
import FileTree from './components/file-tree'
import TextShow from './components/TextShow.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    'head-nav': HeadNav,
    'file-tree': FileTree,
    'text-show': TextShow
  },
  created() {
  }
}

</script>

<style lang="scss">
@import '../node_modules/font-awesome/css/font-awesome.css';
* {
  margin: 0;
  padding: 0;
}
</style>