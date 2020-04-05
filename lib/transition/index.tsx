import React, { useEffect } from 'react';
import { useDidMount } from 'rummy-ui/_util/hooks';
import cs from 'classnames'

// 自定义classNames状态
interface TransitionClassNames {
  enter: string,
  enterActive: string,
  enterDone?: string,
  exit: string,
  exitActive: string,
  exitDone?: string
}

interface TransitionProps {
  children: React.ReactElement,
  in: boolean,
  classNames: string | TransitionClassNames
}

const getTransitionClass = (name: string): TransitionClassNames => ({
  enter: `${name}-enter`,
  enterActive: `${name}-enter-active`,
  enterDone: `${name}-enter-to`,
  exit: `${name}-leave`,
  exitActive: `${name}-leave-active`,
  exitDone: `${name}-leave-to`,
})

const Transition: React.FunctionComponent<TransitionProps> = (props) => {
  let ref = React.useRef<HTMLBaseElement>(null);
  let classNames = React.useRef<TransitionClassNames>(typeof props.classNames === 'string'
    ? getTransitionClass(props.classNames)
    : props.classNames);


  let { children } = props
  console.log(children);
  console.log(ref);

  useEffect(() => {
    if (props.in) {
      onVisible()
    }
  }, [props.in])

  // on element visible
  const onVisible = () => {
    const childDOM = ref.current as HTMLBaseElement
    childDOM!.addEventListener('transitionend', didEnter)
    childDOM!.addEventListener('animationend', didEnter)

    let { enter, enterActive, enterDone, exitDone } = classNames.current

    // childDOM.style.display = ''
    childDOM.classList.add(enter, enterActive)
    exitDone && childDOM.classList.remove(exitDone)
    // next tick
    // requestAnimationFrame(() => {
    //   childDOM.classList.remove(enter)
    //   childDOM.classList.add(enterActive)
    // })
  }

  // 动画结束 1.如果有done
  const didEnter = () => {
    const childDOM = ref.current as HTMLBaseElement
    let { enter, enterActive, enterDone } = classNames.current
    childDOM.classList.remove(enterActive)
    enterDone && childDOM.classList.add(enterDone)
    console.log('end');

    childDOM.removeEventListener('transitionend', didEnter);
    childDOM.removeEventListener('animationend', didEnter);
  }

  const didLeave = () => {

  }

  return React.cloneElement(children, Object.assign({
    ref,
    className: cs(children.props.className, { 'ru-hide': !props.in })
  }, children.props));
};

export default Transition;
