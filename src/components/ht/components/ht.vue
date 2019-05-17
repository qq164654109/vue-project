<template>
    <div id="ht" :style="style">
        <slot v-if="ready"></slot>
    </div>
</template>

<script>
  import '../../../../static/ht/XnhNyWPwBxie';
  import '../../../../static/ht/core/ht';
  import '../../../../static/ht/product_generated';
  import { DEFAULT_IMAGES } from "../utils";

  export default {
    provide() {
      return {
        getHt: this.getHt
      }
    },
    props: {
      width: {
        type: [Number, String],
        default: '100%'
      },
      height: {
        type: [Number, String],
        default: '100%'
      },
      images: {
        type: Array,
        default: () => []
      },
      config: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        ready: false
      }
    },
    mounted() {
      this.view = this.$el;
      this.setImages();

      this.$nextTick(() => {
        this.ready = true;
      })
    },
    computed: {
      style() {
        const width = typeof(this.width) === 'string' ? this.width : this.width + 'px';
        const height = typeof(this.height) === 'string' ? this.height : this.height + 'px';
        return {width, height}
      }
    },
    methods: {
      setImages() {
        const images = [...DEFAULT_IMAGES, ...this.images];
        images.forEach(item => {
          const { name, src } = item;
          ht.Default.setImage(name, src);
        })
      },
      getHt() {
        return ht;
      }
    }
  }
</script>

<style lang="scss" scoped>
    #ht {
        position: relative;
        background-color: #ebebeb;
    }
</style>