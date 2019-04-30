<template>
    <div class="date-header">
        <el-select size="small" v-model="year" placeholder="请选择" @change="handleCheckDate">
            <el-option
                    v-for="item in yearList"
                    :key="item"
                    :label="item"
                    :value="item">
            </el-option>
        </el-select>
        <el-select size="small" v-model="month" placeholder="请选择" @change="handleCheckDate">
            <el-option
                    v-for="(item, index) in monthList"
                    :key="index"
                    :label="item"
                    :value="index">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    import { yearList, monthList } from './config';
    import { toDouble } from "../../utils";

    export default {
        props: {
          currentDate: {
              type: Date,
              default: ''
          }
        },
        data() {
            return {
                yearList,
                monthList,
                year: '',
                month: ''
            }
        },
        methods: {
            handleCheckDate() {
                const dateStr = `${this.year}/${toDouble(this.month + 1)}/01`;
                console.log(dateStr);
                this.$emit('check-date', new Date(dateStr));
            }
        },
        watch: {
            currentDate: {
                handler(val) {
                    if (val) {
                        this.year = val.getFullYear();
                        this.month = val.getMonth();
                    }
                },
                immediate: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .date-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 20px;
    }
</style>