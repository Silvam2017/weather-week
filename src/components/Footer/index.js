import React from 'react';
import gitHubIcon from '../../assets/github.png';

function Footer ()  {

    return (
        <div id='footer-container'>
            <div id='footer-text'>
                Created by Michael Silva
            </div>
            <div id='img-container'>
                <a  
                    href='https://github.com/Silvam2017'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        id='gitIcon'
                        src={gitHubIcon}
                        alt="GitHub Icon"
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer;