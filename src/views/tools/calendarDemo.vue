<template>
    <div class="calendar-demo">
        <!--<calendar></calendar>-->
        <c-circle :value="20" :total="100"></c-circle>
    </div>
</template>

<script>
    import cCircle from '@/components/canvas/circle';
    // import calendar from '@/components/calendar/index';

    export default {
        components: {
            // calendar,
            cCircle
        }
    }
</script>

<style lang="scss" scoped>
 .calendar-demo {
     padding: 30px 50px;
 }
</style>