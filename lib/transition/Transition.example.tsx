import React, { useState } from 'react';
import Transition from './index'

const App = () => {
  let [show, setShow] = useState(false)
  return (
    <>
      <button onClick={() => setShow(!show)} style={{ marginBottom: '100px' }}>切换div</button>
      <Transition in={show} classNames="ru-zoom">
        <div style={{ border: '1px solid #ddd' }}>123456</div>
      </Transition>
    </>
  )
}

export default App
