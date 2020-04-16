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
    },
    {
      label: '辣条',
      value: 'latiao'
    }
  ]
  return (
    <div>
      {/*<Select className="mb-100" showSearch={true}>*/}
        {/*{*/}
          {/*options.map((item) => {*/}
            {/*return <Select.Option label={item.label} key={item.value} value={item.value}/>*/}
          {/*})*/}
        {/*}*/}
      {/*</Select>*/}
    </div>
  );
};

export default App;

App.title = '带搜索框';

App.desc = '展开后对选项进行搜索';
