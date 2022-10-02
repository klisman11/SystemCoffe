<template>
    <div class="main-container">
        <Navbar NavbarStyle="NavbarStyle" />
        <HeroBanner />
        <About AboutStyle="about-style-2" />
        <BestAppTwo />
        <FeatureTwo />
        <TestimonialTwo />
        <ScreenshotTwo />
        <VideoTwo />
        <Price />
        <DownloadTwo />
        <Contact ContactStyle="contact-style-2" />
        <Footer FooterStyle="footer-style-2" />
    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBanner from '../components/HeroBanner'
    import About from '../components/About'
    import BestAppTwo from '../components/BestAppTwo'
    import FeatureTwo from '../components/FeatureTwo'
    import TestimonialTwo from '../components/TestimonialTwo'
    import ScreenshotTwo from '../components/ScreenshotTwo'
    import VideoTwo from '../components/VideoTwo'
    import Price from '../components/Price'
    import DownloadTwo from '../components/DownloadTwo'
    import Contact from '../components/Contact'
    import Footer from '../components/Footer'

    export default {
        name: 'HomeTwo',
        components: {
            Navbar,
            HeroBanner,
            About,
            BestAppTwo,
            FeatureTwo,
            TestimonialTwo,
            ScreenshotTwo,
            VideoTwo,
            Price,
            DownloadTwo,
            Contact,
            Footer,
        }
    }
</script>

