import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import testimg1 from '../images/testimonials-user.png'
import testimg2 from '../images/testimonials-user-2.png'
import testimg3 from '../images/testimonials-user-3.png'


function Articles() {

    return (
        <>
        
        <section id="testimonials">
        <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-header text-center">
                            <h4 className="sub-title">What people say</h4>
                            <h3 className="title">Trusted by brands all over the world</h3>
                            <p>User-friendly web pages are our thing. I’ve also helped some
                                awesome businesses with branding and custom solutions.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="testimonials-carousel"> */}
                <AwesomeSlider>
                    <div className="col">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-5">
                                <div className="left-area">
                                    <img src={testimg1} alt="image"/>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="text-area">
                                    <h3>Robert Wood has helped our business deliver
                                        incredible results, leading success for our
                                        UI & UX</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, sapien sit amet scelerisque laoreet, eros justo congue neque, in maximus tellus velit vitae lacus.</p>
                                    <h4>Byron Burns <span>CEO @APPLE</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-5">
                                <div className="left-area">
                                    <img src={testimg2} alt="image"/>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="text-area">
                                    <h3>Robert Wood has helped our business deliver
                                        incredible results, leading success for our
                                        UI & UX</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, sapien sit amet scelerisque laoreet, eros justo congue neque, in maximus tellus velit vitae lacus.</p>
                                    <h4>Byron Burns <span>CEO @APPLE</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-5">
                                <div className="left-area">
                                    <img src={testimg3} alt="image"/>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="text-area">
                                    <h3>Robert Wood has helped our business deliver
                                        incredible results, leading success for our
                                        UI & UX</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, sapien sit amet scelerisque laoreet, eros justo congue neque, in maximus tellus velit vitae lacus.</p>
                                    <h4>Byron Burns <span>CEO @APPLE</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-5">
                                <div className="left-area">
                                    <img src={testimg1} alt="image"/>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="text-area">
                                    <h3>Robert Wood has helped our business deliver
                                        incredible results, leading success for our
                                        UI & UX</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, sapien sit amet scelerisque laoreet, eros justo congue neque, in maximus tellus velit vitae lacus.</p>
                                    <h4>Byron Burns <span>CEO @APPLE</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                </AwesomeSlider>
            </div>
        </div>
    </section>
        </>
    )
}

export default Articles
