<template>
    <section class="team-area section-padding fix section" id="team">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title title-style-5 text-center">
                        <h2 class="title">OUR GIFTED DOCTORS</h2>
                        <p class="paragraph">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <swiper
                        :slides-per-view="3"
                        :speed="1000"
                        :breakpoints="swiperOptions.breakpoints"
                    >
                        <swiper-slide v-for="(doctor, doctors) in doctors" :key="doctors" class="doctor-member">
                            <div class="doctor-thumb text-center">
                                <img :src="doctor.thumb" alt="doctor thumb">
                                <div class="doctor-content">
                                    <h6 class="title">{{ doctor.title }}</h6>
                                    <p class="designation">{{ doctor.designation }}</p>
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
    import { Swiper, SwiperSlide } from "swiper/vue"
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data(){
            return {
                swiperOptions: {
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },

                        640:{
                            slidesPerView : 2
                        },

                        320:{
                            slidesPerView : 1
                        }
                    }
                },
                doctors:[
                    {
                        title: "ERICK MARTEN", 
                        designation: "Deltal Specialist", 
                        thumb: require("../assets/img/home-medical/team/1.jpg")
                    },
                    {
                        title: "MARLIN JACK", 
                        designation: "Deltal Specialist", 
                        thumb: require("../assets/img/home-medical/team/2.jpg")
                    },
                    {
                        title: "JHONSON DOE", 
                        designation: "Deltal Specialist", 
                        thumb: require("../assets/img/home-medical/team/3.jpg")
                    },
                    {
                        title: "TOM DOE", 
                        designation: "Deltal Specialist", 
                        thumb: require("../assets/img/home-medical/team/2.jpg")
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/team.scss';
</style>
