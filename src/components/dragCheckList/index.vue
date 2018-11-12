<template>
  <div class="drag-check-list">
    <div class="left">
      <div class="title">可选项目</div>
      <draggable element="ul" class="left-list" :options="{group:'list', dragClass: 'active'}" :list="filterList">
        <li class="item" v-for="item in filterList" :key="item.key">
          {{item.label}} <span @click.stop="handleCheck(item)" class="del el-icon-check"></span>
        </li>
      </draggable>
    </div>
    <div class="right">
      <div class="title">选择项目</div>
      <draggable element="ul" class="right-list" :options="{group:'list'}" :list="checkedList">
        <li class="item" v-for="item in checkedList" :key="item.key">
          {{item.label}} <span @click="handleCancle(item)" class="del el-icon-back"></span>
        </li>
      </draggable>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    props: {
      checkList: {
        type: Array,
        default() {
          return []
        }
      },
      checkedList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      handleCheck(item) {
        this.checkedList.push(item);
      },
      handleCancle(item) {
        for (const [index, ele] of this.checkedList.entries()) {
          if (item.key === ele.key) {
            this.checkedList.splice(index, 1);
            break;
          }
        }
      },
      push(item) {
        this.list1.push(item);
      },
      isCheckedItem(item) {
        let flag = false;
        for (let i = 0, l = this.checkedList.length; i < l; i++) {
          if (item.key === this.checkedList[i].key) {
            flag = true;
            break;
          }
        }
        return flag;
      }
    },
    computed: {
      filterList() {
        let list = this.checkList.filter(item => !this.isCheckedItem(item));
        return list;
      }
    },
    components: {
      draggable
    }
  }
</script>

<style lang="scss" scoped>
  .drag-check-list {
    width: 100%;
    .left, .right {
      float: left;
      width: 50%;
      height: 500px;
      padding: 20px 30px;
      .title {
        height: 40px;
        padding: 0 20px;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        background-color: #409eff;
        border-radius: 4px;
        margin-bottom: 15px;
      }
    }
    .left {
      border-right: 1px solid #409eff;
    }
    .active {
      background-color: #409eff;
      color: #fff;
      opacity: 1;
    }
    .item {
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      font-size: 16px;
      color: #333;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      cursor: move;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      &.sortable-chosen {
        background: #9cdbff;
        color: #fff;
      }
      &.sortable-ghost {
        background: #409eff;
        color: #fff;
      }
      .del {
        display: inline-block;
        height: 100%;
        line-height: 40px;
        float: right;
        cursor: pointer;
      }
    }
  }
</style>

