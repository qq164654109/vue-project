<script>
  import { divIcon } from 'leaflet';
  import iconMixin from '../mixins/icon';
  import { optionsMerger, propsWatchBind } from "../utils/index";

  export default {
    mixins: [iconMixin],
    props: {
      html: {
        type: String,
        default: ''
      },
      bgPos: {
        type: Array,
        default: () => []
      }
    },
    mounted() {
      const html = this.$el.innerHTML ? this.$el.innerHTML : this.html;
      const options = optionsMerger(this, {
        ...this.iconOptions,
        html,
        bgPos: this.bgPos
      });
      const LIcon = divIcon(options);
      propsWatchBind(this, LIcon, this.$options.props);
      const parentLayer = this.$parent.layer;

      parentLayer.setIcon(LIcon)
    },
    render(h) {
      if (this.$slots.default) {
        return h('div', {
          style: {
            display: 'none'
          }
        }, this.$slots.default)
      } else {
        return null
      }
    }
  }
</script>