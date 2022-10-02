<template>
    <div class="main-container">
        <NavbarTwo />
        <HeroBannerFive />
        <MedicalInfo/>
        <Appointment />
        <CounterUpTwo/>
        <Service />
        <TestimonialFour testimonialStyle="testimonial-five" />
        <TeamDoctor />
        <DownloadFour />
        <Policy />
        <CallToAction />
        <Blog />
        <GoogleMap />
        <FooterTwo />
    </div>
</template>

<script>
    import NavbarTwo from '../components/NavbarTwo'
    import HeroBannerFive from '../components/HeroBannerFive'
    import MedicalInfo from '../components/MedicalInfo'
    import Appointment from '../components/Appointment'
    import CounterUpTwo from '../components/CounterUpTwo'
    import Service from '../components/Service'
    import TestimonialFour from '../components/TestimonialFour'
    import TeamDoctor from '../components/TeamDoctor'
    import DownloadFour from '../components/DownloadFour'
    import Policy from '../components/Policy'
    import CallToAction from '../components/CallToAction'
    import Blog from '../components/Blog'
    import GoogleMap from '../components/GoogleMap'
    import FooterTwo from '../components/FooterTwo'

    export default {
        name: 'HomeFive',
        components: {
            NavbarTwo,
            HeroBannerFive,
            MedicalInfo,
            Appointment,
            CounterUpTwo,
            Service,
            TestimonialFour,
            TeamDoctor,
            DownloadFour,
            Policy,
            CallToAction,
            Blog,
            GoogleMap,
            FooterTwo,
        }
    }
</script>

