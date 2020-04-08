import React, { Fragment, useState } from 'react';
import cs from 'classnames';
import { Icon } from 'rummy-ui';
import { tuple } from '../_util/type'
import ReactDOM from 'react-dom';
import { useDidMount } from '../_util/hooks/index'
import Transition  from '../transition';

export const MessageType = tuple('info', 'success', 'error', 'warning')

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
    <Transition classNames="ru-slide-down" in={show}>
      <div className="ru-message">
        <Icon className={cs('ru-message-icon', `ru-message-icon_${type}`)} name={map[type!]}/>
        {children}
      </div>
    </Transition>
  )
  return result
}

Message.defaultProps = {
  type: 'info',
  duration: 1200
}

export default Message
