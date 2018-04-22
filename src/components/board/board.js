import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: [
                {
                    name: 'Sample 1',
                    img: ''
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
            </div>
        )
    }

}