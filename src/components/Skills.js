import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

function Skills() {
    return (
        <>
            <section id="skills">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7" data-aos="fade-left">
                                <div className="section-header">
                                    <h4 className="title">My Technical Skills & Scholastics</h4>
                                    <p>Software Engineer & Architect with Java DevOps Professional</p>
                                </div>

                                <div id="accordion-one">


                                    <Accordion defaultActiveKey="0" flush>
                                        <Accordion.Item>

                                            <Accordion.Header> Operating System</Accordion.Header>

                                            <Accordion.Body>
                                                Windows , Linux
                                            </Accordion.Body>

                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">

                                            <Accordion.Header>Languages</Accordion.Header>

                                            <Accordion.Body>
                                                Core Java1.7, 1.8, J2ee, C, C++, Python 2.7, FoxPro 6
                                            </Accordion.Body>

                                        </Accordion.Item>


                                        <Accordion.Item eventKey="2">

                                            <Accordion.Header> Database</Accordion.Header>

                                            <Accordion.Body>
                                                MySql 5, SQL, MongoDB 2.6 NoSql Database
                                            </Accordion.Body>

                                        </Accordion.Item>



                                        <Accordion.Item eventKey="3">

                                            <Accordion.Header> Web Technologies</Accordion.Header>

                                            <Accordion.Body>
                                                Java Server Pages (JSP), PHP, HTML, XML,XSLT, XQuery, JSON, RESTful web-services using Jersey& Spring Boot, Quarkus, Microservices, Docker
                                            </Accordion.Body>

                                        </Accordion.Item>



                                        <Accordion.Item eventKey="4">

                                            <Accordion.Header>  Web Servers</Accordion.Header>

                                            <Accordion.Body>
                                                Apache Tomcat
                                            </Accordion.Body>

                                        </Accordion.Item>

                                        <Accordion.Item eventKey="5">

                                            <Accordion.Header> IDE Tools</Accordion.Header>

                                            <Accordion.Body>
                                                Eclipse, IntelliJ IDE

                                            </Accordion.Body>

                                        </Accordion.Item>

                                        <Accordion.Item eventKey="6">

                                            <Accordion.Header>Report Development</Accordion.Header>

                                            <Accordion.Body>
                                                Crystal Clear, Crystal Report

                                            </Accordion.Body>

                                        </Accordion.Item>



                                        <Accordion.Item eventKey="7">

                                            <Accordion.Header>Others</Accordion.Header>

                                            <Accordion.Body>
                                                OOD &OOAD Concept, Unix Shell script, Activity JBPM tool, Maven, Gradle,CI/CD Jenkins, TeamCity, HazelCast In-memory, Docker

                                            </Accordion.Body>

                                        </Accordion.Item>


                                        <Accordion.Item eventKey="8">

                                            <Accordion.Header> Version Control Tool, BI & ETL Tool</Accordion.Header>

                                            <Accordion.Body>
                                                Github
                                                <hr />Attivio 3.5.1, Talend Big Data ETL tool, WSO2 API Management Tool
                                            </Accordion.Body>

                                        </Accordion.Item>





                                        <Accordion.Item eventKey="9">

                                            <Accordion.Header> Java Source Code Analyzer , Cloud, IoT Messaging Tool</Accordion.Header>

                                            <Accordion.Body>
                                                PMD 5.0, FindBugs 2.0 <hr />
                                                AWS, Azure <hr />
                                                MQTT, Apache KafKa, Confluent KSQL, Kafka Stream
                                            </Accordion.Body>

                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="col-lg-5" data-aos="fade-right">
                                <div className="scroll-line">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2 left-point-none d-flex align-items-center">
                                            <div className="left-point"></div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-10 wow fadeInLeft">
                                            <div className="single-item">
                                                <h3>01-2019 to 07-2021</h3>
                                                <p>Operational Planning.</p>
                                                <p><a>Post-Graduate on Entrepreneurship & Leadership
                                                    Management in Online mode. </a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2 left-point-none d-flex align-items-center">
                                            <div className="left-point"></div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-10 wow fadeInRight">
                                            <div className="single-item">
                                                <h3>04-2000 to 01-2003</h3>
                                                <p>Masters in Computer Application</p>
                                                <p><a>NIELET from DOEACC Center,Kolkata</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2 left-point-none d-flex align-items-center">
                                            <div className="left-point"></div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-10 wow fadeInLeft">
                                            <div className="single-item">
                                                <h3>07-2006 to 03-2009</h3>
                                                <p>Bachelors</p>
                                                <p><a>Bachelor from Calcutta University</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2 left-point-none d-flex align-items-center">
                                            <div className="left-point"></div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-10 wow fadeInRight">
                                            <div className="single-item">
                                                <h3>03-2012 to 04-2013</h3>
                                                <p>Masters in Software Project Management</p>
                                                <p><a>EMBA(Executive MBA) from Kaizen Global School of
                                                    Business Management, Mumbai</a></p>
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

export default Skills
