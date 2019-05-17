<script>
  export default {
    inject: ['getHt'],
    props: {
      name: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: 'node-icon'
      },
      size: {
        type: Array,
        default: () => [40, 40]
      },
      position: {
        type: Array,
        default: () => [20, 20]
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
    mounted() {
      this.ht = this.getHt();
      this.instance = new this.ht.Node();

      this.instance.setName(this.name);
      this.instance.setSize(this.size[0], this.size[1]);
      this.instance.setPosition(this.position[0], this.position[1]);
      this.instance.setImage(this.image);
      this.instance.s(this.s);
      this.instance.a(this.a);

      this.parentInstance = this.$parent.instance;
      this.parentInstance.dm().add(this.instance);
    },
    methods: {
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
    }
  }
</script>