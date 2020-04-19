/**
 * @file refer https://github.com/Grsmto/simplebar
 * */
import React, {
  HTMLAttributes,
  MouseEventHandler,
  UIEventHandler,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import './index.scss'
import { scrollbarWidth } from '../_util/dom';
import { useDidMount, useWillMount, useWillUnmount } from '../_util/hooks/index';
import cs from 'classnames'

interface ScrollProps extends HTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode,
  height?: string,
  trackStyle?: React.CSSProperties,
  barStyle?: React.CSSProperties,
}

let _nativeScrollWidth:number = 0

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
  const { height, className, style, ...rest } = props;
  const isDrag = useRef(false)
  const [_isDrag, _setIsDrag] = useState(isDrag.current);
  const [barVisible, setBarVisible] = useState(true)
  const [nativeScrollWidth, setNativeScrollWidth] = useState(_nativeScrollWidth)
  const [_barHeight, _setBarHeight] = useState(0)
  const [barTop, _setBarTop] = useState(0)
  // 可视区 内容 高度
  const viewHeight = useRef(0)
  const wrapper = useRef<HTMLDivElement>(null)
  const barHeight = useRef(0)
  // marker
  const oldBarTop = useRef(0)

  const mutationObserver = useRef<MutationObserver>(null)

  const calcViewHeight = () => {
    const height = wrapper.current!.getBoundingClientRect().height;
    viewHeight.current = height
  }

  const setBarTop = (n: number) => {
    const max = viewHeight.current - barHeight.current;
    console.log(max);
    if (n < 0) return _setBarTop(0);
    if (n > viewHeight.current - barHeight.current) return _setBarTop(max);
    _setBarTop(n)
    return n
  }

  const yAxis = useRef(0)

  // const setBarTop = (n) => {
  //   if (n < 0) return;
  //   if (n > viewHeight.current - _barHeight) return;
  // }
  // const [yAxis, setYAxis] = useState(0)

  // const [scrollTop, setScrolltop] = useState(0)
  // const [nativeScrollTop, setNativeScrollTop] = useState()

  const content = useRef<HTMLDivElement>(null)

  useWillMount(() => {
    // if (!_nativeScrollWidth) {
      _nativeScrollWidth = scrollbarWidth();
      setNativeScrollWidth(_nativeScrollWidth);
    // }
  })

  const init = () => {
    // const { height } = content.current!.getBoundingClientRect();
    // console.log(content.current!._barHeight);
    const contentHeight = content.current!.scrollHeight;
    calcViewHeight();
    if (viewHeight.current > 0) {
      _setBarHeight(() => {
        const v = viewHeight.current / contentHeight * viewHeight.current
        barHeight.current = v;
        return v;
      })
      console.log(contentHeight, viewHeight.current);
      setBarVisible(contentHeight / viewHeight.current > 1)
      console.log(contentHeight / viewHeight.current > 1);
    } else {
      setBarVisible(false)
    }
  }

  useDidMount(() => {
    // const { height } = content.current!.getBoundingClientRect();
    // console.log(content.current!._barHeight);
    init();
    const mutationObserver = new MutationObserver((mutationsList) => {
      init()
      // console.log(mutationsList);
      // for(let mutation of mutationsList) {
      //   if (mutation.type === 'childList') {
      //     init()
      //   }
      // }
    })
    mutationObserver.observe(content.current!, {
      childList: true,
      subtree: true,
      attributes: true
    })
    document.body.addEventListener('mousemove', onMouseMove)
    document.body.addEventListener('mouseup', onMouseUp)
    document.body.addEventListener('selectstart', onSelect)
  })

  useWillUnmount(() => {
    document.body.removeEventListener('mousemove', onMouseMove)
    document.body.removeEventListener('mouseup', onMouseUp)
    document.body.removeEventListener('selectstart', onSelect)
  })

  const onSelect = (e: Event) => {
    if (isDrag.current) {
      e.preventDefault()
    }
  }

  // 判断是否处于拖动状态
  const onMouseDown:MouseEventHandler = (e) => {
    isDrag.current = true
    _setIsDrag(true)
    yAxis.current = e.clientY
    oldBarTop.current = barTop;
  };
  const onMouseUp = () => {
    isDrag.current = false
    _setIsDrag(false)
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDrag.current) {
      // e.clientY - yAxis.current = 滚动的距离
      // 原来的距离
      setBarTop(e.clientY - yAxis.current + oldBarTop.current)
      const contentHeight = content.current!.scrollHeight;
      // native scroll top
      content.current!.scrollTop = (e.clientY - yAxis.current + oldBarTop.current) / viewHeight.current * contentHeight
    }
  }

  const onScroll:UIEventHandler = (e) => {
    if (!isDrag.current) {
      const scrollTop = e.currentTarget.scrollTop;
      // 换算成barTop
      const contentHeight = content.current!.scrollHeight;
      setBarTop((scrollTop * viewHeight.current) / contentHeight)
    }
  }

  return (
    <div
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        ...style
      }}
      className={cs('ru-scroll-wrapper', className)}
      ref={wrapper}
      {...rest}
    >
      <div
        ref={content}
        style={{
          right: barVisible ? `-${nativeScrollWidth}px` : '0px'
        }}
        className="ru-scroll"
        onScroll={onScroll}
      >
        {props.children}
      </div>
      {
        barVisible &&
        <div
          className="ru-scroll-track"
          style={{ ...props.trackStyle }}
        >
          <div style={{ ...props.barStyle, height: _barHeight, top: `${barTop}px` }}
               onMouseDown={onMouseDown}
               className={cs('ru-scroll-bar', { 'ru-scroll-bar-active': _isDrag })}
          />
        </div>
      }
    </div>
  );
};

export default Scroll;
