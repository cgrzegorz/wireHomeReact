// eslint-disable-next-line no-unused-vars
import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerHeader from '../InnerHeader.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Services from './Services.jsx';

function ServicesPages() {

    return (
        <>
            <InnerHeader />
            <PageTitle
                title="Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/services', title: 'Services' },
                ]}
            />
            <Services />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ServicesPages;
