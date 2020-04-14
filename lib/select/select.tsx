import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import { Transition } from 'rummy-ui';
import SelectOption from './option';
import { CompoundReactFunction } from '../_util/type';
import cs from 'classnames';
import './index.scss';
import { useDidMount, useWillUnmount } from '../_util/hooks';
import memoize from '../_util/memoize-one'


export interface SelectProps {
  value?: string | number,
  defaultValue?: string | number,
  children?: React.ReactNode,
  className?: string,
  onChange?: Change
}

export type SelectCompound = CompoundReactFunction<SelectProps, {
  Option: typeof SelectOption
}>

// 当
type Change = (value: string | number, label: string) => any

export interface SelectContextValue {
  // select选中的值
  value: string | number,
  // 设置label
  setLabel: (v: string) => any,
  // 当事件点击之后
  onChange: Change
}

export const SelectContext = React.createContext<SelectContextValue>({} as SelectContextValue)

// 事件捕获的方式去做selectOptions的显示隐藏。不过看起来很麻烦，更好的方法是用Input的blur事件
// 不过还是有问题，假设多选select，如果你选择完option还想继续选，则不应该隐藏整个dropdown，用input事件明显是无法做到的
// const bindEvent = (() => {
//   let queue: Array<() => any> = []
//   // 主动关闭select下面的visible
//   const resetAllSelector = () => {
//     for (let func of queue) {
//       func()
//     }
//   }
//   window.addEventListener('click', resetAllSelector, true)
//   return (func: () => any) => {
//     queue.push(func)
//     return {
//       remove: () => {
//         let index = queue.findIndex(n => n === func)
//         index > -1 ? queue.splice(index, 1) : null
//       },
//       resetAllSelector
//     }
//   }
// })()

const Select: SelectCompound = (props) => {
  const [value, setValue] = useState(props.defaultValue || '')
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // const onClickOutside = useCallback(() => {
  //   setVisible(false);
  // }, [])

  // let removeEvent = useRef(bindEvent(onClickOutside))
  //
  // useWillUnmount(() => {
  //   removeEvent.current.remove()
  // })

  const onClick:React.MouseEventHandler = (e) => {
    e.stopPropagation();
    // removeEvent.current.resetAllSelector()
    setVisible(!visible)
  }

  const onClickDropdown:React.MouseEventHandler = (e) => {
    e.stopPropagation();
    setVisible(false)
  }

  const onFocus = () => {
    inputRef.current!.focus()
    setVisible(true)
  }

  const onBlur = () => {
    setVisible(false)
  }

  const onChange:Change = memoize((value, label) => {
    setValue(value)
    setLabel(label)
    props.onChange && props.onChange(value, label)
  })

  return (
    <SelectContext.Provider value={{ value, setLabel, onChange }}>
      <div className={cs('ru-select',props.className)}>
        <div onClick={onFocus} className={cs('ru-select__inner', { 'ru-select__inner-active': visible })}>
          <input
            className="ru-select__input"
            type="text"
            readOnly
            value={label || value}
            ref={inputRef}
            autoComplete="off"
            onBlur={onBlur}
          />
        </div>
        { props.children &&
          <Transition in={visible} classNames="ru-zoom-in-top">
            <div onClick={onClickDropdown} className="ru-select-dropdown">
              { props.children }
            </div>
          </Transition>
        }
      </div>
    </SelectContext.Provider>
  );
};

Select.Option = SelectOption;

export default Select;
