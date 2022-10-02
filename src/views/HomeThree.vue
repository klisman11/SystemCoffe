<template>
    <div class="main-container">
        <Navbar NavbarStyle2="header-style-3" />
        <HeroBannerThree />
        <About AboutStyle="about-style-3" />
        <BestAppThree />
        <FeaturesThree />
        <TestimonialThree />
        <ScreenshotTwo />
        <VideoTwo />
        <Price />
        <DownloadTwo downloadThree="download-style-3" />
        <Contact ContactStyle="contact-style-3" />
        <Footer FooterStyle="footer-style-3" />
    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import HeroBannerThree from '../components/HeroBannerThree'
    import About from '../components/About'
    import BestAppThree from '../components/BestAppThree'
    import FeaturesThree from '../components/FeaturesThree'
    import TestimonialThree from '../components/TestimonialThree'
    import ScreenshotTwo from '../components/ScreenshotTwo'
    import VideoTwo from '../components/VideoTwo'
    import Price from '../components/Price'
    import DownloadTwo from '../components/DownloadTwo'
    import Contact from '../components/Contact'
    import Footer from '../components/Footer'

    export default {
        name: 'HomeThree',
        components: {
            Navbar,
            HeroBannerThree,
            About,
            BestAppThree,
            FeaturesThree,
            TestimonialThree,
            ScreenshotTwo,
            VideoTwo,
            Price,
            DownloadTwo,
            Contact,
            Footer,
        }
    }
</script>

