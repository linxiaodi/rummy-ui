import React, { useState } from 'react';
import { Button, Transition } from 'rummy-ui';

const App = () => {
  /**
   * style
     .ru-fade-enter.ru-fade-enter-active {
        opacity: 0;
     }
     .ru-fade-enter-active {
        opacity: 1;
        transition: opacity 1000ms;
      }

      .ru-fade-enter-done {
        opacity: 1;
      }

      .ru-fade-exit.ru-fade-exit-active  {
        opacity: 1;
      }
      .ru-fade-exit-active {
        opacity: 0;
        transition: opacity 1000ms;
      }
      .ru-fade-exit-done {
        opacity: 0;
      }
   * */
  const [show, setShow] = useState(true)
  return (
    <div>
      <Button onClick={() => setShow(!show)} type="primary">切换show</Button>
      <div style={{ height: '20px', paddingTop: '10px' }}>
        <Transition in={show} classNames="ru-fade">
          <div>我是内容。使用的淡出</div>
        </Transition>
      </div>
    </div>
  );
};

export default App;
