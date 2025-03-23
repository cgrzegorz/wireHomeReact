import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import InnerHeader from '../InnerHeader.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';

function Contact() {
    return (
        <>
        <InnerHeader />
        <PageTitle
	        title="Contact Us"
	        breadcrumb={[
	            { link: '/', title: 'Home' },
	            { link: '/news-details', title: 'Contact' },
	        ]}
	    />
	  	{/* <!--Contact Details Start--> */}
	  	<section className="contact-details">
	  		<div className="container ">
	  			<div className="row">
	  				<div className="col-xl-7 col-lg-6">
	  					<div className="sec-title">
	  						<span className="sub-title">Send us email</span>
	  						<h2>Feel free to write</h2>
	  					</div>
	  					<form id="contact_form" name="contact_form" action="/page-contact" method="get">
	  						<div className="row">
	  							<div className="col-sm-6">
	  								<div className="mb-3">
	  									<input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
	  								</div>
	  							</div>
	  							<div className="col-sm-6">
	  								<div className="mb-3">
	  									<input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
	  								</div>
	  							</div>
	  						</div>
	  						<div className="row">
	  							<div className="col-sm-6">
	  								<div className="mb-3">
	  									<input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
	  								</div>
	  							</div>
	  							<div className="col-sm-6">
	  								<div className="mb-3">
	  									<input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
	  								</div>
	  							</div>
	  						</div>
	  						<div className="mb-3">
	  							<textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
	  						</div>
	  						<div className="mb-5">
	  							<input name="form_botcheck" className="form-control" type="hidden" value="" />
	  							<button type="submit" className="theme-btn btn-style-two mb-3 mb-sm-0 me-3" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
	  							<button type="reset" className="theme-btn btn-style-two"><span className="btn-title">Reset</span></button>
	  						</div>
	  					</form>
	  				</div>
	  				<div className="col-xl-5 col-lg-6">
	  					<div className="contact-details__right">
	  						<div className="sec-title">
	  							<span className="sub-title">Need any help?</span>
	  							<h2>Get in touch with us</h2>
	  							<div className="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div>
	  						</div>
	  						<ul className="list-unstyled contact-details__info">
	  							<li className="d-block d-sm-flex align-items-sm-center ">
	  								<div className="icon">
	  									<span className="lnr-icon-phone-plus"></span>
	  								</div>
	  								<div className="text ml-xs--0 mt-xs-10">
	  									<h6>Have any question?</h6>
	  									<a href="tel:980089850"><span>Free</span> +92 (020)-9850</a>
	  								</div>
	  							</li>
	  							<li className="d-block d-sm-flex align-items-sm-center ">
	  								<div className="icon">
	  									<span className="lnr-icon-envelope1"></span>
	  								</div>
	  								<div className="text ml-xs--0 mt-xs-10">
	  									<h6>Write email</h6>
	  									<a href="mailto:needhelp@company.com">needhelp@company.com</a>
	  								</div>
	  							</li>
	  							<li className="d-block d-sm-flex align-items-sm-center ">
	  								<div className="icon">
	  									<span className="lnr-icon-location"></span>
	  								</div>
	  								<div className="text ml-xs--0 mt-xs-10">
	  									<h6>Visit anytime</h6>
	  									<span>66 broklyn golden street. New York</span>
	  								</div>
	  							</li>
	  						</ul>
	  					</div>
	  				</div>
	  			</div>
	  		</div>
	  	</section>
		{/* <!--Contact Details End--> */}

		{/* <!-- Map Section--> */}
		<section className="map-section">
			<iframe className="map w-100" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
		</section>
		{/* <!--End Map Section--> */}
        <Footer />
        <BackToTop />
        </>
    );
}

export default Contact;
