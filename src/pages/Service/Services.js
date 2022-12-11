import React from 'react';
import './index.css'
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <div className='services' id="services">
      <h1 className="Sectors">Sectors</h1>
      <Container>
        <Row>
          <Col>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front one">
                  {/* <h3>Hover, please!</h3> */}
                </div>
                <div class="flip-card-back">
                  <h3>Construction sector</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front secnd">
                  {/* <h3>Hover, please!</h3> */}
                </div>
                <div class="flip-card-back">
                  <h3>Irrigation and agriculture sector</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front theard">
                  {/* <h3>Hover, please!</h3> */}
                </div>
                <div class="flip-card-back">
                  <h3>Petroleum and energy sector</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


    </div>

  )
}

export default Services;