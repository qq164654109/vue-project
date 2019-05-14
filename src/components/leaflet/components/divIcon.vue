<script>
  import { divIcon } from 'leaflet';
  import iconMixin from '../mixins/icon';
  import { optionsMerger, propsWatchBind, objToStyleStr } from "../utils/index";

  const defaultFontStyle = {
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: 'normal',
    lineHeight: 1,
    color: '#1a1a1a',
    wordWrap: 'nowrap'
  };

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
      },
      fontStyle: {
        type: Object,
        default: () => {}
      }
    },
    mounted() {
      const html = this.$el.innerHTML ? this.$el.innerHTML : this.html;
      const fontStyleStr = objToStyleStr({...defaultFontStyle, ...this.fontStyle});
      const options = optionsMerger(this, {
        ...this.iconOptions,
        html: `<div class="font-wrapper" style="${fontStyleStr}">${html}</div>`,
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