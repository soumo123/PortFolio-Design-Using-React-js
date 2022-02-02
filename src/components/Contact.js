import React from 'react'
import emailjs from 'emailjs-com'

import contactimg1 from '../images/email-icon.png'
import contactimg2 from '../images/phone-icon.png'
import contactimg3 from '../images/contact-giif.gif'
import contactimg4 from '../images/social-Icon5.png'
import contactimg5 from '../images/social-Icon6.png'
import contactimg6 from '../images/social-Icon7.png'
import contactimg7 from '../images/user-icon.png'
import contactimg8 from '../images/email-icon2.png'

function Contact() {
    function sendEmail(e){
        e.preventDefault()
        
        emailjs.sendForm('service_t5tg9ev',
        'template_5o9ve8u',
        e.target,'user_gCzK5IySu5NktP10i77Ii'
        ).then(res=>{
            alert("Your messages has successfully send ")
            console.log(res)
            e.target.reset()
        }).catch(err=>{
            alert("Your messages has not send ")
            console.log(err)
        })
    }
    
      

    return (
       <>
        <section id="contact-me" className="pb-120">
        <div className="container">
            <div className="contact-info-area wow fadeInUp">
                <div className="row pr-15 pl-15">
                    <div className="col-lg-12 contact-bg">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-header text-center pt-120">
                                    <h4 className="sub-title">Say hello</h4>
                                    <h3 className="title">Let's Work Together</h3>
                                    <p>I’d love to meet up with you to discuss your venture,
                                        and potential collaborations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 offset-1">
                                <div className="contact-info">
                                    <a href="mailto:prakashduttaru@hotmail.com">
                                        <img src={contactimg1} alt="image"/>
                                        <span className="__cf_email__">prakashduttaru@hotmail.com</span></a>
                                    <a href="tel:+86-18019447429">
                                        <img src={contactimg2} alt="image"/>
                                        +86-18019447429</a>

                                    <a>
                                        <img src={contactimg2} alt="image"/>
                                        Shanghai, China</a>
                                </div>
                               
                                <img src={contactimg3}/>
                                 <div className="social-area">
                                    <h4>Follow Me on</h4>
                                    <div className="social d-flex">
                                        <a href="#" className="single-icon instagram"><img src={contactimg4} alt="social"/></a>
                                        <a href="#" className="single-icon skype"><img src={contactimg5} alt="social"/></a>
                                        <a href="https://www.linkedin.com/in/prakash-dutta" target="_blank" className="single-icon linkedin"><img src={contactimg6} alt="social"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 pr-0">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <div className="contact-area">
                                            <div className="contact-header text-center">
                                                <p>Fill in the form or <u>Send me an email</u></p>
                                            </div>
                                            <form className="form-area text-center" onSubmit={sendEmail}>
                                                <div className="input-area">
                                                    <input type="text" placeholder="Full Name" name="name" autocomplete="on"/>
                                                    <img src={contactimg7} alt="image"/>
                                                </div>
                                                <div className="input-area">
                                                    <input type="text" placeholder="Email Address" name="user_email"autocomplete="on"/>
                                                    <img src={contactimg8} alt="image"/>
                                                </div>
                                                <div className="input-area">
                                                    <input type="text" placeholder="Project Type" name="choice"autocomplete="on"/>
                
                                                </div>
                                                <div className="textarea-area">
                                                    <textarea cols="30" rows="6" placeholder="How Can I Help You?" name="messages"></textarea>
                                                </div>
                                                <button type="submit" className="cmn-btn" value="send">Submit</button>
                                      
                                            </form>
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

export default Contact
