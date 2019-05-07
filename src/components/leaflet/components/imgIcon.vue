<script>
  import { icon } from 'leaflet';
  import iconMixin from '../mixins/icon';
  import { ICON_DEFAULT, optionsMerger } from "../utils/index";

  export default {
    mixins: [iconMixin],
    props: {
      iconUrl: {
        type: String,
        default: ICON_DEFAULT
      },
    },
    mounted() {
      const options = optionsMerger(this, {
        ...this.iconOptions
      });
      const LIcon = icon(options);
      const parentLayer = this.$parent.layer;
      parentLayer.setIcon(LIcon)
    },
    render(h) {
      return null
    }
  }
</script>