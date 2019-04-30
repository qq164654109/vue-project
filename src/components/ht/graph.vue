<template>
    <div class="ht-graph" :style="{top : top + 'px', left: left + 'px', width, height}">
        <slot v-if="ready"></slot>
    </div>
</template>

<script>
  import './core/ht';
  export default {
    props: {
      top: {
        type: Number,
        default: 0
      },
      left: {
        type: Number,
        default: 0
      },
      width: {
        type: String,
        default: '300px'
      },
      width: {
        type: String,
        default: '300px'
      },
      height: {
        type: String,
        default: '300px'
      },
      editable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        ready: false
      }
    },
    methods: {
      createGraph() {
        this.gv = this.instance = new ht.graph.GraphView();
        this.gv.setEditable(this.editable);
        const view = this.gv.getView();
        view.className = 'g2d';
        view.style.width = '100%';
        view.style.height = '100%';

        this.$el.appendChild(view);

        this.ready = true
      },
      getInstance() {
        return this.instance;
      }
    },
    mounted() {
      this.createGraph()
    }
  }
</script>

<style lang="scss" scoped>
    .ht-graph {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>