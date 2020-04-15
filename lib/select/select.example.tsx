import React from 'react';
import Table from '../../example/table';
import Demo from '../../example/demo';

const App = () => {
  return (
    <div>
      <h2>Message 消息提示</h2>
      <p>简短的消息提示框，支持持续时间和样式。</p>

      <Demo path="select/examples/basic"/>
      <Demo path="select/examples/search"/>

      <Table title="Select Attributes" source={[
        ['value', '指定某个条目', 'string', '非必填', '-'],
        ['defaultValue', '默认值', 'string', '非必填', '-'],
        ['placeholder', '占位符', 'string', '非必填', '-'],
        ['showSearch', '是否展示搜索', 'boolean', '非必填', '-'],
        ['filterOption', '启用搜索时自定义过滤条件', 'function', '非必填', '(input, value, label) => input === label']
      ]} type="attribute"/>

      <Table title="Select Event" source={[
        ['onChange', '当条目改变时的回调', '(v:value, label) => any'],
      ]} type="attribute"/>

      <Table title="Select Option Attributes" source={[
        ['value', '根据此属性进行筛选', 'string|number', '非必填', '-'],
        ['label', '属性值的label', 'string|React.Element', '非必填', '-']
      ]} type="attribute"/>
    </div>
  );
};

export default App;
