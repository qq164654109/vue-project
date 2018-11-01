<template>
  <div class="dashboard">
    <countCards class="count-cards-wrapper"></countCards>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="chart-wrapper">
          <line-chart :options="lineOptions"></line-chart>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="chart-wrapper">
          <radarChart :options="radarOptions"></radarChart>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="chart-wrapper">
          <pieChart :options="pieOptions"></pieChart>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="chart-wrapper">
          <barChart :options="barOptions"></barChart>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <order-table class="list-wrap"></order-table>
      </el-col>
      <el-col :span="8">
        <todo-list class="list-wrap"></todo-list>
      </el-col>
      <el-col :span="8">
        <order-table class="list-wrap"></order-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import countCards from './components/countCards';
  import lineChart from '@/components/charts/lineChart';
  import radarChart from '@/components/charts/radarChart';
  import pieChart from '@/components/charts/pieChart';
  import barChart from '@/components/charts/barChart';
  import orderTable from './components/orderTable';
  import todoList from './components/todoList';

  import { lineOptions, radarOptions, pieOptions, barOptions } from "./chartsOptions";

  export default {
    data() {
      return {
        lineOptions,
        radarOptions,
        pieOptions,
        barOptions
      }
    },
    components: {
      countCards,
      lineChart,
      radarChart,
      pieChart,
      barChart,
      orderTable,
      todoList
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    min-height: 100%;
    padding: 30px 50px;
    background-color: #F0F2F5;
    .count-cards-wrapper {
      margin-bottom: 20px;
    }
    .chart-wrapper {
      padding: 15px;
      background-color: #fff;
      margin-bottom: 20px;
      box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    }
    .list-wrap {
      box-shadow: 4px 4px 40px rgba(0,0,0,.05);
    }
  }
</style>
