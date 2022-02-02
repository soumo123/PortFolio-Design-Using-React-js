import React from 'react'
import turnimg from '../images/now-your-turn-right.png'
import CountUp from 'react-countup';

function Yourturn() {
    return (
        <>
            <section id="now-your-turn">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="section-header">
                                    <h4 className="sub-title-alt">Now Your Turn</h4>
                                    <h3 className="title">Interested in Working with Me?</h3>
                                    <p>Do you need help with any web design or development project?
                                        Let me give you a hand. Get in touch with me and i will get back to
                                        you within 1-2 business days.</p>
                                    <a href="#contact-me" className="cmn-btn">Contact me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-area">
                    <img src={turnimg} alt="image" />
                </div>
                <div className="bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-item">
                                  
                                    <CountUp start={0}
                                        end={57}
                                        duration={2.75} />
                                    <h5>Happy Clients</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-item second">
                                   
                                    <CountUp start={0}
                                        end={16}
                                        duration={2.75} />
                                    <h5>Years Experience</h5>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-item third">
                                <CountUp start={0}
                                        end={26}
                                        duration={2.75} />
                                   
                                    <span>k</span>
                                    <h5>Hours Worked</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-item fourth">
                                <CountUp start={0}
                                        end={4}
                                        duration={2.75} />
                                   
                                    <h5>Awards Won</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Yourturn
