import React from 'react';
import './Index.css';
import Home from '../../assets/images/home.svg';
import notification from '../../assets/images/notification.svg';
import message from '../../assets/images/message.svg';
import logo from '../../assets/images/logo.svg'
import avatar from '../../assets/images/avatarfull.jpg';


const Header = () => {
  return (
    <header id="main-header">
      <div className= "content">
        <nav>
          <ul>
            <li><img src={Home} alt="Home" id="home"/>Home</li>
            <li><img src={notification} alt="Notifications" id="notifications"/>Notifications</li>
            <li><img src={message} alt="Messages" id="messages"/>Messages</li>
          </ul>
        </nav>    
          <img src={logo} alt="Logo Twitter"/>
          <div className="avatar-side">
            <input type="text" name="" id="" placeholder="Search on Twitter"/>
            <img src={avatar} alt="avatar"/>
            <button>Tweet</button>
          </div>
      </div>
    </header>
  );
}

export default Header;