import React from "react";
import { Link } from "react-router-dom";
import profile from '../images/profile__img.png';
import slack from '../images/slack.png';
import github from '../images/github.png';
import share from '../images/share_button.png'; 


function Stage1() {
    return (
      <div>
      <header id='head'>
        {/* <p class='slack_username'>Eniola Kuranga</p> */}
        <img id='profile__img' src={ profile } alt='profile-pic' />
        <h2>Eniola Kuranga</h2>
        <img src={ share } alt='share-button'/>
      </header>
      <div className='buttons'>
        <a href='https://twitter.com/bat_syyyy'>
          Twitter link
        </a>
        <a id='btn__zuri' href='https://training.zuri.team/' alt='zuri team'>
             Zuri Team
        </a>
        <a id='books' href='http://books.zuri.team/' alt='zuri books'>
            Zuri Books
        </a>
        <a id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=EniolaKuranga' alt='python books'>
            Python Books
        </a>
        <a id='pitch' href='https://background.zuri.team' alt='background'>
            Background Check for coders
        </a>
        <a id='book_design' href="https://books.zuri.team/design-rules" alt='design'>
            Design Books
        </a>
        <button id="contact">
            <Link to='/contact'>Contact Me</Link>
        </button>
        <div id='social-icons'>
          <img src={ slack } id='slack' onClick={""} alt='slack'/>
          <img src={ github } alt='github'/>
        </div>
      </div>
    </div>
    );
  }
  
  export default Stage1;
  