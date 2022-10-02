<template>
    <section class="testimonial-area-four section-padding section" :class="testimonialStyle" id="review">
        <div class="testimonial-top">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title title-style-4 text-center">
                            <h2 class="title">HAPPY CLIENTS</h2>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="testimonial-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="testimonial-active-four">
                            <swiper
                                :slides-per-view="3"
                                :space-between="30"
                                :speed="1000"
                                :breakpoints="swiperOptions.breakpoints"
                            >
                                <swiper-slide v-for="(client, clients) in clients" :key="clients" class="testimonial-item">
                                    <div class="testimonial-thumb">
                                        <img :src="client.clientThumb" alt="client thumb">
                                    </div>
                                    <div class="testimonial-content">
                                        <h6 class="client">{{ client.name }} - <span>{{ client.designation }}</span></h6>
                                        <p>{{ client.desc }}</p>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
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
    props: ["testimonialStyle"],
    data (){
        return {
            swiperOptions: {
                breakpoints: {
                    992:{
                        slidesPerView : 3
                    },

                    768:{
                        slidesPerView : 2
                    },

                    320:{
                        slidesPerView : 1
                    }
                }
            },
            clients: [
                {
                    clientThumb: require("../assets/img/testimonial/1.png"), 
                    name: "MOHAMET LUIS", 
                    designation: "Web Designer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram..."
                },
                {
                    clientThumb: require("../assets/img/testimonial/2.png"), 
                    name: "ERIN MAYA", 
                    designation: "Web Developer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram..."
                },
                {
                    clientThumb: require("../assets/img/testimonial/3.png"), 
                    name: "KUNJO PANDE", 
                    designation: "Marketer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram..."
                },
            ]
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/testimonial.scss';
</style>
