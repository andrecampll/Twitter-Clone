import React from 'react';
import Tweet from '../Tweet/Index';

import './Index.css';

const Timeline = () => {
    return (
        <section className="timeline">
            <nav>
                <a href="/" className="active">Tweets</a>
                <a href="/">Tweets and replies</a>
                <a href="/">Media</a>
            </nav>

            <Tweet />
        </section>
    );
}

export default Timeline;