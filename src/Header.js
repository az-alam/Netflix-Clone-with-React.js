import React, {useState} from 'react';
import logo from './images/Netflix.jpeg';
import imoji from './images/emoji.jpeg';
import "./header.css";

function Header() {
    const [isDark, setisDark] = useState(false);

    window.onscroll=()=>{
        setisDark(window.scrollY>150 ? true : false);
    }
  return (
    <header className={isDark ? "dark" : ""}>
        <div className="left">
            <img src={logo} alt="Netflix" />
        </div>
        <div className="right">
            <img src={imoji} alt='Emoji' />
        </div>
    </header>
  )
}

export default Header
