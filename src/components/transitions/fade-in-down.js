import React, { Component } from 'react';

import { Transition } from 'react-transition-group';

export default class FadeInDown extends Component {

    defaultStyle = {
        transition: `all ${this.props.duration}ms ease-in-out`,
        opacity: 0,
        position: 'relative'
    };

    transitionStyles = {
        entering: {
            opacity: 0,
            bottom: this.props.length || '50px'
        },
        entered: {
            opacity: 1,
            bottom: '0'
        }
    };

    render(){
        return (
            <Transition in={this.props.in} timeout={this.props.duration} appear={true}>
                {(state) => (
                    <div style={{...this.defaultStyle,...this.transitionStyles[state] }}>
                    {this.props.children}
                    </div>
                )}
            </Transition>
        )
    }
};