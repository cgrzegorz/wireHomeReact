import React from 'react';
import BackToTop from '../BackToTop.jsx';
import InnerHeader from '../InnerHeader.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Team from './Team.jsx';

function TeamPages() {

    return (
        <>
            <InnerHeader />
            <PageTitle
                title="Team Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/team', title: 'Team' },
                ]}
            />
            <Team />
            <Footer />
            <BackToTop />
        </>
    );
}

export default TeamPages;
