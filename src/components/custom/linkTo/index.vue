<template>
  <div class="link-to" @click="linkTo">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      to: {
        type: Object,
        required: true
      }
    },
    methods: {
      linkTo() {
        if (this.to.name === this.$route.name) {
          return
        }
        this.$router.push(this.to);
      }
    }
  }
</script>
