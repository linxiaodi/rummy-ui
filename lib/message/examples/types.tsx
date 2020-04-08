import React from 'react';
import { Button, message } from 'rummy-ui';

const App = () => {
  return (
    <div>
      <Button onClick={() => message.info('这是一则消息')} type="primary">消息</Button>
      <Button onClick={() => message.success('这是成功的消息提示')} type="success">成功</Button>
      <Button onClick={() => message.warning('这是警告的消息提示')} type="warning">警告</Button>
      <Button onClick={() => message.error('这是错误的消息提示')} type="error">错误</Button>
    </div>
  );
};

export default App;
