import React from 'react';
import FadeInDown from '../transitions/fade-in-down';

const Header = () => { return(
    <header className="App-header">
        <FadeInDown in={true} duration={600} length={'30px'}>
            <h2>Delos Corp welcomes you to</h2>
        </FadeInDown>
        <FadeInDown in={true} duration={600} length={'50px'}>
            <h1>Westworld Clicky Game</h1>
        </FadeInDown>
    </header>
)};

export default Header;