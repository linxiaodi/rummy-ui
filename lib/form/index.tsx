import * as React from 'react';
import cs from 'classnames';
import { useContext, useImperativeHandle, useState } from 'react';
import './index.scss';
import { pureObject } from '../_util/type'
import { deepClone } from '../_util/helpers'

interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement[] | React.ReactElement,
  initialValue?: pureObject,
  footer?:  React.ReactElement,
  rules: {
    [propName: string]: any;
  },
  ref: React.Ref<null>
}

/**
 * 如果没有prop 则视为普通仅仅是为了装饰用的
 * */
interface FormItemProps {
  prop?: string,
  label?: string,
  children: React.ReactElement | React.ReactElement[]
}

interface FormItem extends React.FunctionComponent<FormItemProps> {
}

// 由于forwardRef不支持静态属性
interface CompoundedComponent extends React.ForwardRefExoticComponent<FormProps> {
  Item: FormItem
}

export interface FormRef {
  model: pureObject,
  resetModel: () => void
}

// interface ButtonState {
//   loading?: boolean
// }

// const defaultButtonProps: ButtonProps = {
//     type: 'default',
//     shape: '',
// }

export const FormContext = React.createContext<pureObject>({})

const Form = React.forwardRef<FormRef, FormProps>((props, ref) => {
  const { initialValue, rules } = props;
  let [model, setModel] = useState(deepClone(props.initialValue))

  useImperativeHandle(ref, () => {
    return {
      model,
      resetModel: () => setModel(deepClone(props.initialValue))
    }
  })

  return <FormContext.Provider value={{ model, rules, setModel }}>
    <form className={cs(props.className, 'ru-form')}>
      {props.children}
      {props.footer}
    </form>
  </FormContext.Provider>;
}) as CompoundedComponent;

const FormItem: React.FunctionComponent<FormItemProps> = (props) => {
  const { prop = '', children } = props;
  const { rules, model, setModel } = useContext(FormContext);
  let value = model[prop] || '';
  let setValue = (v: any) => {
    console.log(prop, model[prop]);
    if (prop !== undefined && prop !== null) {;
      setModel({ ...model, [prop]: v })
    }
  }

  return <div className="ru-form-item">
    <label className={cs('ru-form-item__label', { 'ru-form-item__label-require': prop && rules[prop] && rules[prop].require })}>{props.label}</label>
    {Array.isArray(children) || !prop ? children : React.createElement(children.type, {
      ...children.props,
      value,
      onChange: (v: any) => setValue(v)
    })}
  </div>
}

Form.Item = FormItem

export default Form;

