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
    name: {
      type: String,
      default: null
    },
    layerType: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: true
    }
  }
}