<template>
    <div class="date-body">
        <table cellspacing="0" cellpadding="0" class="date-table">
            <tr>
                <th v-for="item in weekdayList" :key="item">{{item}}</th>
            </tr>
            <tr v-for="period in weekPeriod" :key="'p' + period">
                <td v-for="week in 7" :key="'w'+ week" :class="{'prev-month': 0, 'current': 0}">
                    <div><span>{{dayMap[period] && dayMap[period][week - 1]}}</span></div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { weekdayList, weekPeriod } from "./config";

    export default {
        props: {
            currentDate: {
                type: Date,
                default: ''
            }
        },
        data() {
            let initDayList = () => {
                let dayMap = {};
                for (let key = 1; key <= weekPeriod; key++) {
                    dayMap[key] = [];
                }
                return dayMap;
            };
            return {
                weekdayList,
                weekPeriod,
                dayMap: initDayList()
            }
        },
        methods: {
          initDayMap(date) {
              const monthDays = date.getMonthDays();
              const firstDay = date.setDate(1);
              const firstWeek = new Date(firstDay).getDay();

              let startDay = 1;

              for (let i = 0, l = )

              for (let i = firstWeek - 1, l = this.weekPeriod * 7; i < l; i++) {
                    if (startDay > 31) {
                        startDay = 1;
                    }
                    let periodIndex = Math.floor(i / 7) + 1;
                    let weekIndex = i % 7;
                    this.dayMap[periodIndex][weekIndex] = startDay;
                    startDay += 1;
              }
          }
        },
        watch: {
            currentDate: {
                handler(val) {
                    this.initDayMap(val);
                },
                immediate: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .date-body {
        .date-table {
            table-layout: fixed;
            width: 100%;
            color: #141414;
            font-size: 12px;
            user-select: none;
            line-height: 30px;
            th {
                padding: 5px;
                font-weight: bold;
                border-bottom: 1px solid #ebeef5;
            }
            td {
                padding: 4px 0;
                height: 30px;
                text-align: center;
                &.prev-month {
                    color: #c0c4cc;
                }
                &.current {
                    div span {
                        color: #fff;
                        background-color: #409eff;
                    }
                }
                div {
                    position: relative;
                    height: 30px;
                    padding: 3px 0;
                    span {
                        width: 24px;
                        height: 24px;
                        display: block;
                        margin: 0 auto;
                        line-height: 24px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        border-radius: 50%;
                    }
                }
            }
        }
    }
</style>