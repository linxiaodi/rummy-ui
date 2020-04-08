import React from 'react';
import Message, { MessageType } from './message';
import './index.scss';
import ReactDOM from 'react-dom';


interface Option {
  duration?: number
}

interface MessageExposure {
  [typeName: string]: (content: React.ReactNode, option?: Option) => void
  Message: React.FunctionComponent
}

const message: MessageExposure = {
  Message
}

MessageType.map((type) => {
  message[type] = (content: React.ReactNode, option = {}) => {
    const comp = <Message {...option!} type={type}>{ content }</Message>;
    const wrapper = document.createElement('div')
    /**
     Warning: render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.
     */
    ReactDOM.render(comp, wrapper);
    document.body.appendChild(wrapper)
  };
});

export default message;
