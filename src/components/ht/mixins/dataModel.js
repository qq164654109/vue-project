export default {
  props: {
    dataJson: {
      type: String,
      default: ''
    },
    selectionMode: {
      type: String,
      default: 'single'
    },
    dataEachFunc: {
      type: Function,
      default: null
    },
    selectable: {
      type: Function,
      default: () => true
    }
  },
  methods: {
    setDataJson(newVal, oldVal) {
      const dataModelJson = JSON.parse(newVal);

      this.dataModel.clear();
      this.dataModel.deserialize(dataModelJson);
      if (this.dataEachFunc !== null) {
        this.dataModel.each(this.dataEachFunc);
      }

      this.$emit('data-loaded', this.dataModel);
    },
    setSelectionMode(newVal, oldVal) {
      this.dataModel.sm().setSelectionMode(newVal);
    },
    setSelectable(newVal, oldVal) {
      this.instance.getSelectionModel().isSelectable = newVal
    },
    getDataModel() {
      return this.dataModel;
    },
    addSelectListener() {
      this._handleSelect = (e) => {
        this.$emit('select', e);
      };
      this.dataModel.sm().addSelectionChangeListener(this._handleSelect)
    },
  },
  beforeDestroy() {
    !!this._handleSelect && this.dataModel.sm().removeSelectionChangeListener(this._handleSelect);
  }
}