<template>
  <div class="todo-list">
    <div class="title">
      <span @click="checkAll" class="checkbox" :class="{'disabled': status!=='all'}">
        <i v-show="allChecked && status === 'all'" class="el-icon-check"></i>
        <i v-show="partChecked && status === 'all'" class="el-icon-minus"></i>
      </span>
      <input v-model="todoText" class="new-todo" autocomplete="off" :placeholder="$t('dashboard.todoList')" @keyup.enter="addTodo">
    </div>
    <div class="content">
      <ul class="list">
        <li v-for="item in filterLists" :key="item.key" class="list-item" :class="{'list-item-checked': item.status === 'done'}">
            <span @click="checkTodo(item.key)" class="checkbox">
              <i class="el-icon-check"></i>
            </span>
          {{item.title}}
          <span class="del" @click="delList(item.key)">
              <i class="el-icon-delete"></i>
            </span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <span class="num">{{filterLists.length}} Item</span>
      <span class="all" :class="{'active': status==='all'}" @click="setFilter('all')">ALL</span>
      <span class="todo" :class="{'active': status==='todo'}" @click="setFilter('todo')">TO DO</span>
      <span class="done" :class="{'active': status==='done'}" @click="setFilter('done')">DONE</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todoText: '',
        lists: [
          {
            key: 0,
            title: 'star this repository',
            status: 'todo'
          },
          {
            key: 1,
            title: 'fork this repository',
            status: 'todo'
          },
          {
            key: 2,
            title: 'follow author',
            status: 'todo'
          },
          {
            key: 3,
            title: 'follow author',
            status: 'todo'
          },
          {
            key: 4,
            title: 'follow author',
            status: 'todo'
          },
          {
            key: 5,
            title: 'follow author',
            status: 'todo'
          },
          {
            key: 6,
            title: 'follow author',
            status: 'todo'
          },
          {
            key: 7,
            title: 'follow author',
            status: 'todo'
          },
          {
            key: 8,
            title: 'follow author',
            status: 'todo'
          }
        ],
        status: 'all'
      }
    },
    methods: {
      addTodo() {
        const title = this.todoText.trim();
        if (title) {
          this.lists.unshift({
            key: Math.random(),
            title,
            status: 'todo'
          });
        }
      },
      checkAll() {
        if (this.status !== 'all') return;
        if (!this.allChecked) {
          this.lists.forEach(item => {
            Object.assign(item, {status: 'done'});
          })
        } else {
          this.lists.forEach(item => {
            Object.assign(item, {status: 'todo'});
          })
        }
      },
      checkTodo(key) {
        for (let i = 0; i < this.filterLists.length; i++) {
          if (this.filterLists[i].key === key) {
            this.filterLists[i].status = this.filterLists[i].status === 'done' ? 'todo' : 'done';
            break;
          }
        }
      },
      delList(key) {
        for (let i = 0; i < this.filterLists.length; i++) {
          if (this.filterLists[i].key === key) {
            this.filterLists.splice(i, 1);
          }
        }
      },
      setFilter(status) {
        this.status = status;
      }
    },
    computed: {
      filterLists() {
        switch (this.status) {
          case 'all':
            return this.lists;
            break
          default:
            return this.lists.filter(item => item.status === this.status);
            break
        }
      },
      allChecked() {
        return this.lists.every(item => item.status === 'done');
      },
      partChecked() {
        return this.lists.some(item => item.status === 'done') && !this.allChecked;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo-list {
    background-color: #fff;
    .title {
      height: 50px;
      padding: 0 15px;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 50px;
      border-bottom: 1px solid #ebebeb;
      .checkbox {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 20px;
        line-height: 23px;
        text-align: center;
        border: 1px solid #999;
        border-radius: 50%;
        vertical-align: middle;
        cursor: pointer;
        transition: all .3s;
        overflow: hidden;
        &.disabled {
          border-radius: 0;
          height: 0;
          cursor: default;
        }
        .el-icon-check {
          color: #38c27f;
          font-weight: bold;
        }
        .el-icon-minus {
          color: #38c27f;
          font-weight: bold;
        }
      }
      .new-todo {
        font-size: 14px;
        outline: none;
      }
    }
    .content {
      height: 360px;
      overflow-x: hidden;
      overflow-y: auto;
      .list-scrollbar {
        width: calc(100% + 1px);
        height: 100%;
        .el-scrollbar__view {
          height: 100%;
        }
        .el-scrollbar__wrap {
          overflow-x: hidden;
        }
      }
      .list {
        min-height: 100%;
        .list-item {
          height: 45px;
          padding: 0 15px;
          line-height: 44px;
          color: #333;
          border-bottom: 1px solid #f6f6f6;
          transition: color .4s;
          &:hover {
            .del{
              display: inline-block;
            }
          }
          &:last-child {
            border-bottom: none;
          }
          &.list-item-checked {
            color: #ccc;
            text-decoration: line-through;
            .checkbox .el-icon-check {
              display: inline-block;
              opacity: 1;
            }
          }
          .checkbox {
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 20px;
            line-height: 23px;
            text-align: center;
            border: 1px solid #999;
            border-radius: 50%;
            vertical-align: middle;
            cursor: pointer;
            .el-icon-check {
              display: none;
              color: #67C23A;
              font-weight: bold;
            }
          }
          .del {
            float: right;
            display: none;
            cursor: pointer;
            .el-icon-delete {
              color: #F56C6C;
              font-weight: bold;
            }
          }
        }
      }
    }
    .footer {
      position: relative;
      height: 40px;
      line-height: 20px;
      text-align: center;
      border-top: 1px solid #ebebeb;
      z-index: 1;
      &:before {
        bottom: 0;
        box-shadow: 0 1px 1px rgba(0,0,0,.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0,0,0,.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0,0,0,.2);
        content: "";
        height: 40px;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
      }
      .num, .all, .todo, .done {
        position: relative;
        display: inline-block;
        margin-top: 10px;
        padding: 0 20px;
        font-size: 12px;
        cursor: pointer;
        border-right: 1px solid #ccc;
        transition: color .4s;
        z-index: 2;
        &:hover, &.active {
          color: #67C23A;
        }
      }
      .done {
        border-right: none;
      }
    }
  }
</style>
