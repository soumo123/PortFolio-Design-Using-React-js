import React from 'react'
import storyimg1 from '../images/social-Icon5.png'
import storyimg2 from '../images/social-Icon6.png'
import storyimg3 from '../images/social-Icon7.png'
import storyimg4 from '../images/working-boy.gif'
import storyimg5 from '../images/story-object.png'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Storysection() {
    useEffect(()=>{
        Aos.init({duration: 1500})
      },[]);
    
    return (
        <>
            <section id="my-story-section">
                <div className="overlay">
                    <div className="container">
                        <div className="row d-flex justify-content-between wow fadeInUp" data-aos="fade-left">
                            <div className="col-lg-6 col-md-6">
                                <div className="left-area">
                                    <h3 className="title">My Career Conspectus</h3>
                                    <ul className="point">
                                        <li><b>Presently holding US Business visa (B1/B2) valid till 2028 & China Work-Permit valid till Dec 2022.</b></li>
                                        <li>A proactive, creative & innovative IT professional with over<b> 12+ years of experience in software development, implementation, application support & project management.</b></li>
                                        <li>Knowledge of various software's, creating new software's & systems, designing, analysis, testing, database development & coding for modules as per customer's requirements.</li>


                                        <li>Knowledge of all phases of Software Development Life Cycle (SDLC), good understanding of system study, design, client interaction, coordination, development & implementation of application software.</li>
                                        <li>Ä Adept at mapping client's requirements, analyzing and translating business requirements to technical requirements and architecture.</li>
                                        <li>Strong team player with excellent ability to coordinate with different people at one time under difficult situations & the ability to bring out the best in others while creating a healthy work environment.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <img src={storyimg4} alt="profile" className="user" />
                                <div className="right-area">
                                     <img src={storyimg5} alt="object" className="object" />
                              

                                </div>
                                <div className="social-area">
                                    <div className="social d-flex">
                                        <a href="#" className="single-icon instagram"><img src={storyimg1} alt="social" /></a>
                                        <a href="#" className="single-icon skype"><img src={storyimg2} alt="social" /></a>
                                        <a href="https://www.linkedin.com/in/prakash-dutta" target="_blank" className="single-icon linkedin"><img src={storyimg3} alt="social" /></a>
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

export default Storysection
