import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerHeader from '../InnerHeader.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Projects from './Projects.jsx';

function ProjectsPages() {

    return (
        <>
            <InnerHeader />
            <PageTitle
                title="Projects"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/projects', title: 'Projects' },
                ]}
            />
            <Projects />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ProjectsPages;
