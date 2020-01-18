import * as React from 'react';
import cs from 'classnames';
import './index.scss';


interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
}

// interface ButtonState {
//   loading?: boolean
// }

// const defaultButtonProps: ButtonProps = {
//     type: 'default',
//     shape: '',
// }

const Form: React.FunctionComponent<FormProps> = (props) => {
  return (<div className="ru-form"/>);
};

export default Form;
