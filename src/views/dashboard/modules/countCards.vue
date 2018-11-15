<template>
  <div class="count-cards">
    <el-row :gutter="30">
      <el-col :span="6" v-for="(card, i) in cardData" :key="i">
        <div class="card" @click="a">
          <div class="sign" :class="'sign-'+ card.txt"><i :class="'el-icon-' + card.icon"></i></div>
          <div class="info">
            <div class="txt">{{$t('dashboard.' + card.txt)}}</div>
            <div class="num">
              <countTo :startVal="1000" :endVal="card.num"></countTo>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import countTo from '@/components/countTo/index';

  export default {
    data() {
      return {
        cardData: [
          {
            txt: 'newVisits',
            icon: 'star-off',
            num: 1230
          },
          {
            txt: 'messages',
            icon: 'message',
            num: 230
          },
          {
            txt: 'purchases',
            icon: 'tickets',
            num: 3430
          },
          {
            txt: 'shoppings',
            icon: 'sold-out',
            num: 723
          }
        ]
      }
    },
    mounted() {
    },
    methods: {
      a() {
        window.parent.postMessage('GIS','http://0.0.0.0:8007');
      }
    },
    components: {
      countTo
    }
  }
</script>

<style lang="scss">
  .count-cards {
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 108px;
      padding: 0 30px 0 14px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 4px 4px 40px rgba(0,0,0,.05);
      .sign {
        width: 80px;
        height: 80px;
        color: #40C9C6;
        font-size: 70px;
        font-weight: bold;
        line-height: 80px;
        text-align: center;
        border-radius: 6px;
        background-color: #fff;
        transition: all .4s;
        cursor: pointer;
        &.sign-newVisits {
          color: #40C9C6;
          &:hover {
            color: #fff;
            background-color: #40C9C6;
          }
        }
        &.sign-messages {
          color: #36A3F7;
          &:hover {
            color: #fff;
            background-color: #36A3F7;
          }
        }
        &.sign-purchases {
          color: #F4516C;
          &:hover {
            color: #fff;
            background-color: #F4516C;
          }
        }
        &.sign-shoppings {
          color: #FFB980;
          &:hover {
            color: #fff;
            background-color: #FFB980;
          }
        }
      }
      .info {
        height: 80px;
        line-height: 40px;
        letter-spacing: 1px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        .txt {
          color: #333;
          font-size: 16px;
        }
        .num {
          color: #777;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
</style>
