import React, { HTMLAttributes, useState } from 'react';
import cs from 'classnames';
import './index.scss';
import { type } from 'os';

interface InputProps extends HTMLAttributes<HTMLInputElement>{
  size?: 'sm' | 'md' | 'lg',
  className?: string,
  placeholder?: string,
  type?: string,
  disabled?: boolean,
  onChange?: (value: any) => any,
  onBlur?: React.ChangeEventHandler<HTMLInputElement>,
  value?: string
}

const sizeClassMap: { [index: string]: string } = {
  sm: 'ru-input-sm',
  lg: 'ru-input-lg'
};

const Input: React.FunctionComponent<InputProps> = (props) => {
  const { className, size, onChange: propChange, ...rest } = props;

  const sizeClass = size ? sizeClassMap[size] : null;

  const onChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    (typeof propChange === 'function') && propChange(e.target.value);
  }

  return (
    <input
      className={cs('ru-input', className, sizeClass, rest.disabled ? 'ru-input-disabled' : false)}
      {
        ...{
          ...rest,
          onChange,
        }
      }
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