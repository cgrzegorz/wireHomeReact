import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg1 from '../../assets/images/resource/about2-1.jpg';

function About({ className }) {
    return (
        <>
            <section className={`about-section-two ${className || ''}`}>
                    <div className="shape-8 bounce-y"/>
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="row">
                                <div className="image-column col-lg-6 wow fadeInLeft">
                                    <div className="inner-column wow fadeInLeft">
                                        <div className="image-box">
                                            <figure className="image overlay-anim"><img src={AboutImg1} alt="Image"/></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-column col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                                    <div className="inner-column">
                                        <div className="sec-title">
                                            <span className="sub-title">WHO WE ARE</span>
                                            <h2>Providing High Quality <br />Electrical Solution</h2>
                                        </div>
                                        <div className="text two">
                                            <Link to="/page-about">Our operations span the globe and encompass diverse sectors <br />within the electrical industry.</Link>
                                        </div>
                                        <div className="text">With over four decades of specialized expertise in Electrical services, <br />catering to large-scale enterprises worldwide, we provide tailored end-to-end <br />solutions crafted for you.</div>
                                        <div className="row">
                                            <div className="about-block col-md-6">
                                                <div className="inner"> <i className="icon flaticon-business-030-settings"></i>
                                                    <h5 className="title"><Link to="/page-about">Reasonable Cost</Link></h5>
                                                    <div className="text mb-0">Lorem ipsum dolor sit amet conse <br />adipiscing elit ridiculus</div>
                                                </div>
                                            </div>
                                            <div className="about-block col-md-6">
                                                <div className="inner mb-0"> <i className="icon flaticon-011-hand-drill"></i>
                                                    <h5 className="title"><Link to="/page-service-details">Expert Electrician</Link></h5>
                                                    <div className="text mb-0">Lorem ipsum dolor sit amet conse <br />adipiscing elit ridiculus</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default About;
