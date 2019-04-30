<script>
  import './core/ht';
  import { findParentView } from "../../utils/ht";

  export default {
    props: {
      p: {
        type: Object,
        default: () => {}
      },
      s: {
        type: Object,
        default: () => {}
      },
      a: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {

      }
    },
    methods: {
      createNode() {
        const {p: {name, size, position, image}, s, a} = this;
        this.instance = new ht.Node();
        this.instance.setName(name);
        this.instance.setSize(size[0], size[1]);
        this.instance.setPosition(position[0], position[1]);
        this.instance.setImage(image);
        this.instance.s(s);
        this.instance.a(a);

        this.gv.dm().add(this.instance)
      },
      getInstance() {
        return this.instance;
      },
      getStyle() {
        return this.instance.getStyle();
      },
      getAttr() {
        return this.instance.getAttrObject();
      }
    },
    render(h) {
      return null;
    },
    mounted() {
      this.gv = findParentView(this.$parent).gv;
      this.createNode();
    }
  }
</script>