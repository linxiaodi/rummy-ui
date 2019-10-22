import React from 'react';
import { tuple } from './_util/type'
import './button/button.scss';

export enum ButtonShapes {
    Square = 'square',
    Circle = 'circle'
}

const ButtonTypes = tuple('primary', 'positive', 'negative', 'default')
const ButtonSizes = tuple('large, default', 'small')

export type ButtonTypes = (typeof ButtonTypes)[number];

export type ButtonSizes = (typeof ButtonSizes)[number];

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

const defaultButtonProps: ButtonProps = {
    type: 'default',
    shape: '',
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
