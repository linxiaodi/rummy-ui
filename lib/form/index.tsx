import * as React from 'react';
import cs from 'classnames';
import { useContext, useState } from 'react';
import './index.scss';

interface FormPropsModel {
  [propName: string]: any;
}

interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement[] | React.ReactElement,
  model: FormPropsModel,
  footer?:  React.ReactElement,
  rules: {
    [propName: string]: any;
  }
}

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

// interface ButtonState {
//   loading?: boolean
// }

// const defaultButtonProps: ButtonProps = {
//     type: 'default',
//     shape: '',
// }

export const FormContext = React.createContext<any>(null)

const Form = React.forwardRef<{}, FormProps>((props, ref) => {
  const { model, rules } = props;

  // const [fields, setFields] = useState([]);

  return <FormContext.Provider value={{ model, rules }}>
    <form className={cs(props.className, 'ru-form')}>
      {props.children}
      {props.footer}
    </form>
  </FormContext.Provider>;
}) as CompoundedComponent;

const FormItem: React.FunctionComponent<FormItemProps> = (props) => {
  const { prop } = props;
  const { model, rules } = useContext(FormContext)
  // 如果props没有包含value 则视为自动绑定
  // const isAutoBind = 'value' in children.props;
  // let ele;
  // if (isAutoBind) {
  //   const [value, setValue] = useState((prop && model[prop]) || '')
  //   ele = React.cloneElement(children, {
  //     value,
  //     onChange: (e: any) => {
  //       if (e instanceof window.Event) {
  //         // @ts-ignore
  //         setValue(e.target.value)
  //       } else {
  //         setValue(e)
  //       }
  //     }
  //   })
  // } else {
  //   ele = children
  // }
  console.log(prop && rules[prop] && rules[prop].require);
  return <div className="ru-form-item">
    <label className={cs('ru-form-item__label', { 'ru-form-item__label-require': prop && rules[prop] && rules[prop].require })}>{props.label}</label>
    {Array.isArray(props.children) ? props.children : React.createElement(props.children.type, {})}
  </div>
}

Form.Item = FormItem

export default Form;

