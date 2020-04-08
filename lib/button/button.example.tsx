import React from 'react';
import { Button } from 'rummy-ui';
import Demo from '../../example/demo'
import Table from '../../example/table'

const ButtonExample = () => {
  return (
    <div className="rummy-demo">
      <h2>Button 组件</h2>
      <p>基础组件，触发业务逻辑时使用。</p>
      <Demo title="基础用法" desc="指定type，默认为default类型" path="button/examples/basic"/>
      <Demo title="按钮尺寸" desc="可以指定size，大中小，默认中号" path="button/examples/size"/>
      <Demo title="各类按钮" desc="各式按钮颜色" path="button/examples/sorts"/>

      <h3>API</h3>
      <Table source={[
        ['type', '按钮组件样式', 'string', '非必选', 'default'],
        ['size', '按钮组件大小', 'sm | md | lg', '非必选', 'md'],
        ['disabled', '按钮禁止点击', 'boolean', '非必选', '-']
      ]} title="Button Attributes" type="attribute"/>
      <Table title="Button Event" source={[
        ['onClick', '当按钮被点击', 'e:Event => {}']
      ]} type="event"/>
    </div>
  );
};

export default ButtonExample;
