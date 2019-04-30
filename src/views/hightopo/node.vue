<template>
    <div class="hightopo-node">
        <ht :images="images">
            <ht-graph :top="0" :left="100" :editable="true">
                <ht-node v-for="(item, index) in nodes" :key="index" :p="item.p" :a="item.a"></ht-node>
            </ht-graph>
        </ht>
    </div>
</template>

<script>
  import ht from '@/components/ht/index';
  import htGraph from '@/components/ht/graph';
  import htNode from '@/components/ht/node';

  export default {
    data() {
      return {
        images: [
          {
            name: 'st',
            src: 'static/images/avatar.png'
          }
        ],
        nodes: []
      }
    },
    components: {
      ht,
      htGraph,
      htNode
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

</style>