<template>
    <section class="screenshot-style-2 section-padding bg-cover section" id="screenshot" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-2">
                        <h2 class="title">SCREENSHOTS</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem <br>consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="screenshot-gallery text-center">
                        <swiper
                            :space-between="30"
                            :slidesPerView="4"
                            :loop="true"
                            :speed="1000"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide class="scr-thumb">
                                <img src="../assets/img/screenshot/scr-1.jpg" alt="screenshot thumb">
                            </swiper-slide>
                            <swiper-slide class="scr-thumb">
                                <img src="../assets/img/screenshot/scr-2.jpg" alt="screenshot thumb">
                            </swiper-slide>
                            <swiper-slide class="scr-thumb">
                                <img src="../assets/img/screenshot/scr-3.jpg" alt="screenshot thumb">
                            </swiper-slide>
                            <swiper-slide class="scr-thumb">
                                <img src="../assets/img/screenshot/scr-2.jpg" alt="screenshot thumb">
                            </swiper-slide>
                            <swiper-slide class="scr-thumb">
                                <img src="../assets/img/screenshot/scr-3.jpg" alt="screenshot thumb">
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data(){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/screenshot-bg.jpg')})`
                },

                swiperOptions: {
                    breakpoints: {
                        1499:{
                            slidesPerView : 4
                        },

                        768:{
                            slidesPerView : 3
                        },

                        640:{
                            slidesPerView : 2
                        },

                        320:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    }

</script>
