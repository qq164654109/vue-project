<template>
    <div class="hightopo-node">
        <ht :width="200"></ht>
    </div>
</template>

<script>
  import { ht } from '@/components/ht';

  export default {
    data() {
      return {
        images: [
          {
            name: 'st',
            src: 'static/images/avatar.png'
          }
        ]
      }
    },
    components: {
      ht,
    },
    mounted() {
      this.nodes = [
        {
          p: {
            name: 'node1',
            image: 'st',
            size: [80, 80],
            position: [100, 100],
          },
          a: {
            id: 123
          }
        }
      ];
    }
  }
</script>

<style lang="scss" scoped>
    .hightopo-node {
        width: 100%;
        height: 100%;
        padding: 15px;
    }
</style>