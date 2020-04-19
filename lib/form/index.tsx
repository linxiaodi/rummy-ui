import * as React from 'react';
import cs from 'classnames';
import { useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import './index.scss';
import { pureObject } from '../_util/type'
import { deepClone } from '../_util/helpers'
import Validator from '../_util/validator/index'
import Transition from '../transition/index'

interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement[] | React.ReactElement,
  initialValue?: pureObject,
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
  resetFields: () => void,
  validateFields: (cb?: Callback) => any
}

interface Callback {
  (error?: string, model?: pureObject): void
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
  const [errors, setErrors] = useState({})
  const validator = useRef<Validator>(new Validator(rules))
  let [model, setModel] = useState(JSON.parse(JSON.stringify(initialValue)))

  useImperativeHandle(ref, () => {
    return {
      model,
      resetFields: () => {
        setModel(deepClone(props.initialValue))
        setErrors({})
      },
      validateFields: (cb?: Callback) => {
        return validator.current.start(model).then(() => {
          cb && cb(undefined, model)
          setErrors({})
          return model;
        }).catch((err) => {
          setErrors(err)
          const oldestMsg = Object.values(err)[0] as string;
          cb && cb(oldestMsg, model)
          return Promise.reject(oldestMsg)
        })
      }
    }
  })

  return <FormContext.Provider value={{ model, rules, errors, setModel }}>
    <div className={cs(props.className, 'ru-form')}>
      {props.children}
    </div>
  </FormContext.Provider>;
}) as CompoundedComponent;

Form.defaultProps = {
  rules: {},
  initialValue: {}
}

const FormItem: React.FunctionComponent<FormItemProps> = (props) => {
  const [error, setError] = useState('')
  const { prop = '', children } = props;
  const { rules, model, setModel, errors } = useContext(FormContext);
  let value = model[prop] || '';
  let setValue = (v: any) => {
    if (prop !== undefined && prop !== null) {;
      setModel({ ...model, [prop]: v })
    }
  }

  useEffect(() => {
    setError(errors[prop] || '')
  }, [errors])

  // 是否有require标识符
  const hasRequireFix = () => {
    let flag
    const rule = prop && rules[prop];
    if (!rule) return false
    if (Array.isArray(rule)) {
      flag = rule.find(n => n.require)
    } else {
      flag = rule.require
    }
    return flag
  }

  return <div className="ru-form-item">
    <label className={cs('ru-form-item__label', { 'ru-form-item__label-require': hasRequireFix() })}>{props.label}</label>
    <div className="ru-form-item__content">
      {Array.isArray(children) || !prop ? children : React.createElement(children.type, {
        ...children.props,
        value,
        onChange: (v: any) => setValue(v)
      })}
      {
        <Transition in={!!error} classNames="ru-zoom-in-top">
          <div className="ru-form-item__error">{error}</div>
        </Transition>
      }
    </div>
  </div>
}

Form.Item = FormItem

export default Form;

