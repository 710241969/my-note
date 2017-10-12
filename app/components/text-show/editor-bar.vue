<template>
  <div style="padding: 5px;background-color:#f1f1f1;border-bottom: 1px solid #cccccc;">
    <button class="edit-btn">
      <i class=" fa fa-bold edit-btn-i" @click="execCommand('bold')"></i>
    </button>
    <button class="edit-btn">
      <i class="fa fa-italic edit-btn-i" @click="execCommand('italic')"></i>
    </button>
    <button class="edit-btn">
      <i class="fa fa-underline edit-btn-i" @click="execCommand('underline')"></i>
    </button>

    <!-- 在插入点或者选中文字部分修改字体名称. 需要提供一个字体名称字符串 (例如："Arial")作为参数 -->
    <button class="edit-btn">
      <i class="fa fa-font edit-btn-i" @click="execCommand('fontName')"></i>
    </button>
    <button class="edit-btn">
      <i class="fa fa-text-height edit-btn-i" @click="execCommand('fontSize')"></i>
    </button>
    <button class="edit-btn">
      <i class="fa fa-pencil edit-btn-i" @click="execCommand('foreColor')"></i>
    </button>
    <button class="edit-btn">
      <i class="fa fa-pencil-square edit-btn-i" @click="execCommand('backColor')"></i>
    </button>
    <button class="edit-btn">
      <i class="fa fa-eraser edit-btn-i" @click="execCommand('removeFormat')"></i>
    </button>

    <!-- 对光标插入位置或者所选内容进行左对齐 -->
    <button class="edit-btn">
      <i class="fa fa-align-left edit-btn-i" @click="execCommand('justifyLeft')"></i>
    </button>

    <!-- 对光标插入位置或者所选内容进行右对齐 -->
    <button class="edit-btn">
      <i class="fa fa-align-right edit-btn-i" @click="execCommand('justifyRight')"></i>
    </button>

    <!-- 对光标插入位置或者所选内容进行文字居中 -->
    <button class="edit-btn">
      <i class="fa fa-align-center edit-btn-i" @click="execCommand('justifyCenter')"></i>
    </button>

    <!-- 对光标插入位置或者所选内容进行文本对齐 -->
    <button class="edit-btn">
      <i class="fa fa-align-justify edit-btn-i" @click="execCommand('justifyFull')"></i>
    </button>

    <!-- 在插入点或者选中文字上创建一个有序列表 -->
    <button class="edit-btn">
      <i class="fa fa-list-ol edit-btn-i" @click="execCommand('insertOrderedList')"></i>
    </button>

    <!-- 在插入点或者选中文字上创建一个无序列表 -->
    <button class="edit-btn">
      <i class="fa fa-list-ul edit-btn-i" @click="execCommand('insertUnorderedList')"></i>
    </button>

    <!-- 启用或禁用表格行和列插入和删除控件。(IE浏览器不支持) -->
    <button class="edit-btn">
      <i class="fa fa-table edit-btn-i" @click="execCommand('enableInlineTableEditing')"></i>
    </button>

    <!-- 在光标插入点开启或关闭删除线 -->
    <button class="edit-btn">
      <i class="fa fa-strikethrough edit-btn-i" @click="execCommand('strikeThrough')"></i>
    </button>

    <!-- 将选中内容创建为一个锚链接。这个命令需要一个HREF URI字符串作为参数值传入。URI必须包含至少一个字符，例如一个空格。（浏览器会创建一个空链接） -->
    <button class="edit-btn">
      <i class="fa fa-link edit-btn-i" @click="execCommand('createLink')"></i>
    </button>

    <!-- 去除所选的锚链接的<a>标签 -->
    <button class="edit-btn">
      <i class="fa fa-unlink edit-btn-i" @click="execCommand('unlink')"></i>
    </button>

    <!-- 添加一个HTML块式标签在包含当前选择的行, 如果已经存在了，更换包含该行的块元素 (在 Firefox中, BLOCKQUOTE 是一个例外 -它将包含任何包含块元素). 需要提供一个标签名称字符串作为参数。几乎所有的块样式标签都可以使用(例如. "H1", "P", "DL", "BLOCKQUOTE"). (IE浏览器仅仅支持标题标签 H1 - H6, ADDRESS, 和 PRE,使用时还必须包含标签分隔符 < >, 例如 "<H1>".) -->
    <button class="edit-btn">
      <i class="fa fa-code edit-btn-i" @click="execCommand('formatBlock','<pre>')"></i>
    </button>

    <!-- 在插入点插入一个水平线（删除选中的部分 -->
    <button class="edit-btn">
      <i class="fa fa-minus edit-btn-i" @click="execCommand('insertHorizontalRule')"></i>
    </button>

    <!-- 选中编辑区里的全部内容 -->
    <button class="edit-btn">
      <i class="fa fa-minus edit-btn-i" @click="execCommand('selectAll')"></i>
    </button>

    <!-- 撤销最近执行的命令 -->
    <button class="edit-btn">
      <i class="fa fa-undo edit-btn-i" @click="execCommand('undo')"></i>
    </button>

    <!-- 重做被撤销的操作 -->
    <button class="edit-btn">
      <i class="fa fa-repeat edit-btn-i" @click="execCommand('redo')"></i>
    </button>

    <!-- 在光标插入点开启或关闭下角标 -->
    <button class="edit-btn">
      <i class="fa fa-subscript edit-btn-i" @click="execCommand('subscript')"></i>
    </button>

    <!-- 在光标插入点开启或关闭上角标 -->
    <button class="edit-btn">
      <i class="fa fa-superscript edit-btn-i" @click="execCommand('superscript')"></i>
    </button>

    <button class="edit-btn">
      <i class="fa fa-minus edit-btn-i" @click="execCommand('undo')"></i>
    </button>

    <button class="edit-btn">
      <i class="fa fa-minus edit-btn-i" @click="execCommand('undo')"></i>
    </button>

    <button class="edit-btn">
      <i class="fa fa-minus edit-btn-i" @click="execCommand('undo')"></i>
    </button>

    <button class="edit-btn">
      <i class="fa fa-minus edit-btn-i" @click="execCommand('undo')"></i>
    </button>

    <button class="edit-btn">
      <i class="fa fa-minus edit-btn-i" @click="execCommand('undo')"></i>
    </button>

    <button class="edit-btn">
      <i class="fa fa-minus edit-btn-i" @click="execCommand('undo')"></i>
    </button>

    <button @click="execCommand('insertHorizontalRule')">asd</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: null
    }
  },
  created() {
  },
  methods: {
    textBold() {
      document.execCommand('Bold', true, null)
    },
    execCommand(commandName, valueArgument) {
      // valueArgument = valueArgument || null
      if (!valueArgument) {
        valueArgument = null
      }
      document.execCommand(commandName, false, valueArgument)
    }
  }
}

</script>

<style lang="scss">
.edit-btn {
  border: none;
  outline: none;
  background: transparent;
}


.edit-btn-i {
  color: #999;
  width: 20px;
  height: 20px;
  padding: 4px;
  display: table-cell;
  text-align: center;
  line-height: 20px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    background-color: #adadad;
  }
}

.active {
  color: #1e88e5;
}
</style>