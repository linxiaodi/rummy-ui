import React, { useState } from 'react';
import Transition from './index'
import { Button } from 'rummy-ui'

const App = () => {
  let [show, setShow] = useState(true)
  return (
    <>
      <Button type="primary" onClick={() => setShow(!show)} style={{ marginBottom: '100px' }}>切换div</Button>
      <Transition in={show} classNames="ru-zoom">
        <div style={{ border: '1px solid #ddd' }}>123456</div>
      </Transition>
    </>
  )
}

export default App
