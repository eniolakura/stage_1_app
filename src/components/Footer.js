import React from "react";
import img from '../images/zuriLogo.png'
import Ig4 from '../images/Ig4.png';

function Footer() {
    return(
        <footer id='logos'>
        <img src={ img } />
        <p> HNG Internship 9 Frontend Task</p>
        <img src={ Ig4 } />
      </footer>
    )
}

export default Footer