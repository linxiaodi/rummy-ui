import React, { useState } from 'react';
import { Input } from 'rummy-ui'

const InputExample = () => {
  const [val1, setVal1] = useState('hello world')
  return (
    <div className="rummy-demo ru-demo-input">
      <h2>Input 输入框</h2>
      <h3>基本用法</h3>
      <Input/>
      <h3>受控组件</h3>
      <div>值为：{val1}</div>
      <Input value={val1} onChange={(e) => setVal1(e.target.value)}/>
      <h3>Size组件</h3>
      <div className="ru-demo-input-size">
        <Input size="lg"/>
        <Input size="md"/>
        <Input size="sm"/>
      </div>
    </div>
  );
};

export default InputExample;
