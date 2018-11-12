<template>
  <div class="drag-list-demo">
    <drag-check-list :check-list="checkList" :checked-list="checkedList"></drag-check-list>
  </div>
</template>

<script>
  import dragCheckList from '@/components/dragCheckList/index';

  export default {
    data() {
      return {
        checkList: [
          { key: 1, label: 'item1'},
          { key: 2, label: 'item2'},
          { key: 3, label: 'item3'},
          { key: 4, label: 'item4'},
          { key: 5, label: 'item5'},
          { key: 6, label: 'item6'},
          { key: 7, label: 'item7'}
        ],
        checkedList: [
          { key: 4, label: 'item4'},
          { key: 5, label: 'item5'},
          { key: 6, label: 'item6'},
          { key: 7, label: 'item7'}
        ]
      }
    },
    components: {
      dragCheckList
    }
  }
</script>

<style lang="scss" scoped>
  .drag-list-demo {
    padding: 50px 450px;
  }
</style>
