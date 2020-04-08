import React, { useState } from 'react';
import './index.css';
import { Button, Transition } from 'rummy-ui';

const App = () => {
  /**
   * css
   .zoomIn-enter-active {
    animation: .6s both zoomIn;
    }
    .rollOut-exit-active {
        animation: .6s both rollOut;
    }
   * */

  const [show, setShow] = useState(true);

  return (
    <div>
      <div>
        <Button onClick={() => setShow(true)}>展示</Button>
        <Button onClick={() => setShow(false)} type="primary">隐藏</Button>
      </div>
      <div style={{ height: '50px', marginTop: '20px' }}>
        <Transition
          in={show}
          classNames={{ enterActive: 'zoomIn-enter-active', exitActive: 'rollOut-exit-active' }}>
          <div className="animate">Animation</div>
        </Transition>
      </div>
    </div>
  );
};

App.desc = '可以指定classNames为一个对象，对象必须要包含enterActive和exitActive2个key，其余的class可以视情况使用。'
App.title = '使用自定义classNames'

export default App;
