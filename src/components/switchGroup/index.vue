<template>
  <div class="switch-group">
    <span v-for="item in group" :key="item.key" class="switch-item"
          :class="{'active': activeKey === item.key}" @click="handleChange(item)">
      {{item.label}}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      activeKey: {
        type: [String, Number]
      },
      group: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      handleChange(item) {
        this.$emit('change', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .switch-group {
    display: inline-block;
    .switch-item {
      display: inline-block;
      padding: 0 20px;
      height: 34px;
      line-height: 34px;
      border: 1px solid #ebebeb;
      border-right: none;
      cursor: pointer;
      &:first-child {
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-right: 1px solid #ebebeb;
        border-radius: 0 4px 4px 0;
      }
      &.active {
        background-color: #67C23A;
        border-color: #67C23A;
        color: #fff;
      }
    }
  }
</style>
