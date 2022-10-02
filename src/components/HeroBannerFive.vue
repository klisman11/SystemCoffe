<template>
    <section class="slider-section slider-style-5 section" id="home" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <swiper
                        :slides-per-view="1"
                        :space-between="30"
                        :speed="1000"
                    >
                        <swiper-slide v-for="(slider, sliders) in sliders" :key="sliders" class="hero-slider-item">
                            <div class="row align-items-center">
                                <div class="col-xl-7 col-lg-7 col-md-7">
                                    <div class="slider-content">
                                        <div class="slider-logo">
                                            <img :src="slider.logo" alt="slider logo">
                                        </div>
                                        <h6 class="slider-subtitle">{{ slider.subtitle }}</h6>
                                        <h2 class="slider-title">{{ slider.sliderTitle }}</h2>
                                        <p class="slider-desc">{{ slider.sliderDesc }}</p>
                                        <div class="slider-btn">
                                            <a href="#" class="btn btn-round">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-5">
                                    <div class="slider-thumb">
                                        <img :src="slider.sliderThumb" alt="slider thumb">
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Pagination])

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data (){
            return {
                swiperOptions: {
                    pagination: {
                        el: '.pagination-dot-style',
                        type: 'bullets',
                        clickable: true
                    }
                },
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/home-medical/slider/1-bg.jpg')})`
                },
                sliders: [
                    {
                        sliderThumb: require("../assets/img/home-medical/slider/1.png"), 
                        logo: require("../assets/img/home-medical/slider/slider-logo.png"), 
                        subtitle: 'THE BEST HOSPITALITY VUE TEMPLATE FOREVER!', 
                        sliderTitle: 'FANTASIC HEALTH SYSTEM', 
                        sliderDesc: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.'
                    },
                    {
                        sliderThumb: require("../assets/img/home-medical/slider/2.png"), 
                        logo: require("../assets/img/home-medical/slider/slider-logo.png"), 
                        subtitle: 'THE BEST HOSPITALITY VUE TEMPLATE FOREVER!', 
                        sliderTitle: 'FANTASIC HEALTH SYSTEM', 
                        sliderDesc: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.'
                    },
                ]
            }
        }
    }
</script>
