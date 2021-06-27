import React from 'react';
import anna from './anna.png';

export const AboutMeText = () => {
    return (
        <div className="centered_section">
            <h1 className="about_me">I'm Anna, a software development engineer</h1>
            <img src={anna} width="200" height="200" />
        </div>
    )
}