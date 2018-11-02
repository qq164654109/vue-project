<template>
    <div class="lazy-load-select-demo">
      <code class="code-wrapper" v-html="info"></code>
      <el-select v-lazyLoadSelect="loadMore" v-model="value1" style="margin-right: 40px" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-scrollLoadSelect="scrollMore" v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          info: `自定义懒加载指令，手动加载 v-lazyLoadSelect，滚动加载 v-scrollLoadSelect`,
          value1: 1,
          value2: 1,
          options1: [
            {
              label: '一',
              value: 1
            },
            {
              label: '二',
              value: 2
            }
          ],
          options2: [
            {
              label: '一',
              value: 1
            },
            {
              label: '二',
              value: 2
            },
            {
              label: '三',
              value: 3
            },
            {
              label: '四',
              value: 4
            },
            {
              label: '五',
              value: 5
            },
            {
              label: '六',
              value: 6
            },
            {
              label: '七',
              value: 7
            },
            {
              label: '八',
              value: 8
            }
          ]
        }
      },
      methods: {
        loadMore() {
          return new Promise((resolve, reject) => {
            setTimeout(()=> {
              this.options1.push({
                label: Math.random(),
                value: Math.random()
              })
              resolve()
            }, 500);
          });
        },
        scrollMore() {
          return new Promise((resolve, reject) => {
            setTimeout(()=> {
              this.options2.push({
                label: Math.random(),
                value: Math.random()
              })
              resolve()
            }, 500);
          });
        }
      }
    }
</script>

<style lang="scss" scoped>
  .lazy-load-select-demo {
    padding: 30px 50px;
  }
</style>
