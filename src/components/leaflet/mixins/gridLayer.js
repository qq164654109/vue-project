import layer from './layer';

export default {
  mixins: [layer],
  props: {
    pane: {
      type: String,
      default: 'tilePane'
    },
    opacity: {
      type: Number,
      default: 1
    },
    zIndex: {
      type: Number,
      default: 1
    },
    tileSize: {
      type: Number,
      default: 256
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  }
}