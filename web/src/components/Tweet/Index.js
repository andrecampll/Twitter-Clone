import React from 'react';
import Kakashi from '../../assets/images/kakashi.jpg';
import comments from '../../assets/images/comments.svg';
import retweet from '../../assets/images/retweet.svg';
import like from '../../assets/images/like.svg';

import './Index.css';

const Tweet = () => {
    return (
        <ul className="tweets">
            <li>
                <img src={Kakashi} alt="Avatar"/>
                <div className="info">
                    <strong>Kakashi Hatake <span>@hakatekakashi</span></strong>
                    <p>Você não entedeu, você acha que entendeu, isso quer dizer que você não entendeu, entendeu?</p>
                    <div className="actions">
                        <a href="/"><img src={comments} alt="Comments"/>3</a>
                        <a href="/"><img src={retweet} alt="Retweet"/>4</a>
                        <a href="/"><img src={like} alt="Like"/>10</a>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default  Tweet;