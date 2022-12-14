import React from 'react'
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
    return (


        <div className='header'>
            <Container >
                <Row >
                    
                    <Col sm={4}><div className='header_title text-center'>Cleopatra Therm</div></Col>
                    <Col sm={8} className='d-flex justify-content-end'>
                        <section>
                            <div class="wrapper">
                                <div class="button">
                                    <div class="icon">
                                        <i class="fab fa-instagram"></i>
                                    </div>
                                    <span>Instagram</span>
                                </div>

                                <div class="button">
                                    <div class="icon">
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                    <span>Facebook</span>
                                </div>

                                <div class="button">
                                    <div class="icon">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                    <span>Twitter</span>
                                </div>

                                <div class="button">
                                    <div class="icon">
                                        <i class="fab fa-linkedin"></i>
                                    </div>
                                    <span>LinkedIn</span>
                                </div>

                                <div class="button">
                                    <div class="icon">
                                        <i class="fab fa-youtube"></i>
                                    </div>
                                    <span>YouTube</span>
                                </div>

                                <div class="button">
                                    <div class="icon">
                                        <i class="fab fa-github"></i>
                                    </div>
                                    <span>Github</span>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header