<template>
    <div class="drag-check-item">
      {{checkItem.label}}
      <span @click.stop="handleCheck()" class="check-btn">
        <i class="el-icon-check"></i>
      </span>
    </div>
</template>

<script>
    export default {
      props: {
        checkItem: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      data() {
        return {
          checked: false
        }
      },
      methods: {
        handleCheck() {
          this.checked = !this.checked;
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
