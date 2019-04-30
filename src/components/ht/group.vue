<template>
    <div style="display: none">
        <slot v-if="ready"></slot>
    </div>
</template>
<script>
  import './core/ht';
  import { findParentView } from "../../utils/ht";

  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      expanded: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        ready: false
      }
    },
    methods: {
      createGroup() {
        this.instance = new ht.Group();
        this.instance.setName(this.name);
        this.instance.setExpanded(this.expanded);
        this.gv.dm().add(this.instance);
        this.ready = true;
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
      this.createGroup();
    }
  }
</script>