<template>
    <div class="calendar">
        <date-header :current-date="currentDate" @check-date="checkDate"></date-header>
        <dateBody :current-date="currentDate"></dateBody>
    </div>
</template>

<script>
    import dateHeader from './dateHeader';
    import dateBody from './dateBody';

    export default {
        data() {
          return {
              currentDate: new Date()
          }
        },
        methods: {
            checkDate(date) {
                this.currentDate = date
            }
        },
        components: {
            dateHeader,
            dateBody
        }
    }
</script>

<style lang="scss" scoped>

</style>