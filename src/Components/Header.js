import React, { Component } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import ResponsiveMenu from 'react-responsive-navbar';
import Typing from 'react-typing-animation';

class Header extends Component {
  render() {


   /* <Typical steps={['React', 1000, 'Java', 1000, 'HTML', 1000, 'CSS', 1000, 'JavaScript', 1000, 'Python', 1000, 'C', 1000]} loop={Infinity} wrapper="b" /> */




    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
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
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
        }
      />

         
	      

         

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline"><b>I'm {name}</b></h1>
            <h3>I'm a {city} based <span>{occupation}</span>
            <br />
            My skills includes: 
            <Typing loop={true}>
               <span><b>  </b></span>
               <Typing.Backspace count={4} delay={100} />
               <span><b>Java</b></span>
               <Typing.Backspace count={7} delay={700} />
               <span><b>React</b></span>
               <Typing.Backspace count={8} delay={700} />
               <span><b>HTML</b></span>
               <Typing.Backspace count={6} delay={700} />
               <span><b>CSS</b></span>
               <Typing.Backspace count={6} delay={700} />
               <span><b>JavaScript</b></span>
               <Typing.Backspace count={13} delay={700} />
               <span><b>Python</b></span>
               <Typing.Backspace count={9} delay={700} />
               <span><b>SQL</b></span>
               <Typing.Backspace count={6} delay={700} />
               <span><b>Kafka</b></span>
               <Typing.Backspace count={8} delay={700} />
            </Typing>
            </h3>
            <hr />
            <ul className="social">
               <li key="github"><a href="https://github.com/Omer-Sadeh" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
               <li key="linkedin"><a href="https://www.linkedin.com/in/omer-sadeh-237087191/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
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
