import React from 'react'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Footer() {
    useEffect(()=>{
        Aos.init({duration: 1500})
      },[]);
    
    return (
        <>
         <footer id="footer-section"  data-aos="fade-down">
        <div className="overlay pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="section-header pb-120 text-center">
                            <h4 className="sub-title-alt">Contact Me</h4>
                            <h3 className="title">Think I can help? Lets Talk!</h3>
                            <a href="#contact-me" className="cmn-btn">Let's Work Together</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="main-content">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-start justify-cen">
                            <div className="left-area">
                                <p>Copyright © 2022. Prakash Dutta</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end justify-cen">
                            <div className="right-area">
                                <p>All right reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer
