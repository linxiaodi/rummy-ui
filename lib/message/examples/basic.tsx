import React from 'react';
import { Button, message } from 'rummy-ui';

const Basic = () => {
  const handleClick = () => {
    message.info('基本功能')
  }
  return (
    <div>
      <Button onClick={handleClick}>基本功能</Button>
    </div>
  );
};

export default Basic;
