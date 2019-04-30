<template>
    <div class="circle">
        <canvas id="canvas" ref="canvas" width="132" height="132"></canvas>
    </div>
</template>

<script>
    export default {
        props: {
            total: {
                type: Number,
                default: 0
            },
          value: {
              type: Number,
              default: 0
          }
        },
        data() {
            return {
                ctx: ''
            }
        },
        methods: {
            initCtx() {
                if (!this.ctx) {this.ctx = this.$refs.canvas.getContext('2d')};
                this.ctx.clearRect(0,0,132,132);

                //外圆
                this.ctx.beginPath();
                this.ctx.arc(66, 66, 48, 0,  Math.PI * 2);
                this.ctx.closePath();
                this.ctx.fillStyle = '#E0F1FE';
                this.ctx.fill();

                //数据圆
                if (this.value !== 0 && this.total !== 0) {
                    let pec = this.value / this.total;
                    let risePI = pec * 2 * Math.PI;
                    let startPI = Math.PI * 3 / 2;
                    let endPI;
                    if (pec === 1) {
                        endPI = Math.PI * 3 / 2 + Math.PI * 2;
                    } else {
                        endPI = (startPI + risePI) > 2 * Math.PI ? (startPI + risePI) -  2 * Math.PI : (startPI + risePI);
                    }
                    let gColor = this.ctx.createLinearGradient(66, 0, 66, 132);
                    gColor.addColorStop(0, '#effdff');
                    gColor.addColorStop(1, '#2184F4');
                    this.ctx.beginPath();
                    this.ctx.moveTo(66, 66);
                    this.ctx.arc(66, 66, 48, startPI, endPI);
                    this.ctx.closePath();
                    this.ctx.fillStyle = gColor;
                    this.ctx.fill();
                }
                //内圆
                this.ctx.beginPath();
                this.ctx.arc(66, 66, 44, 0,  Math.PI * 2);
                this.ctx.closePath();
                this.ctx.fillStyle = '#fff';
                this.ctx.fill();

                //标点
                this.ctx.beginPath();
                let pec = this.value / this.total;
                let risePI = pec * Math.PI * 2;

                let circleX = 66;
                let circleY = 66;
                let l = 46;

                let disX = l * Math.sin(risePI);
                let disY = l * Math.cos(risePI);

                let markX = circleX + disX;
                let markY = circleY - disY;

                this.ctx.arc(markX, markY, 7, 0,  Math.PI * 2);
                this.ctx.closePath();
                this.ctx.fillStyle = '#68B9F3';
                this.ctx.fill();
                this.ctx.beginPath();

                this.ctx.arc(markX, markY, 6, 0,  Math.PI * 2);
                this.ctx.closePath();
                this.ctx.fillStyle = '#FFF';
                this.ctx.fill();
                this.ctx.beginPath();

                this.ctx.arc(markX, markY, 4, 0,  Math.PI * 2);
                this.ctx.closePath();
                this.ctx.fillStyle = '#68B9F3';
                this.ctx.fill();

            }
        },
        mounted() {
            this.initCtx()
        },
        watch: {
            value: {
                handler() {
                    this.ctx && this.initCtx();
                }
            },
            total: {
                handler() {
                    this.ctx && this.initCtx();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .circle {}
</style>