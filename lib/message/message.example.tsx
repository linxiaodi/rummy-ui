import React from 'react';
import Demo from '../../example/demo';
import Table from '../../example/table';

const App = () => {
  return (
    <div>
      <h2>Message 消息提示</h2>
      <p>简短的消息提示框，支持持续时间和样式。</p>
      <Demo title="基础用法" desc="简单的使用message：message[type](content, options)" path="message/examples/basic.tsx"/>
      <Demo title="各种样式的message" desc="样式不同的message" path="message/examples/types.tsx"/>

      <h3>API</h3>
      <Table
        source={[
          ['content', 'message内容', 'ReactNode | null', '必填', '-']
        ]}
        title="Message Content"
      />

      <Table
        source={[
          ['duration', 'message持续出现的多少时间（单位：ms）', 'number','非必填', '1200']
        ]}
        title="Message Options"
      />
    </div>
  );
};

export default App;
