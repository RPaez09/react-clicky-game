import React from 'react';

import FadeIn from '../transitions/fade-in';

const Footer = () => {
    return (
        <footer className="Footer">
            <FadeIn 
                delay={'1s'}
                direction={'top'}
                length={'20px'}
                duration={500}>
                <h3>Richard Paez | 2018 | Richardp809@gmail.com</h3>
            </FadeIn>
        </footer>
    )
};

export default Footer;