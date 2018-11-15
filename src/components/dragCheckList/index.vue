<template>
  <div class="drag-check-list">
    <div class="left">
      <div class="title">
        可选项目
        <span class="check-group">
           <el-checkbox :indeterminate="leftCheckStatus" v-model="isLeftCheckedAll" @change="leftHandleCheckAll">&nbsp;</el-checkbox>
        </span>
      </div>
      <el-checkbox-group v-model="leftCheckedGroup" size="small" @change="leftHandleCheckedChange">
        <draggable element="ul" class="list" :options="{group:'checklist', dragClass: 'active'}" :list="filterList">
          <li class="item" v-for="item in filterList" :key="item.key">
            {{item.label}}
            <span class="check-btn">
              <el-checkbox :label="item" :key="item.key">&nbsp;</el-checkbox>
            </span>
          </li>
        </draggable>
      </el-checkbox-group>
    </div>
    <div class="center">
      <div class="to-checked-btn" @click="toChecked">
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="to-uncheck-btn" @click="toUnchecked">
        <i class="el-icon-arrow-left"></i>
      </div>
    </div>
    <div class="right">
      <div class="title">
        选择项目
        <span class="check-group">
           <el-checkbox :indeterminate="rightCheckStatus" v-model="isRightCheckedAll" @change="rightHandleCheckAll">&nbsp;</el-checkbox>
            </span>
    </div>
    <el-checkbox-group v-model="rightCheckedGroup" size="small" @change="rightHandleCheckedChange">
      <draggable element="ul" class="list" :options="{group:'checklist'}" :list="checkedList">
        <li class="item" v-for="item in checkedList" :key="item.key">
          {{item.label}}
            <span class="check-btn">
              <el-checkbox :label="item" :key="item.key">&nbsp;</el-checkbox>
            </span>
          </li>
        </draggable>
      </el-checkbox-group>
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
    data() {
      return {
        leftCheckStatus: false,
        rightCheckStatus: false,
        isLeftCheckedAll: false,
        isRightCheckedAll: false,
        leftCheckedGroup: [],
        rightCheckedGroup: []
      }
    },
    methods: {
      leftHandleCheckAll(val) {
        this.leftCheckedGroup = val ? [...this.filterList] : [];
        this.leftCheckStatus = false;
      },
      leftHandleCheckedChange(val) {
        let count = val.length;
        this.isLeftCheckedAll = count === this.filterList.length;
        this.leftCheckStatus = count > 0 && count < this.filterList.length;
      },
      rightHandleCheckAll(val) {
        this.rightCheckedGroup = val ? [...this.checkedList] : [];
        this.rightCheckStatus = false;
      },
      rightHandleCheckedChange(val) {
        let count = val.length;
        this.isRightCheckedAll = count === this.checkedList.length;
        this.rightCheckStatus = count > 0 && count < this.checkedList.length;
      },
      toChecked() {
        console.log(this.checkedList);
        this.checkedList = this.checkedList.concat(this.leftCheckedGroup);
        this.leftCheckedGroup = [];
      },
      toUnchecked() {
        this.rightCheckedGroup.forEach(item => {
          for (let i = this.checkedList.length - 1; i >= 0; i--) {
            console.log(this.checkedList[i].key, item.key)
            if (item.key === this.checkedList[i].key) {
              this.checkedList.splice(i, 1)
            }
          }
        })
        this.rightCheckedGroup = [];
      },
      handleCheck(item) {
        this.checkedList.push(item);
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
    display: flex;
    align-items: center;
    width: 100%;
    .left, .right {
      flex: 1;
      height: 500px;
      padding: 20px 30px;
      .title {
        height: 50px;
        padding: 0 20px;
        line-height: 50px;
        font-size: 16px;
        color: #fff;
        background-color: #67C23A;
        border-radius: 4px;
        .check-group {
          float: right;
          display: inline-block;
        }
      }
    }
    .list {
      background-color: #F0F0F0;
      padding: 10px 15px;
    }
    .active {
      background-color: #409eff;
      color: #fff;
      opacity: 1;
    }
    .item {
      width: 100%;
      height: 64px;
      margin-bottom: 15px;
      padding: 0 20px;
      line-height: 64px;
      font-size: 16px;
      color: #333;
      border-radius: 4px;
      cursor: move;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
      .check-btn {
        float: right;
        display: inline-block;
      }
    }
    .center {
      flex: 0 0 36px;
      .to-checked-btn {
        margin-bottom: 15px;
      }
      .to-checked-btn.is-active {
        background: #67C23A;
        color: #fff;
      }
      .to-uncheck-btn.is-active {
        background: #409eff;
        color: #fff;
      }
      .to-checked-btn, .to-uncheck-btn {
        width: 36px;
        height: 36px;
        font-size: 18px;
        text-align: center;
        line-height: 36px;
        border: 1px solid #ebeef5;
        background-color: #f5f7fa;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
</style>

