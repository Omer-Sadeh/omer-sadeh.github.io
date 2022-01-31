import React, { Component } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import ResponsiveMenu from 'react-responsive-navbar';

class Header extends Component {
  render() {


   /* <Typical steps={['React', 1000, 'Java', 1000, 'HTML', 1000, 'CSS', 1000, 'JavaScript', 1000, 'Python', 1000, 'C', 1000]} loop={Infinity} wrapper="b" /> */




    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

      <ResponsiveMenu
        menuOpenButton={<a className="mobile-btn" title="Show navigation"><MdMenu /></a>}
        menuCloseButton={<a className="mobile-btn" title="Hide navigation"><MdMenuOpen /></a>}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
        }
      />

         
	      

         

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline"><b>I'mצצ {name}</b></h1>
            <h3>I'm a {city} based <span>{occupation}</span>. My skills includes:
            <br /></h3>
            <hr />
            <ul className="social">
               <li key="github"><a href="https://github.com/Omer-Sadeh" target="_blank" rel="noopener"><FaGithub /></a></li>
               <li key="linkedin"><a href="https://www.linkedin.com/in/omer-sadeh-237087191/" target="_blank" rel="noopener"><FaLinkedin /></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><BsFillArrowDownCircleFill /></a>
      </p>

   </header>
    );
  }
}

export default Header;
