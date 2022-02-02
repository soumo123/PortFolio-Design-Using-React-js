import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import video from '../images/1.mp4'
import workimg1 from '../images/award.png'


function Work() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section id="worked-with" className="bg-video-wrap">
                <video src={video} loop muted autoplay autoPlay="true">
                </video>
                <div className="overlay2">
                </div> <div className="main-content wow fadeInUp">
                    <div className="container">

                        <h2>My Certifications</h2>
                        <div className="worked-carousel">
                

                         <Carousel responsive={responsive}
                            swipeable={false}
                            draggable={false}
                            autoPlaySpeed={true}
                            keyBoardControl={true}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                                <div><img src={workimg1} alt="image"/></div>
                                <div><img src={workimg1} alt="image"/></div>
                                <div><img src={workimg1} alt="image"/></div>
                                <div><img src={workimg1} alt="image"/></div>
                            </Carousel>
                        
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Work
