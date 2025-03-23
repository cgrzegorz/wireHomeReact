import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import TeamImg1 from '../../assets/images/resource/team1-1.jpg';
import TeamImg2 from '../../assets/images/resource/team1-2.jpg';
import TeamImg3 from '../../assets/images/resource/team1-3.jpg';

function Team() {
    return (
        <>
<section className="team-section pb-90">
    <div className="auto-container">
        <div className="row wow fadeInUp">
      	    <div className="col-lg-4 col-sm-6">
			    <div className="team-block mb-30">
			      <div className="inner-box">
			        <div className="image-box">
			          <figure className="image"><Link to="/page-team-details"><img src={TeamImg1} alt="Image"/></Link></figure>
			          <div className="info-box">
			            <h4 className="name"><Link to="/page-team-details">John Mirkwood</Link></h4>
			            <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
			            <div className="social-links">
			              <Link to="#"><i className="fab fa-twitter"></i></Link>
			              <Link to="#"><i className="fab fa-instagram"></i></Link>
			              <Link to="#"><i className="fab fa-facebook-f"></i></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
      	    </div>
            <div className="col-lg-4 col-sm-6">
			    <div className="team-block mb-30">
			      <div className="inner-box">
			        <div className="image-box">
			          <figure className="image"><Link to="/page-team-details"><img src={TeamImg2} alt="Image"/></Link></figure>
			        </div>
			        <div className="info-box">
			          <h4 className="name"><Link to="/page-team-details">Leslie Alexander</Link></h4>
			          <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
			          <div className="social-links">
			            <Link to="#"><i className="fab fa-twitter"></i></Link>
			            <Link to="#"><i className="fab fa-instagram"></i></Link>
			            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
			          </div>
			        </div>
			      </div>
			    </div>
            </div>
            <div className="col-lg-4 col-sm-6">
			    <div className="team-block mb-30">
			      <div className="inner-box">
			        <div className="image-box">
			          <figure className="image"><Link to="/page-team-details"><img src={TeamImg3} alt="Image"/></Link></figure>
			        </div>
			        <div className="info-box">
			          <h4 className="name"><Link to="/page-team-details">Brooklyn Simmons</Link></h4>
			          <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
			          <div className="social-links">
			            <Link to="#"><i className="fab fa-twitter"></i></Link>
			            <Link to="#"><i className="fab fa-instagram"></i></Link>
			            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
			          </div>
			        </div>
			      </div>
			    </div>
            </div>
            <div className="col-lg-4 col-sm-6">
			    <div className="team-block mb-30">
			      <div className="inner-box">
			        <div className="image-box">
			          <figure className="image"><Link to="/page-team-details"><img src={TeamImg2} alt="Image"/></Link></figure>
			        </div>
			        <div className="info-box">
			          <h4 className="name"><Link to="/page-team-details">Leslie Alexander</Link></h4>
			          <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
			          <div className="social-links">
			            <Link to="#"><i className="fab fa-twitter"></i></Link>
			            <Link to="#"><i className="fab fa-instagram"></i></Link>
			            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
			          </div>
			        </div>
			      </div>
			    </div>
            </div>
            <div className="col-lg-4 col-sm-6">
			    <div className="team-block mb-30">
			      <div className="inner-box">
			        <div className="image-box">
			          <figure className="image"><Link to="/page-team-details"><img src={TeamImg3} alt="Image"/></Link></figure>
			        </div>
			        <div className="info-box">
			          <h4 className="name"><Link to="/page-team-details">Brooklyn Simmons</Link></h4>
			          <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
			          <div className="social-links">
			            <Link to="#"><i className="fab fa-twitter"></i></Link>
			            <Link to="#"><i className="fab fa-instagram"></i></Link>
			            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
			          </div>
			        </div>
			      </div>
			    </div>
            </div>
      	    <div className="col-lg-4 col-sm-6">
			    <div className="team-block mb-30">
			      <div className="inner-box">
			        <div className="image-box">
			          <figure className="image"><Link to="/page-team-details"><img src={TeamImg1} alt="Image"/></Link></figure>
			          <div className="info-box">
			            <h4 className="name"><Link to="/page-team-details">John Mirkwood</Link></h4>
			            <span className="designation">Support Engineer</span> <span className="share-icon fa fa-share-alt"></span>
			            <div className="social-links">
			              <Link to="#"><i className="fab fa-twitter"></i></Link>
			              <Link to="#"><i className="fab fa-instagram"></i></Link>
			              <Link to="#"><i className="fab fa-facebook-f"></i></Link>
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

export default Team;
