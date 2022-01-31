import React, { Component } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row">
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><BsFillArrowUpCircleFill /></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
