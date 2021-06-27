import React from 'react';

export const SocialMedia = () => {
    return (
        <div className="centered_section">
        <nav>
            <ul className="social_media">
                <li>
                    <button className='nav_button' onClick={e => window.open('https://anna-voitika.medium.com/', '_blank')}>Blog</button>
                </li>
                <li>
                    <button className='nav_button' onClick={e => window.open('https://www.linkedin.com/in/anna-maria-voitika/', '_blank')}>LinkedIn</button>
                </li>
                <li>
                    <button className='nav_button' onClick={e => window.open('mailto:anna.voitik@gmail.com', '_blank')}>Email</button>
                </li>
            </ul>
        </nav>
        </div>
    )
}