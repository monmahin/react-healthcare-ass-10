import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    const facebook=<FontAwesomeIcon icon={faFacebookF} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const github = <FontAwesomeIcon icon={faGithub} />
    const copyRight = <FontAwesomeIcon icon={faCopyright} />
    
    
    return (
        <div className="bg-dark  text-white mt-2 sticky-bottom">
            <h1>Follow Us</h1>
            <div className="d-flex justify-content-evenly fs-1 my-2">
            <small>{facebook}</small>
            <small>{linkedin}</small>
            <small>{twitter}</small>
            <small>{instagram}</small>
            <small>{github}</small>
            </div>
            <small className="text-primary">{copyRight}
                < span className="text-uppercase"> All rights reserved</span></small>
        </div>
    );
};

export default Footer;