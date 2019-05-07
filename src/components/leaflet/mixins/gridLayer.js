export default {
  props: {
    opacity: {
      type: Number,
      default: 1
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    this.gridLayerOptions = {
      opacity: this.opacity,
      zIndex: this.zIndex
    }
  }
}