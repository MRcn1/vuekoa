<template>
    <div class="ShoppingMall">
        <div class="search-bar">
            <van-row>
                <van-col span="3"><img :src="img.locationIcon1" width="100%" /></van-col>
                <van-col span="16">
                    <input type="text" class="search-input" placeholder="查找" />
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>

        <div class="swiper-area">
            <van-swipe :autoplay="2000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img :src="banner.image" width="100%" />
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img width="90%" v-lazy="cate.image" />
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>

        <div class="ad-banner">
            <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
        </div>

        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper>
                    <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" width="80%" />
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
        <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
        <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>

        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
                <!--这里需要一个list组件-->
                <van-list>
                    <van-row gutter="20">
                        <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
                            <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css' ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import floorComponent from '../components/floorComponent'
    import goodsInfo from '../components/goodsInfoComponent'
    import { toMoney } from '@/filter/moneyFilter.js'
    export default {
        data() {
            return {
                img: {
                    locationIcon1: require('../assets/img/hzs.png'),
                    locationIcon2: require('../assets/img/fd.png'),
                    locationIcon3: require('../assets/img/fs.png'),
                },
                bannerPicArray: [],
                category: '',
                adBanner: '',
                recommendGoods: '',
                floor1: [],
                floor2: [],
                floor3: [],
                hotGoods: [], //热卖商品
                floorName: {},
            }
        },
        filters: {
            moneyFilter(money) {
                return toMoney(money)
            }
        },
        components: {
            swiper,
            swiperSlide,
            floorComponent,
            goodsInfo
        },
        created() {
            this.$fetch('https://www.easy-mock.com/mock/5ca47e22055ccc594582d9eb/example/getDataOne').then(response => {
                    console.log(response)
                    this.category = response.data.category;
                    this.adBanner = response.data.advertesPicture //获得广告图片
                    this.bannerPicArray = response.data.slides //轮播广告图片
                    this.recommendGoods = response.data.recommend //推荐商品
                    this.floor1 = response.data.floor1 //楼层1数据
                    this.floor2 = response.data.floor2 //楼层2数据
                    this.floor3 = response.data.floor3 //楼层3数据
                    this.floorName = response.data.floorName //楼层标题
                    this.hotGoods = response.data.hotGoods //热卖商品
                })
                .catch((error) => {

                })
        },
        methods: {

        },
    }
</script>

<style scoped lang='less'>
    .search-bar {
        height: 2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }

    .search-input {
        width: 100%;
        height: 1.3rem;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 1px solid #fff !important;
        background-color: #e5017d;
        color: #fff;
        padding-left: 1rem;
        font-size: 12px;


    }

    ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #ccc;
    }

    ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #ccc;
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #ccc;
    }

    .location-icon {
        padding-top: .2rem;
        padding-left: .3rem;
    }

    .swiper-area {
        clear: both;
        max-height: 15rem;
        overflow: hidden;
    }

    .type-bar {
        background-color: #fff;
        margin: 0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .type-bar div {
        padding: .3rem;
        font-size: 12px;
        text-align: center;
        flex: 1;
    }

    .recommend-area {
        background-color: #fff;
        margin-top: .3rem;
    }

    .recommend-title {
        border-bottom: 1px solid #eee;
        font-size: 14px;
        padding: .2rem;
        color: #e5017d;
    }

    .recommend-body {
        border-bottom: 1px solid #eee;
    }

    .recommend-item {
        width: 99%;
        border-right: 1px solid #eee;
        font-size: 12px;
        text-align: center;
    }

    .hot-area {
        text-align: center;
        font-size: 14px;
        height: 1.8rem;
        line-height: 1.8rem;
    }

    .hot-goods {
        height: 130rem;
        overflow: hidden;
        background-color: #fff;
    }
</style>