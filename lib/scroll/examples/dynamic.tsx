import React, { useState } from 'react';
import { Button, Scroll } from 'rummy-ui';

const App = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <Button className="mb-16" onClick={() => setToggle(!toggle)}>切换div</Button>
      <Scroll height="200px">
        {
          toggle ? <div style={{ height: '300px', backgroundColor: 'lightblue' }}>
            我的内容有<em>300px</em>
          </div> : <div style={{ height: '100px', backgroundColor: 'lightgreen' }}>我的内容只有<em>100px</em></div>
        }
      </Scroll>
    </div>
  )
}

export default App

App.title = '动态改变滚动条'
App.desc = '使用MutationObserver监听'
