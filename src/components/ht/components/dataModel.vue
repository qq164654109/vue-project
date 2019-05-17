<script>
  export default {
    inject: ['getHt'],
    props: {
      data: {
        type: Object,
        default: () => {}
      },
      selectionMode: {
        type: String,
        default: 'single'
      },
      selectFilterFunc: {
        type: Function,
        default: null
      }
    },
    created() {
      this.ht = this.getHt();
      this.instance = new this.ht.DataModel();
      let a = this.instance.deserialize(this.data);

      this.parentInstance = this.$parent.instance;
      this.parentInstance.setDataModel(this.instance);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', a)
      })
    },
    beforeDestroy() {
      this.instance.clear();
    },
    methods: {
      setData(data) {
        this.instance.deserialize(this.data);
      },
      getInstance() {
        return this.instance;
      }
    },
    render(h) {
      return null
    }
  }
</script>