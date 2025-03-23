import React from 'react';
import { Link } from 'react-router-dom';
// Importing the image files
import ProjectImage1 from '../../assets/images/resource/project1-1.jpg';
import ProjectImage2 from '../../assets/images/resource/project1-2.jpg';
import ProjectImage3 from '../../assets/images/resource/project1-3.jpg';
import ProjectImage4 from '../../assets/images/resource/project1-4.jpg';

function Projects() {
    return (
        <>
			<section className="project-section pb-90">
				<div className="large-container">
					<div className="row wow fadeInUp">
						<div className="col-xl-3 col-sm-6 mb-30">
							<div className="project-block">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><Link to="/page-project-details"><img src={ProjectImage1} alt="Image"/></Link></figure>
									</div>
									<div className="content-box">
										<Link to="/page-project-details" className="theme-btn read-more"><i className="fa far fa-arrow-up"></i></Link><br />
										<h4 className="title"><Link to="/page-project-details">Wiring Solutions</Link></h4>
										<span className="cat">Electrical Company</span>
									</div>
									<div className="overlay-1"></div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 mb-30">
							<div className="project-block">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><Link to="/page-project-details"><img src={ProjectImage2} alt="Image"/></Link></figure>
									</div>
									<div className="content-box">
										<Link to="/page-project-details" className="theme-btn read-more"><i className="fa far fa-arrow-up"></i></Link><br />
										<h4 className="title"><Link to="/page-project-details">Power Install</Link></h4>
										<span className="cat">Electrical Company</span>
									</div>
									<div className="overlay-1"></div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 mb-30">
							<div className="project-block">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><Link to="/page-project-details"><img src={ProjectImage3} alt="Image"/></Link></figure>
									</div>
									<div className="content-box">
										<Link to="/page-project-details" className="theme-btn read-more"><i className="fa far fa-arrow-up"></i></Link><br />
										<h4 className="title"><Link to="/page-project-details">Circuit Repair</Link></h4>
										<span className="cat">Electrical Company</span>
									</div>
									<div className="overlay-1"></div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 mb-30">
							<div className="project-block">
								<div className="inner-box">
									<div className="image-box">
										<figure className="image"><Link to="/page-project-details"><img src={ProjectImage4} alt="Image"/></Link></figure>
									</div>
									<div className="content-box">
										<Link to="/page-project-details" className="theme-btn read-more"><i className="fa far fa-arrow-up"></i></Link><br />
										<h4 className="title"><Link to="/page-project-details">Wiring Solutions</Link></h4>
										<span className="cat">Electrical Company</span>
									</div>
									<div className="overlay-1"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );
}

export default Projects;
