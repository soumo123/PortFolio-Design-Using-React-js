import React from 'react'
import resonsibleimg1 from '../images/social-Icon5.png'
import resonsibleimg2 from '../images/social-Icon6.png'
import resonsibleimg3 from '../images/social-Icon7.png'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Responsibilities() {
    useEffect(()=>{
        Aos.init({duration: 1500})
      },[]);
    
    return (
      <>
        <section id="latest-project">
        <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="row">
                    <div className="col-lg-6"  data-aos="fade-left">
                        <div className="section-header">
                            <h3 className="title">Major areas of Responsibility:</h3>
                        </div>

                        <ul className="point">
                            <li>Involved in requirement analysis, database design, coding, testing, implementation and maintenance of several software applications predominantly in publication industry.</li>
                            <li>Communicating with the clients, interviewing end-users to know the requirements & expectations of the clients.</li>
                            <li>Preparing project plans, coding, implementing the system in client servers and providing support and maintenance post implementation.</li>
                             <li>Conducting case / system / process study for project planning, scoping, estimation and tracking &coordinating with team members for requirement mapping, system design & integration.</li>
                            <li>Managing smooth implementation and testing of the application at client location.</li>
                            <li>Resolving queries regarding information system, software, extending onsite support including maintenance of software support.</li>
                            <li>Providing post-implementation, enhancement and maintenance support to client for application.</li>
                            <li>Performing regression testing, end to end testing, defect fixes retesting and reporting bugs after executing the test cases.</li>
                            </ul>


                    </div>
                    <div className="col-sm-6"  data-aos="fade-right">
                        <div className="main-img">
                                <div className="img-area">
                                   <img src="https://studio.code.org/v3/assets/YZgyDCNtXUCnTHpaSpxSxwXFTrJPL_qD1aqaXaAwfEQ/f71076b223b34baaaba5d5f100f04198.gif" className="img-area"/>
                                </div>
                            </div>
                              <div className="bottom-area">
                            <h2>like what you see? <span>follow me</span> and
                                discover more great  designs</h2>
                            <div className="social d-flex justify-content-center">
                                <a href="#" className="single-icon instagram"><img src={resonsibleimg1} alt="social"/></a>
                                        <a href="#" className="single-icon skype"><img src={resonsibleimg2} alt="social"/></a>
                                        <a href="https://www.linkedin.com/in/prakash-dutta" target="_blank" className="single-icon linkedin"><img src={resonsibleimg3} alt="social"/></a>
                            </div>
                        </div>
                        
                    </div>
                </div>                
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 text-center">
                      
                    </div>
                </div>
            </div>
        </div>
    </section>

      </>
    )
}

export default Responsibilities
