import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerHeader from '../InnerHeader.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import About from './About.jsx';
import Video2 from '../HomeTwo/Video2.jsx';
import Service from '../HomeTwo/Service.jsx';
import Project from '../HomeOne/Project.jsx';

function AboutUs() {

    return (
        <>
            <InnerHeader />
            <PageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/page-about', title: 'About us' },
                ]}
            />
            <About />
            <Service />
            <Video2 /> 
            <Project />
            <Footer />
            <BackToTop />
        </>
    );
}

export default AboutUs;
