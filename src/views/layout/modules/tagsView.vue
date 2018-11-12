<template>
  <div class="tags-view">
    <draggable element="ul" class="tags-list" :list="routeTags">
      <li v-for="tag in routeTags" :key="tag.name" class="tags-item" :class="{'active': tag.name === $route.name}">
        <link-to :to="{ name: tag.name }">
          <span v-show="tag.name === $route.name" class="cycle"></span>
          {{$t('route.' + tag.name)}}
          <i class="el-icon-close" @click.stop="delRouteTags(tag)"></i>
        </link-to>
      </li>
    </draggable>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import draggable from 'vuedraggable';

  export default {
    computed: {
      ...mapGetters([
        'routeTags'
      ])
    },
    methods: {
      ...mapMutations({
        addRouteTags : 'ADD_ROUTE_TAGS',
        delRouteTags: 'DEL_ROUTE_TAGS'
      })
    },
    watch: {
      $route() {
        this.addRouteTags(this.$route);
      }
    },
    mounted() {
      this.addRouteTags(this.$route);
    },
    components: {
      draggable
    }
  }

</script>

<style lang="scss" scoped>
  .tags-view {
    height: 34px;
    .tags-list {
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      .tags-item {
        display: inline-block;
        height: 26px;
        margin: 4px 5px;
        padding: 0 8px;
        color: #777;
        font-size: 12px;
        line-height: 24px;
        border-radius: 4px;
        border: 1px solid #ebebeb;
        cursor: pointer;
        transition: all .2s;
        &:first-child {
          margin-left: 10px;
        }
        &:last-child {
          margin-right: 10px;
        }
        &:hover {
          color: #409EFF;
        }
        &.active {
          background-color: #ECF5FF;
          border-color: #409EFF;
          color: #409EFF;
        }
        .cycle {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #409EFF;
          margin-right: 5px;
        }
        .el-icon-close {
          margin-left: 3px;
        }
      }
    }
  }
</style>
