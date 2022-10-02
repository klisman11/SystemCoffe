<template>
    <div class="coming-soon-wrapper" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="coming-soon-inner text-center">
                        <div class="coming-soon-logo">
                            <img src="../assets/img/logo/logo.png" alt="logo">
                        </div>
                        <div class="coming-soon-content">
                            <h1 class="heading-h3 text-white">We are launching soon</h1>
                            <Countdown deadline="march 31, 2023"></Countdown>
                        </div>
                        <div class="maintanence-form">
                            <input class="sub-form" type="text" placeholder="Your e-mail">
                            <button class="subscribe-btn">Subscribe</button>
                        </div>
                        <p class="form-desc"> You can subscribe us to get noticed when our website is ready.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Countdown from "../components/Countdown.vue"
    export default {
        name: 'ComingSoon',
        
        components: {
            Countdown,
        },
        data () {
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/coming-soon.jpg')})`
                }
            }
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/comingsoon.scss';
</style>