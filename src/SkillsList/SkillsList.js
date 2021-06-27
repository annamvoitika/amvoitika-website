import React from 'react';

export const SkillsList = () => {
    return (
        <div className="centered_section">
            <h1 className="about_me white">Tech Stack</h1>
            <div className="row">
                <div className="column left">
                <ul className="qual">
                <li className="skills_list">
                JavaScript
                </li>
                <li className="skills_list">
                React
                </li>
                <li className="skills_list">
                HTML
                </li>
                <li className="skills_list">
                CSS
                </li>
                <li className="skills_list">
                Node.JS
                </li>
                </ul>
                </div>
                <div className="column right">
                <ul className="qual">
                <li className="skills_list">
                MongoDB
                </li>
                <li className="skills_list">
                AWS
                </li>
                <li className="skills_list">
                Jest
                </li>
                <li className="skills_list">
                Figma
                </li>
                <li className="skills_list">
                Photoshop
                </li>
                </ul>
                </div>
            </div>
        </div>
    )
}