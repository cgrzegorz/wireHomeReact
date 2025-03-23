import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from '../../assets/images/resource/service1-1.jpg';
import Service2 from '../../assets/images/resource/service1-2.jpg';
import Service3 from '../../assets/images/resource/service1-3.jpg';


function Service({ className }) {
    return (
        <>
            <section id="services" className={`services-section ${className || ''}`}>
                <div className="icon-plane-2 bounce-y"/>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">WHAT WE DO</span>
                        <h2>We Offer Cost Efficient <br/> Electrical Services</h2>
                    </div>
                    <div className="row">
                        <div className="service-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/page-service-details"><img className="w-100" src={Service1} alt="Image"/></Link></figure>
                                    <Link to="/page-service-details" className="theme-btn read-more">READ MORE <i className="fa fa-arrow-up"></i></Link>
                                </div>
                                <div className="content-box">
                                    <div className="info-box"> <i className="icon flaticon-028-pcb-board"></i>
                                        <h4 className="title"><Link to="/page-service-details">House <br />Maintenance</Link></h4>
                                    </div>
                                    <div className="inner">
                                        <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/page-service-details"><img className="w-100" src={Service2} alt="Image"/></Link></figure>
                                    <Link to="/page-service-details" className="theme-btn read-more">READ MORE <i className="fa fa-arrow-up"></i></Link>
                                </div>
                                <div className="content-box">
                                    <div className="info-box"> <i className="icon flaticon-029-electric-meter"></i>
                                        <h4 className="title"><Link to="/page-service-details">Electric<br/>Panel Repair</Link></h4>
                                    </div>
                                    <div className="inner">
                                        <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-block col-lg-4 col-md-6">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/page-service-details"><img className="w-100" src={Service3} alt="Image"/></Link></figure>
                                    <Link to="/page-service-details" className="theme-btn read-more">READ MORE <i className="fa fa-arrow-up"></i></Link>
                                </div>
                                <div className="content-box">
                                    <div className="info-box"> <i className="icon flaticon-050-protect"></i>
                                        <h4 className="title"><Link to="/page-service-details">Air <br/>Conditioning</Link></h4>
                                    </div>
                                    <div className="inner">
                                        <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
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

export default Service;
