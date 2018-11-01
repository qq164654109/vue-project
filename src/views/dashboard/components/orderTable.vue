<template>
  <div class="order-table">
    <el-table :data="tableData" height="450">
      <el-table-column v-for="item in columns" :key="item.prop" :prop="item.prop" :label="$t('dashboard.'+ item.prop)" :min-width="item.width"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            prop: 'orderId',
            width: 170
          },
          {
            prop: 'price',
            width: 60
          },
          {
            prop: 'status',
            width: 60
          }
        ],
        tableData: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order-table {

  }
</style>
