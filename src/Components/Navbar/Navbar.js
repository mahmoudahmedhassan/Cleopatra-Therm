import React , {useEffect} from 'react'
import './Navbar.css';
import $ from 'jquery';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from '../../img/logo.jpg'
const Navbar = () => {

  function animation(){
    let tabsNewAnim = $('#navbarSupportedContent');
    let activeItemNewAnim = tabsNewAnim.find('.active');
    let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    let itemPosNewAnimTop = activeItemNewAnim.position();
    let itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      let activeWidthNewAnimHeight = $(this).innerHeight();
      let activeWidthNewAnimWidth = $(this).innerWidth();
      let itemPosNewAnimTop = $(this).position();
      let itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}   className="navbar-brand navbar-logo">
         <img className="logo" src={logo} alt="logo" height="50px" width="50px"/>
      </Link>
 
        <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <Link delay={1000} activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}   className="nav-link"  >
                <i className="fas fa-tachometer-alt">
                </i>Home
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link delay={500} activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}   className="nav-link"  >
                <i 
                className="far fa-address-book">
                </i>About
              </Link> 
            </li> */}

            <li className="nav-item">
              <Link delay={500} activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500}  className="nav-link"  >
                <i 
                className="far fa-clone">
                </i>Sectors
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link delay={500} activeClass="active" to="testimonial" spy={true} smooth={true} offset={50} duration={500}    >
                <i 
                className="far fa-chart-bar">
                </i>Testimonial
              </Link>
            </li> */}
            <li className="nav-item">
              <Link delay={500} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}    >
                <i 
                className="far fa-copy">
                </i>Contact Us
              </Link>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;