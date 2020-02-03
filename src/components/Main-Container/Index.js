import React from 'react';
import './Index.css';

const MainContainer = () => (
  <div className="main-container">
      <div className="row profile-background">
        <div className="container">
          <div className="avatar-container">
            <div className="avatar">

            </div>
          </div>
        </div>
      </div>
    <nav className="navbar profile-stats">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <ul>
              <li className="profile-stats-item-active">
                <a>
                  <span className="profile-stats-item profile-stats-item-label">Tweets</span>
                  <span className="profile-stats-item profile-stats-item-number">51</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="profile-stats-item profile-stats-item-label">Following</span>
                  <span className="profile-stats-item profile-stats-item-number">250</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="profile-stats-item profile-stats-item-label">Followers</span>
                  <span className="profile-stats-item profile-stats-item-number">496</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="profile-stats-item profile-stats-item-label">Likes</span>
                  <span className="profile-stats-item profile-stats-item-number">547</span>
                </a>
              </li>
            </ul>  
          </div>
        </div>
      </div>
    </nav>
    <div className="container main-content"></div>
  </div>
);

export default MainContainer;
