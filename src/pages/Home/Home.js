import React from 'react'
import classes from './home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from './Carousel';
import Slider from './Slider';

const Home = () => {
  return (
    <div className={classes.home} id="home">
      {/* <Carousel/> */}
      <Slider/>
      <Container>

        {/* <h3>
          A pioneer and market leader in manufacturing watersupply and drainage solutions
        </h3>
         <p>
          We implement, manufacture and develop a wide range of plumbing products and deliver complete home solutions
          with superior German quality to different residential/industrial projects across Egypt and the Middle East.
        </p> */}

      </Container>
     </div>
  )
}
export default Home;

