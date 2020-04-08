import React from 'react';
import { Button } from 'rummy-ui';

const App = () => {
  return (
    <div>
      <Button type="default">default</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="error">error</Button>
    </div>
  );
};

export default App;
