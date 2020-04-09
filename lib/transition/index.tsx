import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useDidMount } from 'rummy-ui/_util/hooks';
import cs from 'classnames'

// 自定义classNames状态
interface TransitionClassNames {
  enter?: string,
  enterActive: string,
  enterDone?: string,
  exit?: string,
  exitActive: string,
  exitDone?: string
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
  let [isMount, setIsMount] = useState(false)

  let { children } = props

  // before Did Mount
  // 视图出现之前把元素至为none，防止动画出现闪动
  useLayoutEffect(() => {
    (ref.current as HTMLBaseElement).style.display = 'none'
  }, [])

  useDidMount(() => {
    setIsMount(true)
  })

  useEffect(() => {
    // isMount 过滤掉第一次 props.in初始化第一次触发的动作
    // 否则会导致 奇怪的类名和end 事件的不触发
    if (props.in) {
      onVisible()
    } else {
      // 刚开始就隐藏元素的话就不需要啥动画了
      isMount && onHide()
    }
  }, [props.in])

  // on element visible
  // 第一帧 添加enter enterActive
  // 第二帧 删除enter 添加enterDone
  // 结束之后：移除enterActive 移除enterDone
  const onVisible = () => {
    const childDOM = ref.current as HTMLBaseElement

    let { enter, enterActive, enterDone, exitActive, exitDone } = classNames.current

    childDOM.addEventListener('transitionend', didEnter)
    childDOM.addEventListener('animationend', didEnter)

    // 疑问：为什么要多加一帧？
    requestAnimationFrame(() => {
      // when hidden transition not end
      if (childDOM.classList.contains(exitActive)) {
        childDOM.classList.remove(exitActive);
        exitDone && childDOM.classList.remove(exitDone);

        childDOM.removeEventListener('transitionend', didExit);
        childDOM.removeEventListener('animationend', didExit);
      }

      childDOM.style.display = ''

      childDOM.classList.add(enterActive)
      enter && childDOM.classList.add(enter)

      props.onEnter && props.onEnter()
      // next tick
      requestAnimationFrame(() => {
        enter && childDOM.classList.remove(enter)
        enterDone && childDOM.classList.add(enterDone)
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
      childDOM.classList.add(exitActive)
      exit && childDOM.classList.add(exit)
    })

    // next tick
    requestAnimationFrame(() => {
      exit && childDOM.classList.remove(exit)
      exitDone && childDOM.classList.add(exitDone)
    })
  }

  // 动画结束 1.如果有done
  const didEnter = useCallback(() => {
    const childDOM = ref.current as HTMLBaseElement
    let { enterActive, enterDone } = classNames.current
    childDOM.classList.remove(enterActive)
    enterDone && childDOM.classList.remove(enterDone)
    
    props.onEntered && props.onEntered()
    childDOM.removeEventListener('transitionend', didEnter);
    childDOM.removeEventListener('animationend', didEnter);
  }, [])

  // 动画结束
  const didExit = useCallback(() => {
    const childDOM = ref.current as HTMLBaseElement
    let { exit, exitActive, exitDone, enter, enterActive, enterDone } = classNames.current

    // 下一帧隐藏元素
    requestAnimationFrame(() => {
      props.onExited && props.onExited()
      childDOM.classList.remove(exitActive)
      exitDone && childDOM.classList.remove(exitDone)
      childDOM.style.display = 'none'
    })
    childDOM.removeEventListener('transitionend', didExit);
    childDOM.removeEventListener('animationend', didExit);
  }, [])

  // 绑定classNames hide会很奇怪！
  return React.cloneElement(children, Object.assign({
    ref
  }, children.props));
};

export default Transition;
