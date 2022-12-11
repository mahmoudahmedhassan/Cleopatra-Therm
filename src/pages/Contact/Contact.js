import React from 'react';
import classes from './index.module.css';
import { Container, Row, Col, } from 'react-bootstrap';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineWechat, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebookF,FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className={classes.contact}>
      <Container>
        <Row>
          <Col>
            <div className={classes.contact_info}>
              <h1 className={classes.info_title}>Cleopatra Therm</h1>
              <p className={classes.info_title}>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra fequis, feugiat arutr, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
            </div>
            <div>
              <div>
                <p><AiOutlineMail /> test12@gmail.com</p>
                <p><AiOutlinePhone /> 01032783783</p>
              </div>
              <div>
                <p><HiOutlineLocationMarker /> cairo</p>
                <p><AiOutlineWechat /> contact</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className={classes.contact_followus}>
              <h3>Follow Us</h3>
              <ul>
                <li><FaFacebookF />  follow us on facebook</li>
                <li><FaTwitter />    follow us on twitter</li>
                <li><FaFacebookF />  follow us on facebook</li>
                <li><FaFacebookF />  follow us on facebook</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>



    </div>
  )
}
export default Contact;