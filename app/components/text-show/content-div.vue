<template>
  <div :contenteditable="currentShowFileEditable" class="content-input-div" @input="changeContent" v-html="contentHTML" @focus="isLocked = true" @blur="isLocked = false">
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentHTML: this.value,
      isLocked: false // 相当于写锁，获得光标则加写锁，失去光标则解开写锁
    }
  },

  props:
  {
    /**
     * 固定为value,语法糖
     * v-bind:value="something"
     * v-on:input="something = $event.target.value"
     * 参考：https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
     */
    value: {
      type: String,
      default: ''
    }

  },
  computed: {
    currentShowFileEditable() {
      return this.$store.getters.getCrrentFile.editable
    }
  },
  watch: {
    value: function(val, oldVal) {
      // 非上锁状态，或者当前contentHTML为空，则将父组件的值更新进来
      if (!this.isLocked || !this.contentHTML) {
        this.contentHTML = val
      }
    }
  },
  created() {
    // this.contentHTML = this.value
  },
  methods: {
    changeContent(event) {
      // 通过 input 事件发出数值
      this.$emit('input', this.$el.innerHTML) // 或者event.target.innerHTML
    }
  }
}

</script>

<style lang="scss">
.content-input-div {
  padding: 10px;
  height: 530px;
  overflow-y: auto;
  &:focus {
    outline: none;
  }
  ul,
  ol {
    margin: 10px 20px;
  }
}
</style>