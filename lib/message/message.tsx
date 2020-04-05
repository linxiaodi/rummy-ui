import React, { Fragment, useState } from 'react';
import cs from 'classnames';
import { Icon } from 'rummy-ui';
import { tuple } from '../_util/type'
import ReactDOM from 'react-dom';
import { useDidMount } from '../_util/hooks/index'
import { CSSTransition } from 'react-transition-group';

const MessageType = tuple('info', 'success', 'error', 'warning')

type MessageType = (typeof MessageType)[number]

interface MessageProps {
  children?: React.ReactNode | string
  type?: MessageType,
  duration?: number
}

let map = {
  info: 'information',
  success: 'circle-check',
  error: 'circle-close',
  warning: 'warning'
}

const Message: React.FunctionComponent<MessageProps> = (props) => {
  let { type, children, duration } = props;
  let [show, setShow] = useState(true)

  useDidMount(() => {
    setTimeout(() => {
      setShow(false);
    }, duration)
  })

  const result = (
    <CSSTransition timeout={400} in={show} classNames="my-node">
      <div className="ru-message">
        <Icon className={cs('ru-message-icon', `ru-message-icon_${type}`)} name={map[type!]}/>
        {children}
      </div>
    </CSSTransition>
  )
  return ReactDOM.createPortal(result, document.body)
}

Message.defaultProps = {
  type: 'info',
  duration: 1000
}

export default Message
