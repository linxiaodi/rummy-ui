// import { hot } from 'react-hot-loader/root'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import Hello from './App'
// import './icons/index.css'
//
// const App = process.env.NODE_ENV === 'development' ? hot(Hello) : Hello
//
// ReactDOM.render(<App/>, document.querySelector('#app'))
import './style/common.scss';
import './style/animation.scss';

export { default as Icon } from './icons';
export { default as Dialog, modal, alert, confirm } from './dialog';
export { default as Button } from './button';
export { default as Layout } from './layout/index';
export { default as Input } from './input/index';
export { default as Form } from './form/index';
export { default as message } from './message/index'
export { default as Message } from './message/message'
