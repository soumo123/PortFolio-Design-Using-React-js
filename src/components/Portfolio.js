import React from 'react'
import portimg1 from '../images/latest-project1.png'
import portimg2 from '../images/latest-project2.png'
import portimg3 from '../images/latest-project3.png'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Portfolio() {
    useEffect(()=>{
        Aos.init({duration: 1500})
      },[]);
    
    return (
        <>
            <section id="latest-project" className="portfolio">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-7">
                                <div className="section-header">
                                    <h4 className="sub-title">Portfolios</h4>
                                    <h3 className="title">All Creative Works</h3>
                                    <p>User-friendly web pages are our thing. I’ve also helped some
                                        awesome businesses with branding and custom solutions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                                        <div className="single-item" data-aos="fade-left">
                                            <div className="row d-flex justify-content-between">
                                                <div className="col-lg-4 col-md-5 d-flex align-items-center">
                                                    <div className="text-area">
                                                        <h5>Product Design</h5>
                                                        <a><h2>Mobile App Redesign</h2></a>
                                                        <p>Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                                       
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-7 d-flex align-items-center">
                                                    <div className="right-area">
                                                        <img src={portimg1} alt="image" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-7 d-flex align-items-center">
                                                    <div className="right-area">
                                                        <img src={portimg1} alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-item"  data-aos="fade-right">
                                            <div className="row d-flex justify-content-between">
                                                <div className="col-lg-4 col-md-7 d-flex align-items-center">
                                                    <div className="right-area mid">
                                                        <img src={portimg2} alt="image" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-7 d-flex align-items-center">
                                                    <div className="right-area">
                                                        <img src={portimg1} alt="image" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-5 d-flex align-items-center">
                                                    <div className="text-area">
                                                        <h5 className="mid">UI/UX Design</h5>
                                                        <a><h2>Mobile App Design</h2></a>
                                                        <p>Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-item"  data-aos="fade-left">
                                            <div className="row d-flex justify-content-between">
                                                <div className="col-lg-4 col-md-5 d-flex align-items-center">
                                                    <div className="text-area">
                                                        <h5 className="last">Web Design</h5>
                                                        <a><h2>Website Design</h2></a>
                                                        <p>Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                                        {/* <a className="cmn-btn-second">View Case Study
                                                            <span className="btn-icon"></span>
                                                        </a> */}
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-7 d-flex align-items-center">
                                                    <div className="right-area">
                                                        <img src={portimg3} alt="image" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-7 d-flex align-items-center">
                                                    <div className="right-area">
                                                        <img src={portimg1} alt="image" />
                                                    </div>
                                                </div>
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
    )
}

export default Portfolio
