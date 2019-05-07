export default {
  props: {
    pane: {
      type: String,
      default: 'overlayPane'
    },
    attribution: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.layerOptions = {
      pane: this.pane,
      attribution: this.attribution
    }
  }
}