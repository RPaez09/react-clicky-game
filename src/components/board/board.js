import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Ashley',
        img: 'img/250x180/ashley.png',
        clicked: false
    },
    {
        name: 'Bernard',
        img: 'img/250x180/bernard.png',
        clicked: false
    },
    {
        name: 'Charlotte',
        img: 'img/250x180/charlotte.png',
        clicked: false
    },
    {
        name: 'Clementine',
        img: 'img/250x180/clementine.png',
        clicked: false
    },
    {
        name: 'Dolores',
        img: 'img/250x180/dolores.png',
        clicked: false
    },
    {
        name: 'Elsie',
        img: 'img/250x180/elsie.png',
        clicked: false
    },
    {
        name: 'Ford',
        img: 'img/250x180/ford.png',
        clicked: false
    },
    {
        name: 'Logan',
        img: 'img/250x180/logan.png',
        clicked: false
    },
    {
        name: 'Lutz',
        img: 'img/250x180/lutz.png',
        clicked: false
    },
    {
        name: 'Maeve',
        img: 'img/250x180/maeve.png',
        clicked: false
    },
    {
        name: 'MIB',
        img: 'img/250x180/mib.png',
        clicked: false
    },
    {
        name: 'Peter',
        img: 'img/250x180/peter.png',
        clicked: false
    },
    {
        name: 'Ted',
        img: 'img/250x180/ted.png',
        clicked: false
    },
    {
        name: 'Teresa',
        img: 'img/250x180/teresa.png',
        clicked: false
    },
    {
        name: 'William',
        img: 'img/250x180/william.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every character once. Once they are clicked they will shuffle.<br/>Try not to click the same character twice or you'll have to start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}