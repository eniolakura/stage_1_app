import React from "react";
import img from '../images/zuriLogo.png'
import Ig4 from '../images/I4G.png';

function Footer() {
    return(
        <footer id='logos'>
        <img src={ img } alt='img' />
        <p> HNG Internship 9 Frontend Task</p>
        <img src={ Ig4 } alt='ig4-logo'/>
      </footer>
    )
}

export default Footer