import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImage1 from '../../assets/images/resource/service2-1.jpg';
import ServiceImage2 from '../../assets/images/resource/service2-2.jpg';
import ServiceImage3 from '../../assets/images/resource/service2-3.jpg';

function Services() {
    return (
        <>
            <section className="services-section-home2 pb-70 pt-120">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/page-service-details"><img src={ServiceImage1} alt="Image"/></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="inner"> <i className="icon flaticon-049-wiring"></i>
                                            <h4 className="title"><Link to="/page-service-details">Wiring Solutions</Link></h4>
                                            <div className="text">Safe, efficient wiring installation and repair for residential and commercial properties.</div>
                                        </div>
                                        <Link to="/page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">READ MORE <i className="fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/page-service-details"><img src={ServiceImage2} alt="Image"/></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="inner"> <i className="icon flaticon-024-socket"></i>
                                            <h4 className="title"><Link to="/page-service-details">Air Conditioning</Link></h4>
                                            <div className="text">Inspections and upgrades to protect from electrical hazards and ensure compliance.</div>
                                        </div>
                                        <Link to="/page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">READ MORE <i className="fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/page-service-details"><img src={ServiceImage3} alt="Image"/></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="inner"> <i className="icon flaticon-001-light-bulb"></i>
                                            <h4 className="title"><Link to="/page-service-details">Indoor Lighting</Link></h4>
                                            <div className="text">Install surge protectors to safeguard appliances and electronics from power surges.</div>
                                        </div>
                                        <Link to="/page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">READ MORE <i className="fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/page-service-details"><img src={ServiceImage2} alt="Image"/></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="inner"> <i className="icon flaticon-024-socket"></i>
                                            <h4 className="title"><Link to="/page-service-details">Air Conditioning</Link></h4>
                                            <div className="text">Modernize electrical panels to handle increased power demands and improve reliability.</div>
                                        </div>
                                        <Link to="/page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">READ MORE <i className="fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/page-service-details"><img src={ServiceImage3} alt="Image"/></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="inner"> <i className="icon flaticon-001-light-bulb"></i>
                                            <h4 className="title"><Link to="/page-service-details">Indoor Lighting</Link></h4>
                                            <div className="text">Comprehensive solutions for flickering lights and new fixture installations.</div>
                                        </div>
                                        <Link to="/page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">READ MORE <i className="fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/page-service-details"><img src={ServiceImage1} alt="Image"/></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <div className="inner"> <i className="icon flaticon-049-wiring"></i>
                                            <h4 className="title"><Link to="/page-service-details">House Maintenance</Link></h4>
                                            <div className="text">Professional installation and maintenance of backup generators for uninterrupted power.</div>
                                        </div>
                                        <Link to="/page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">READ MORE <i className="fa fa-arrow-right"></i></span></Link>
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

export default Services;
