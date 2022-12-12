import React from 'react';

import classes from './home.module.css'
import slide_1 from "../../img/pexels-adrien-olichon-2464420.jpg";
import slide_2 from "../../img/pexels-brett-sayles-12778827.jpg";
import slide_3 from "../../img/pexels-just-a-couple-photos-3421636.jpg";
import slide_4 from "../../img/pexels-kateryna-babaieva-2760243.jpg";
import { Container, Row, Col } from 'react-bootstrap';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';

export default function Carousel() {
    return (
        <Container fluid className={classes.carousel}>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                style={{ height: '100%' }}
                navigation
                spaceBetween={30}
                loop={true}
                slidesPerView={1}
            >
                <SwiperSlide>

                    <div className={classes.slide}>
                        <Row>
                            <Col>
                                <div className='d-flex justify-content-center'>
                                    <img src={slide_1} className={classes.slide_img} alt="logo" />
                                </div>
                            </Col>
                            <Col>
                                <div className={classes.slide_title}>
                                    <h2>Cleopatra Therm</h2>
                                    <p> A pioneer and market leader in manufacturing watersupply and drainage solutions</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.slide}>
                        <Row>
                            <Col>
                                <div className='d-flex justify-content-center'>
                                    <img src={slide_2} className={classes.slide_img} alt="logo" />
                                </div>
                            </Col>
                            <Col>
                                <div className={classes.slide_title}>
                                    <h2>Cleopatra Therm</h2>
                                    <p> A pioneer and market leader in manufacturing watersupply and drainage solutions</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.slide}>
                        <Row>
                            <Col>
                                <div className='d-flex justify-content-center'>
                                    <img src={slide_3} className={classes.slide_img} alt="logo" />
                                </div>                            </Col>
                            <Col>
                                <div className={classes.slide_title}>
                                    <h2>Cleopatra Therm</h2>
                                    <p> A pioneer and market leader in manufacturing watersupply and drainage solutions</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.slide}>
                        <Row>
                            <Col>
                                <div className='d-flex justify-content-center'>
                                    <img src={slide_4} className={classes.slide_img} alt="logo" />
                                </div>                            </Col>
                            <Col>
                                <div className={classes.slide_title}>
                                    <h2>Cleopatra Therm</h2>
                                    <p> A pioneer and market leader in manufacturing watersupply and drainage solutions</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>

    )
}


