<template>
    <div id="ht" :style="style">
        {{width}}
        <slot></slot>
    </div>
</template>

<script>
  import 'static/ht/core/ht';
  export default {
    props: {
      width: {
        default: '100%'
      },
      height: {
        default: '100%'
      },
      images: {
        type: Array,
        default: () => []
      }
    },
    created() {
      this.setImages()
    },
    computed: {
      style() {
        const width = typeof this.width === String ? this.width : this.width + 'px';
        const height = typeof this.height === String ? this.height : this.height + 'px';
        return {width, height}
      }
    },
    methods: {
      setImages() {
        this.images.forEach(item => {
          const { width, height, name, src } = item;
          ht.Default.setImage(name, width, height, src);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    #ht {
        position: relative;
    }
</style>