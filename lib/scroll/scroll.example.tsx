import React from 'react';
import Demo from '../../example/demo'
import Table from '../../example/table'

const ScrollExample = () => {
  return (
    <div>
      <h2>Scroll 虚拟滚动条</h2>
      <p>支持高度虚拟滚动条，自动根据内容高度改变滚动条。</p>
      <Demo path="scroll/examples/basic.tsx"/>
      <Demo path="scroll/examples/dynamic.tsx"/>

      <Table source={[
        ['height', '滚动内容的高度', 'string', '非必填', '-'],
        ['trackStyle', '滚动条轨道的样式', 'React.CSSProperties', '非必填', '-'],
        ['barStyle', '滚动条样式', 'React.CSSProperties', '非必填', '-'],
      ]} title="Scroll Attributes"/>
    </div>
  );
};

export default ScrollExample;
