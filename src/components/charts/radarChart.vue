<template>
  <div ref="radar" class="radar-chart" :style="{width,height}"></div>
</template>

<script>
  import Echarts from 'echarts/lib/echarts';
  import 'echarts/lib/chart/radar';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/legend';

  import echarts from '@/mixins/echarts';

  export default {
    mixins: [echarts]
  }
</script>
