export default {
  props: {
    iconUrl: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Array,
      default: () => [20, 30]
    },
    className: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.iconOptions = {
      iconUrl: this.iconUrl,
      iconSize: this.iconSize,
      className: this.className
    }
  }
}