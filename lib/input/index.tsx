import React, { useState } from 'react';
import cs from 'classnames';
import './index.scss';

interface InputProps {
  size?: 'small' | 'middle' | 'large',
  className?: string,
  type?: 'text' | 'password',
  placeholder?: string,
  disabled?: boolean
}

const sizeClassMap: { [index: string]: any } = {
  small: 'ru-input-sm',
  large: 'ru-input-lg'
};

const Input: React.FunctionComponent<InputProps> = (props) => {
  const { className, size, ...reset } = props;
  const sizeClass = size ? sizeClassMap[size] : null;
  return (
    <input className={cs('ru-input', className, sizeClass, reset.disabled ? 'ru-input-disabled' : false)} {...reset}/>
  );
};

Input.defaultProps = {
  size: 'middle',
  type: 'text',
  placeholder: '请输入'
};

export default Input;