import React from 'react';
import { Select } from 'rummy-ui';

const App = () => {
  const options = [
    {
      label: '火锅',
      value: 'huoguo'
    },
    {
      label: '热干面',
      value: 'reganmian'
    }
  ]
  return (
    <div style={{paddingBottom: '100px'}}>
      <Select disabled defaultValue={'huoguo'} className="w-330 mb-16">
        {options.map((item) => {
          return <Select.Option key={item.value} value={item.value} label={item.label}/>
        })}
      </Select>
      <Select className="w-330">
        {options.map((item) => {
          return <Select.Option key={item.value} value={item.value} label={item.label}/>
        })}
      </Select>
    </div>
  );
};

export default App;

App.title = '基础用法';
