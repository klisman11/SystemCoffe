<template>
    <div class="main-container">
        <Navbar NavbarStyle2="header-style-3" />
        <HeroBannerFour />
        <AboutTwo/>
        <AboutApp/>
        <FeatureFour />
        <DownloadThree />
        <VideoThree />
        <ScreenshotThree />
        <PriceTwo />
        <TestimonialFour />
        <ContactTwo />
        <Footer FooterStyle="footer-style-4" />
    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBannerFour from '../components/HeroBannerFour'
    import AboutTwo from '../components/AboutTwo'
    import AboutApp from '../components/AboutApp'
    import FeatureFour from '../components/FeatureFour'
    import DownloadThree from '../components/DownloadThree'
    import VideoThree from '../components/VideoThree'
    import ScreenshotThree from '../components/ScreenshotThree'
    import PriceTwo from '../components/PriceTwo'
    import TestimonialFour from '../components/TestimonialFour'
    import ContactTwo from '../components/ContactTwo'
    import Footer from '../components/Footer'

    export default {
        name: 'HomeFour',
        components: {
            Navbar,
            HeroBannerFour,
            AboutTwo,
            AboutApp,
            FeatureFour,
            DownloadThree,
            VideoThree,
            ScreenshotThree,
            PriceTwo,
            TestimonialFour,
            ContactTwo,
            Footer,
        }
    }
</script>

