import React from 'react';
import './Index.css';

import more from '../../assets/images/more.svg';

const Bar = () => {
    return (
        <div className="bar">
            <div className="content">
                    <ul>
                        <li className="active">
                        <span>Tweets</span>
                        <strong>3983</strong>
                        </li>
                        <li>
                        <span>Followers</span>
                        <strong>1232</strong>
                        </li>
                        <li>
                        <span>Following</span>
                        <strong>98</strong>
                        </li>
                        <li>
                        <span>Favorites</span>
                        <strong>393</strong>
                        </li>
                    </ul> 
                    <div className="actions">
                        <button>Follow</button>
                        <img src={more} alt=""/>
                    </div>
            </div>
        </div>
    );
}

export default Bar;