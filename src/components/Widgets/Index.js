import React from 'react';
import WhoToFollow from '../WhoToFollow/Index';
import './Index.css';


const Widgets = () => {
    return (
        <aside className="widgets">
        
            <WhoToFollow />

            <div className="widget trends">

            </div>
        </aside>
    );
}

export default Widgets;