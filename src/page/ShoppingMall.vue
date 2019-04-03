<template>
    <div class="ShoppingMall">
        <div class="search-bar">
            <van-row>
                <van-col span="3"><img :src="img.locationIcon1" width="100%" /></van-col>
                <van-col span="16">
                    <input type="text" class="search-input" />
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>

        <div class="swiper-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img :src="banner.imageUrl"  width="100%" />
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img  width="90%" v-lazy="cate.image"/>
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>

        <div class="ad-banner">
            <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                img: {
                    locationIcon1: require('../assets/img/hzs.png'),
                    locationIcon2: require('../assets/img/fd.png'),
                    locationIcon3: require('../assets/img/fs.png'),
                },
                bannerPicArray: [
                    { imageUrl: require('../assets/img/hybg_03.png') },
                    { imageUrl: require('../assets/img/zquan_07.png') },
                ],
                category: '',
                adBanner: '',
            }
        },
        components: {

        },
        created() {
            this.$fetch('https://www.easy-mock.com/mock/5ca47e22055ccc594582d9eb/example/getDataOne').then(response => {
                    console.log(response)
                    this.category = response.data.category;
                    this.adBanner = response.data.advertesPicture//获得广告图片
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