import * as React from 'react';
import { tuple } from '../_util/type';
import cs from 'classnames';
import './index.scss';

export enum ButtonShapes {
  Square = 'square',
  Circle = 'circle'
}

const ButtonTypes = tuple('primary', 'success', 'warning', 'error', 'default');
const ButtonSizes = tuple('large, default', 'small');

export type ButtonTypes = (typeof ButtonTypes)[number];

export type ButtonSizes = (typeof ButtonSizes)[number];

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ButtonTypes,
  shape?: ButtonShapes,
  size?: ButtonSizes,
  active?: boolean,
  loading?: boolean
  disabled?: boolean,
  children?: string | React.ReactNode
}

// interface ButtonState {
//   loading?: boolean
// }

// const defaultButtonProps: ButtonProps = {
//     type: 'default',
//     shape: '',
// }

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const btnClass = cs('fisher-button', props.type && props.type === 'default' ? false : `fisher-button_${props.type}`);
  return (
    <button className={btnClass}>{props.children}</button>
  );
};

export default Button;
