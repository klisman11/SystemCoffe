<template>
    <div class="main-container">

        <router-view />
        <Navbar />
        <Slider />
        <About />
        <BestApp />
        <Features />
        <Testimonial />
        <Screenshot />
        <Video />
        <Team />
        <Download />
        <Contact />
        <Footer />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import Slider from '../components/Slider'
    import About from '../components/About'
    import BestApp from '../components/BestApp'
    import Features from '../components/Features'
    import Testimonial from '../components/Testimonial'
    import Screenshot from '../components/Screenshot'
    import Video from '../components/Video'
    import Team from '../components/Team'
    import Download from '../components/Download'
    import Contact from '../components/Contact'
    import Footer from '../components/Footer'

    export default {
        name: 'HomeOne',
        components: {
            Navbar,
            Slider,
            About,
            BestApp,
            Features,
            Testimonial,
            Screenshot,
            Video,
            Team,
            Download,
            Contact,
            Footer
        }
    }
</script>

