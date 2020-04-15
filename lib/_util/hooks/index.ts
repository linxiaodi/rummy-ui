import React, { useEffect, useImperativeHandle, useLayoutEffect, useRef } from 'react';

interface setHandler<T> {
  (cb: () => T): any
}

function createHandlerSetter<T>(handleValue: T): [any, setHandler<T>] {
  const handlerRef = useRef<T>(handleValue)
  const setHandler: setHandler<T> = (cb) => {
    useImperativeHandle(handlerRef, cb)
  }

  return [handlerRef, setHandler]
}

interface Mount {
  (): any
}

export const useDidMount = (onMount: Mount) => {
  const [handler, setHandler] = createHandlerSetter<Mount>(onMount)
  useEffect(() => {
    handler.current()
  }, [])
  return setHandler
}

export const useWillUnmount = (onUnMount: Mount) => {
  const [handler, setHandler] = createHandlerSetter<Mount>(onUnMount)
  useEffect(() => {
    return () => {
      handler.current()
    }
  }, [])
  return setHandler
}

// before Mount render
export const useWillMount = (onWillMount: Mount) => {
  const [handler, setHandler] = createHandlerSetter<Mount>(onWillMount)
  useLayoutEffect(() => {
    handler.current()
  }, [])
  return setHandler
}
