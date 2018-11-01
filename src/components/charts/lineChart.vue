<template>
  <div class="line-chart" :style="{width,height}"></div>
</template>

<script>
  import 'echarts/lib/chart/line';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/legend';

  import echarts from '@/mixins/echarts';

  export default {
    mixins: [echarts]
  }
</script>
