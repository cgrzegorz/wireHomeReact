import React from 'react';
import { Link } from 'react-router-dom';


function Features({ className }) {
    return (
        <>
            <section className={`features-section pt-0 ${className || ''}`}>
                <div className="auto-container">
                    <div className="row">
                        <div className="feature-block col-xl-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-050-protect"></i>
                                    <div className="number">01</div>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link to="/page-about">Awarded Company</Link>
                                    </h5>
                                    <div className="text">We strongly support bester practice sharing across our operations around.</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block col-xl-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-049-wiring"></i>
                                    <div className="number">02</div>
                                </div>
                                <div className="content">
                                    <h5 className="title"><Link to="/page-about">Flexible & Low Cost</Link></h5>
                                    <div className="text">We strongly support bester practice sharing across our operations around.</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block col-xl-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-048-crimping"></i>
                                    <div className="number">03</div>
                                </div>
                                <div className="content">
                                    <h5 className="title"><Link to="/page-about">Expert Electrician</Link></h5>
                                    <div className="text">We strongly support bester practice sharing across our operations around.</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-block col-xl-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-047-extension-cord"></i>
                                    <div className="number">04</div>
                                </div>
                                <div className="content">
                                    <h5 className="title"><Link to="/page-about">Dedicated Team</Link></h5>
                                    <div className="text">We strongly support bester practice sharing across our operations around.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;
