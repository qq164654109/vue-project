<template>
  <div class="drag-window-demo">
    <el-button type="primary" @click="dialogVisible = true">打开弹窗</el-button>
    <el-dialog v-drag-dialog title="可拖拽弹窗" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          dialogVisible: false
        }
      }
    }
</script>

<style lang="scss" scoped>
  .drag-window-demo {
    padding: 30px 50px;
  }
</style>
