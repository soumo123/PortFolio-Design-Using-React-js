import React from 'react'
import specialimage1 from '../images/pg10.gif'
import specialimage2 from '../images/pg11.avif'
import specialimage3 from '../images/pg12.gif'
import specialimage4 from '../images/pg13.gif'
import specialimage5 from '../images/pg14.gif'
import specialimage6 from '../images/pg15.gif'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Specializing() {
    useEffect(()=>{
        Aos.init({duration: 1500})
      },[]);
    
    return (
       <>
       <section id="specilizing-section">
        <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                        <div className="section-header">
                            <h4 className="sub-title">What I Do</h4>
                            <h3 className="title">Specilizing In</h3>
                            <p>Sed tempus sapien in nisi auctor lacinia. Donec metus
                                felis, ultricies nec pharetra volutpat</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="single-item"><div className="img-box">
                            <img src={specialimage1} alt="image"/></div>
                            <div className="text-info">
                            <a><h2>Software <br/>Development</h2></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-down">
                        <div className="single-item"><div className="img-box">
                            <img src={specialimage2} alt="image"/></div>
                             <div className="text-info">
                            <a><h2>Technical <br/>Support</h2></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="single-item"><div className="img-box">
                            <img src={specialimage3} alt="image"/></div>
                             <div className="text-info">
                            <a><h2>SAFe Scrum <br/>Master Practitioner</h2></a></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6"data-aos="fade-down">
                        <div className="single-item"><div className="img-box">
                            <img src={specialimage4} alt="image"/></div>
                             <div className="text-info">
                            <a><h2>Client <br/>Servicing</h2></a>
                        </div>
                        </div>
                    </div>
                     <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="single-item">
                            <div className="img-box">
                            <img src={specialimage5} alt="image"/>
                        </div>
                         <div className="text-info">
                            <a><h2>Cross Functional<br/> Coordination</h2></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-down">
                        <div className="single-item">
                            <div className="img-box">
                            <img src={specialimage6} alt="image"/>
                        </div>
                         <div className="text-info">
                            <a><h2>Java full-stack developer & Module Leader</h2></a>
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

export default Specializing
