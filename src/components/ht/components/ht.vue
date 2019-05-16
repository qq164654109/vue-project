<template>
    <div id="ht" :style="{width, height}">
        <slot></slot>
    </div>
</template>

<script>
  import '../../../../static/ht/core/ht';
  export default {
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      images: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      setImages() {
        this.images.forEach(item => {
          const { width, height, name, src } = item;
          ht.Default.setImage(name, width, height, src);
        })
      }
    },
    created() {
      this.setImages()
    }
  }
</script>

<style lang="scss" scoped>
    #ht {
        position: relative;
        background-color: #ebebeb;
    }
</style>