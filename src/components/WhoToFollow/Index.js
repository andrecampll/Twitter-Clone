import React from 'react';
import Jiraiya from '../../assets/images/jiraiya.png';
import tsunade from '../../assets/images/tsunade.png';
import deidara from '../../assets/images/deidara.png';
import './Index.css';

const WhoToFollow = () => {
    return (
        <div className="widget follow">
            <div className="title">
                <strong>Who to follow</strong>
                <a href="#">Refresh</a>
                <a href="#">View all</a>
            </div>

            <ul>
            <li>
                <div className="profile">
                <img src={Jiraiya} alt="Avatar"/>
                <div className="info">
                    <strong>Jiraiya <span>@jiraiya</span></strong>
                    <button>Follow</button>
                </div>
                </div>
                <a href="">x</a>
            </li>
            <li>
                <div className="profile">
                <img src={deidara} alt="Avatar"/>
                <div className="info">
                    <strong>Deidara <span>@deidara</span></strong>
                    <button>Follow</button>
                </div>
                </div>
                <a href="">x</a>
            </li>
            <li>
                <div className="profile">
                <img src={tsunade} alt="Avatar"/>
                <div className="info">
                    <strong>Tsunade Senju <span>@senjutsunade</span></strong>
                    <button>Follow</button>
                </div>
                </div>
                <a href="">x</a>
            </li>
            </ul>
        </div>
    );
}

export default WhoToFollow;