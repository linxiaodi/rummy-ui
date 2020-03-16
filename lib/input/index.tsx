import React, { HTMLAttributes, useState } from 'react';
import cs from 'classnames';
import './index.scss';

interface InputProps extends HTMLAttributes<HTMLInputElement>{
  size?: 'sm' | 'md' | 'lg',
  className?: string,
  placeholder?: string,
  type?: string,
  disabled?: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onBlur?: React.ChangeEventHandler<HTMLInputElement>,
  value?: string
}

const sizeClassMap: { [index: string]: string } = {
  sm: 'ru-input-sm',
  lg: 'ru-input-lg'
};

const Input: React.FunctionComponent<InputProps> = (props) => {
  const { className, size, ...rest } = props;

  const sizeClass = size ? sizeClassMap[size] : null;
  return (
    <input
      className={cs('ru-input', className, sizeClass, rest.disabled ? 'ru-input-disabled' : false)}
      {...rest}
    />
  );
};

Input.defaultProps = {
  size: 'md',
  type: 'text',
  placeholder: '请输入',
  disabled: false
};

export default Input;