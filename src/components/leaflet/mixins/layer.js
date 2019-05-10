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
  methods: {
    setVisible(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        if (!this.parentLayer.hasLayer(this.layer)) {
          this.parentLayer.addLayer(this.layer);
        }
      } else {
        this.parentLayer.removeLayer(this.layer);
      }
    },
    getLayer() {
      return this.layer;
    }
  },
  mounted() {
    this.layerOptions = {
      pane: this.pane,
      attribution: this.attribution
    }
  }
}