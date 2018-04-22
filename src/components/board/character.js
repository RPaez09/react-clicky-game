import React, { Component } from 'react';

export default class Character extends Component {

    render(props){ return(
        <div className="character">
            <img src={this.props.character.img} alt="character" className="profile-pic"/>
        </div>
    )
    }
}