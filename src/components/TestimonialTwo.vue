<template>
    <section class="testimonial-area testimonial-style-2 section-padding fix section" id="review" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="position-relative">
                        <swiper
                            :slides-per-view="1"
                            :space-between="30"
                            :speed="1000"
                            :pagination="swiperOptions.pagination"
                        >
                            <swiper-slide v-for="(client, clients) in clients" :key="clients" class="testimonial-item testimonial-style2">
                                <div class="testimonial-content">
                                    <p>{{ client.desc }}</p>
                                </div>
                                <div class="testimonial-thumb">
                                    <img :src="client.clientThumb" alt="client thumb">
                                </div>
                                <h6 class="client">{{ client.name }} - <span>{{ client.designation }}</span></h6>
                            </swiper-slide>
                        </swiper>
                        <div class="swiper-pagination pagination-dot-style"></div>
                    </div>
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
                    el: '.testimonial-area .pagination-dot-style',
                    type: 'bullets',
                    clickable: true
                }
            },

            bgImg: {
                backgroundImage: `url(${require('../assets/img/bg/clients2-bg.jpg')})`
            },
            clients: [
                {
                    clientThumb: require("../assets/img/testimonial/1.png"), 
                    name: "MOHAMET LUIS", 
                    designation: "Web Designer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
                },
                {
                    clientThumb: require("../assets/img/testimonial/2.png"), 
                    name: "ERIN MAYA", 
                    designation: "Web Developer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
                },
                {
                    clientThumb: require("../assets/img/testimonial/3.png"), 
                    name: "KUNJO PANDE", 
                    designation: "Marketer", 
                    desc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima."
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
