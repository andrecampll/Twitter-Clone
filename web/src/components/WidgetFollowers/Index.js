import React from 'react';
import followers from '../../assets/images/followers.svg';
import sasuke from '../../assets/images/sasuke.jpeg';
import sakura from '../../assets/images/sakura.jpg';
import kakashi from '../../assets/images/kakashi.jpg';
import minato from '../../assets/images/minato.jpg';
import hinata from '../../assets/images/hinata.jpeg';
import gaara from '../../assets/images/gaara.png';
import itachi from '../../assets/images/itachi.png';
import tenten from '../../assets/images/tenten.jpeg';
import ino from '../../assets/images/ino.jpg';
import kushina from '../../assets/images/kushina.jpg';

import './Index.css';

const WidgetFollowers = () => {
    return (
        <div className="widget followers">
            <strong><img src={followers} alt="Followers"/>73 followers that you know</strong>
      
            <ul>
                <li><img src={sasuke} alt=""/></li>
                <li><img src={sakura} alt=""/></li>
                <li><img src={kakashi} alt=""/></li>
                <li><img src={minato} alt=""/></li>
                <li><img src={hinata} alt=""/></li>
                <li><img src={gaara} alt=""/></li>
                <li><img src={itachi} alt=""/></li>
                <li><img src={tenten} alt=""/></li>
                <li><img src={ino} alt=""/></li>
                <li><img src={kushina} alt=""/></li>
            </ul>
      </div>
    );
}

export default WidgetFollowers;