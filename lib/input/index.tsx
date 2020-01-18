import React, { useState } from 'react';
import cs from 'classnames';
import './index.scss';

interface InputProps {
  size?: 'sm' | 'md' | 'lg',
  className?: string,
  type?: 'text' | 'password',
  placeholder?: string,
  disabled?: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onBlur?: React.ChangeEventHandler<HTMLInputElement>,
  value?: string
}

const sizeClassMap: { [index: string]: any } = {
  sm: 'ru-input-sm',
  lg: 'ru-input-lg'
};

const Input: React.FunctionComponent<InputProps> = (props) => {
  const { className, size, ...reset } = props;
  const sizeClass = size ? sizeClassMap[size] : null;
  return (
    <input className={cs('ru-input', className, sizeClass, reset.disabled ? 'ru-input-disabled' : false)} {...reset}/>
  );
};

Input.defaultProps = {
  size: 'md',
  type: 'text',
  placeholder: '请输入'
};

export default Input;