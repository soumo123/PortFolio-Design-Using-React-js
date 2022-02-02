import React from 'react'
import About from './About'
import image1 from '../images/icon-1.png'
import image2 from '../images/icon-2.png'
import image3 from '../images/icon-3.png'
import image4 from '../images/icon-4.png'
import image5 from '../images/download-Icon.png'
import image6 from '../images/banner-circle.png'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Banner() {
    useEffect(()=>{
        Aos.init({duration: 1500})
      },[]);
    
    return (
       <>
          <section id="banner-section">
        <div className="banner-content d-flex align-items-center pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10" >
                        <div className="main-content">
                            <div className="item one"  data-aos="fade-down">
                                <img src={image1} alt="image"/>
                                <h5>Software Development</h5>
                            </div>
                            <div className="item two "  data-aos="fade-down">
                                <img src={image2} alt="image"/>
                                <h5>Full-stack developer</h5>
                            </div>
                            <div className="item three " data-aos="fade-down">
                                <img src={image3} alt="image"/>
                                <h5>Hi there!</h5>
                            </div>
                            <div className="item four " data-aos="fade-down">
                                <img src={image4} alt="image"/>
                                <h5>Work with me</h5>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="right-area text-center">
                                        <img src={image6} className="right-img" alt="banner-circle"/>
                                        <div className="download-area">
                                            <a href="resume_prakashdutta_31Dec2021.pdf" target="_blank" className="download">Download CV
                                                <img src={image5} alt="image"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <About/>
                
            </div>
        </div>
    </section>
   
       </>
       
    )
}

export default Banner
