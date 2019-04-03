<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
               <div class="centent">
               一大堆文章.........
            </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                slide: [1, 2, 3, 4, 5, 6],
                swiperOption: {
                    direction:'vertical',
                    pagination: {
                        direction:'vertical',
                    slidesPerView: 'auto',
                    freeMode:true,
                    mousewheel:true
                    }
                }
            }
        },
        components: { swiper, swiperSlide }
    }
</script>
<style scoped>
    .swiper-slide {
        height: 4rem;
        text-align: center;
        padding-top: 3rem;
        border-bottom: 1px solid #ccc;
    }
    .text{
      font-size: 18px !important;
      text-align: left;
      padding:30px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
</style>