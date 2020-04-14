import React from 'react';
import { SelectContext, SelectContextValue } from './select';
import { useDidMount } from '../_util/hooks';
import cs from 'classnames'

export interface SelectOptionProps {
  value: string | number,
  label: string
}

const SelectOption: React.FunctionComponent<SelectOptionProps> = (props) => {
  let { label, value } = props;
  let context = React.useContext<SelectContextValue>(SelectContext)

  useDidMount(() => {
    if (value === context.value) {
      context.setLabel(label || '')
    }
  })

  const onClick = () => {
    context.onChange(value, label)
  }

  return (
    <div onClick={onClick} className={cs('ru-select-option__item', {'ru-select-option__item-active': context.value === value})}>
      <div>{label}</div>
    </div>
  );
};

SelectOption.defaultProps = {
}

export default SelectOption;
