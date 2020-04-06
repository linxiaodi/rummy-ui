import React, { useEffect, useState } from 'react';
import { useDidMount } from 'rummy-ui/_util/hooks';
import cs from 'classnames'

// 自定义classNames状态
interface TransitionClassNames {
  enter: string,
  enterActive: string,
  enterDone: string,
  exit: string,
  exitActive: string,
  exitDone: string
}

interface TransitionProps {
  children: React.ReactElement,
  in: boolean,
  classNames: string | TransitionClassNames,
  onEnter?: () => any
  onEntered?: () => any
  onExit?: () => any
  onExited?: () => any
}

const getTransitionClass = (name: string): TransitionClassNames => ({
  enter: `${name}-enter`,
  enterActive: `${name}-enter-active`,
  enterDone: `${name}-enter-done`,
  exit: `${name}-exit`,
  exitActive: `${name}-exit-active`,
  exitDone: `${name}-exit-done`,
})

const Transition: React.FunctionComponent<TransitionProps> = (props) => {
  let ref = React.useRef<HTMLBaseElement>(null);
  let classNames = React.useRef<TransitionClassNames>(typeof props.classNames === 'string'
    ? getTransitionClass(props.classNames)
    : props.classNames);
  // 不要直接去隐藏元素
  let [show, setShow] = useState(props.in)
  let [isMount, setIsMount] = useState(false)

  let { children } = props

  useDidMount(() => {
    setIsMount(true)
  })

  useEffect(() => {
    // isMount 过滤掉第一次 props.in初始化第一次触发的动作
    // 否则会导致 奇怪的类名和end 事件的不触发
    if (isMount) {
      if (props.in) {
        onVisible()
        setShow(true)
      } else {
        onHide()
      }
    }
  }, [props.in])

  // on element visible
  // 第一帧 添加enter enterActive
  // 第二帧 删除enter 添加enterDone
  // 结束之后：移除enterActive 移除enterDone
  const onVisible = () => {
    const childDOM = ref.current as HTMLBaseElement

    childDOM.addEventListener('transitionend', didEnter)
    childDOM.addEventListener('animationend', didEnter)

    let { enter, enterActive, enterDone, exitActive, exitDone } = classNames.current

    // 疑问：为什么要多加一帧？
    requestAnimationFrame(() => {
      childDOM.classList.add(enter, enterActive)
      props.onEnter && props.onEnter()
      // next tick
      requestAnimationFrame(() => {
        childDOM.classList.remove(enter)
        childDOM.classList.add(enterDone)
      })
    })
  }

  // on element animation hide
  const onHide = () => {
    const childDOM = ref.current as HTMLBaseElement
    
    childDOM.addEventListener('transitionend', didExit)
    childDOM.addEventListener('animationend', didExit)

    let { exit, exitActive, exitDone, enter, enterActive, enterDone } = classNames.current
    enterDone && childDOM.classList.remove(enterDone)

    props.onExit && props.onExit()

    requestAnimationFrame(() => {
      childDOM.classList.add(exit, exitActive)
    })

    // next tick
    requestAnimationFrame(() => {
      childDOM.classList.remove(exit)
      exitDone && childDOM.classList.add(exitDone)
    })
  }

  // 动画结束 1.如果有done
  const didEnter = () => {
    const childDOM = ref.current as HTMLBaseElement
    let { enterActive, enterDone } = classNames.current
    childDOM.classList.remove(enterActive, enterDone)
    console.log('enter done');

    props.onEntered && props.onEntered()
    childDOM.removeEventListener('transitionend', didEnter);
    childDOM.removeEventListener('animationend', didEnter);
  }

  // 动画结束
  const didExit = () => {
    const childDOM = ref.current as HTMLBaseElement
    let { exit, exitActive, exitDone, enter, enterActive, enterDone } = classNames.current

    console.log('did exit');
    // 下一帧隐藏元素
    requestAnimationFrame(() => {
      setShow(false)
      props.onExited && props.onExited()
      childDOM.classList.remove(exitActive)
      childDOM.classList.remove(exitDone)
    })
    childDOM.removeEventListener('transitionend', didExit);
    childDOM.removeEventListener('animationend', didExit);
  }

  return React.cloneElement(children, Object.assign({
    ref,
    className: cs(children.props.className, { 'ru-hide': !show })
  }, children.props));
};

export default Transition;
