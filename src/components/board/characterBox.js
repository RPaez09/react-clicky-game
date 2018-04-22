import React from 'react';

import Character from './character';

const CharacterBox = (props) => {
    return(
        <div className="CharacterBox">
            {props.characters.map( (character) => <Character character={character} />)}
        </div>
    )
};

export default CharacterBox;