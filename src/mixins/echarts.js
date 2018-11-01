import Echarts from 'echarts/lib/echarts';
import { debounce } from '@/utils';

export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      instance: null
    }
  },
  methods: {
    initChart() {
      this.instance = Echarts.init(this.$el);
      this.instance.setOption(this.options);
    },
    unInitChart() {
      if (this.instance === null) return;
      this.instance.dispose();
      this.instance = null;
    }
  },
  mounted() {
    this.initChart();
    this._resizeHandle = debounce(() => {
      if (this.instance !== null) {
        this.instance.resize();
      }
    }, 200);
    window.addEventListener('resize', this._resizeHandle);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._resizeHandle);
    this.unInitChart()
  }
}
