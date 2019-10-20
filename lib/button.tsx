import React from 'react';
import './button/button.scss';

export enum ButtonShapes {
    Square = 'square',
    Circle = 'circle'
}

export type ButtonTypes = ['primary', 'positive', 'negative', 'basic'][number];

export type ButtonSizes = ['large, default', 'small'][number];

interface ButtonProps {
    type?: ButtonTypes,
    shape?: ButtonShapes,
    size?: ButtonSizes,
    active?: boolean,
    loading?: boolean
    disabled?: boolean
}

interface ButtonState {
    loading?: boolean
}

class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div class="fisher-button">123</div>)
    }
}

export default Button
