<script>
  import { divIcon, setOptions } from 'leaflet';
  import iconMixin from '../mixins/icon';
  import propsMixin from '../mixins/props';
  import { objToStyleStr } from "../utils/index";

  const defaultFontStyle = {
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: 'normal',
    lineHeight: 1,
    color: '#1a1a1a',
    wordWrap: 'nowrap'
  };

  export default {
    mixins: [iconMixin, propsMixin],
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
      const options = this.mergeProps({
        ...this.iconOptions,
        html,
        bgPos: this.bgPos
      });
      const icon = divIcon(options);

      this.parentLayer = this.$parent.layer;
      this.parentLayer.setIcon(icon);
      this.bindPropsWatch();
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