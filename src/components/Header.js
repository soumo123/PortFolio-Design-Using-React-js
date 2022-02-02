import React from 'react'
import * as  ReacBootstrap from 'react-bootstrap'

function Header() {
    return (
        <>
            <header id="header-section" >
                <div className="overlay">
                    <div className="container">
                        <div className="row header-area">
                            
                            <ReacBootstrap.Navbar collapseOnSelect expand="lg" >
                                <ReacBootstrap.Container>
                                    <ReacBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                                    <ReacBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                                        <ReacBootstrap.Nav className="me-auto">
                                            <ul class="navbar-nav main-menu ml-auto">
                                                <li><a href="#aboutMe">About Me</a></li>
                                                <li><a href="#skills">My Skills</a></li>
                                                <li><a href="#specilizing-section">Specilizing</a></li>
                                                <li><a href="#worked-with">Certifications</a></li>
                                                <li><a href="#latest-project">Portfolio</a></li>
                                                <li><a href="#artiles" target="_blank">Articles</a></li>
                                                <li><a href="#contact-me" >Contact Me</a></li>
                                            </ul>
                                        </ReacBootstrap.Nav>
                                    </ReacBootstrap.Navbar.Collapse>
                                </ReacBootstrap.Container>
                            </ReacBootstrap.Navbar>


                            <div className="right-area header-action d-flex align-items-center">
                        
                            </div>
                        </div>
                    </div>
                </div>
            </header>



        </>
    )
}

export default Header
