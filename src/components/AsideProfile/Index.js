import React from 'react';
import avatar from '../../assets/images/avatarfull.jpg';
import place from '../../assets/images/place.svg';
import url from '../../assets/images/url.svg';
import joined from '../../assets/images/joined.svg';
import born from '../../assets/images/born.svg';

import './Index.css';
import WidgetFollowers from '../WidgetFollowers/Index';

const AsideProfile = () => {
    return (
        <aside className="profile">
            <img src={avatar} className="avatar" alt="Naruto Uzumaki"/>
            <h1>Naruto Uzumaki</h1>
            <span>@uzumakinaruto</span>
            <p>Seventh hokage, dattebayo.</p>

            <ul className="list">
                <li><img src={place} alt="Place"/>Hidden Leaf Village</li>
                <li><img src={url} alt="URL"/>naruto.be</li>
                <li><img src={joined} alt="Joined"/>Joined June 2007</li>
                <li><img src={born} alt="Born"/>Born the 10th of October 1999</li>
            </ul>

            <WidgetFollowers />
        </aside>
    );
}

export default AsideProfile;