import React from 'react';
import { Button } from 'rummy-ui';
import Demo from '../../example/demo'

const ButtonExample = () => {
  return (
    <div className="rummy-demo">
      <h2>Button 组件</h2>
      <p>基础组件，触发业务逻辑时使用。</p>
      <Demo title="基础用法" desc="指定type，默认为default类型" path="button/examples/basic"/>
      <Demo title="按钮尺寸" desc="可以指定size" path="button/examples/size"/>
    </div>
  );
};

export default ButtonExample;