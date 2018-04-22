import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: [
                {
                    name: 'Ashley',
                    img: 'img/250x180/ashley.png'
                },
                {
                    name: 'Bernard',
                    img: 'img/250x180/bernard.png'
                },
                {
                    name: 'Charlotte',
                    img: 'img/250x180/charlotte.png'
                },
                {
                    name: 'Clementine',
                    img: 'img/250x180/clementine.png'
                },
                {
                    name: 'Dolores',
                    img: 'img/250x180/dolores.png'
                },
                {
                    name: 'Elsie',
                    img: 'img/250x180/elsie.png'
                },
                {
                    name: 'Ford',
                    img: 'img/250x180/ford.png'
                },
                {
                    name: 'Logan',
                    img: 'img/250x180/logan.png'
                },
                {
                    name: 'Lutz',
                    img: 'img/250x180/lutz.png'
                },
                {
                    name: 'Maeve',
                    img: 'img/250x180/maeve.png'
                },
                {
                    name: 'MIB',
                    img: 'img/250x180/mib.png'
                },
                {
                    name: 'Peter',
                    img: 'img/250x180/peter.png'
                },
                {
                    name: 'Ted',
                    img: 'img/250x180/ted.png'
                },
                {
                    name: 'Teresa',
                    img: 'img/250x180/teresa.png'
                },
                {
                    name: 'William',
                    img: 'img/250x180/william.png'
                }
            ]
        };
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
                <CharacterBox characters={this.state.characters} />
            </div>
        )
    }

}