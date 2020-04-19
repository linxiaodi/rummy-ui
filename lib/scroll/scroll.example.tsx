import React from 'react';
import Demo from '../../example/demo'
import Table from '../../example/table'

const ScrollExample = () => {
  return (
    <div>
      <h2>Scroll 虚拟滚动条</h2>
      <p>支持高度虚拟滚动条。</p>
      <Demo path="scroll/examples/basic.tsx"/>

      <Table source={[
        ['height', '滚动内容的高度', 'string | number', '必填', '0']
      ]} title="Scroll Attributes"/>
    </div>
  );
};

export default ScrollExample;
