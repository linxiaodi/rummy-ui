import React, { useState } from 'react';
import { Input } from 'rummy-ui'
import Table from '../../example/table'

const InputExample = () => {
  const [val1, setVal1] = useState('hello world')
  return (
    <div className="rummy-demo ru-demo-input">
      <h2>Input 输入框</h2>
      <h3>基本用法</h3>
      <Input/>
      <h3>受控组件</h3>
      <div>值为：{val1}</div>
      <Input value={val1} onChange={(value) => setVal1(value)}/>
      <h3>Size组件</h3>
      <div className="ru-demo-input-size">
        <Input size="lg"/>
        <Input size="md"/>
        <Input size="sm"/>
      </div>
      <h3>Disabled</h3>
      <Input disabled/>
      <h3>API</h3>
      <Table
        title="Input Attributes"
        source={[
          ['value', 'input的值', 'string', '非必选', '\'\'']
        ]}/>
      <Table
        title="Input Event"
        type="event"
        source={[
          ['onChange', '当input改变时回传', '(v:string)=>{}']
        ]}
      />
    </div>
  );
};

export default InputExample;
