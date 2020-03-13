import React from 'react';
import { Icon } from 'rummy-ui'
import { iconList } from 'rummy-ui/icons/index'
import Demo from '../../example/demo'

const IconExample = () => {
  return (
    <div className="icon-example">
      <h2>Icon图标</h2>
      <p>提供了一套常用的图标集合</p>
      <div className="icon-list">
        {
          iconList.map((name) => {
            return <div key={name} className="icon-item">
              <Icon name={name} />
              <div className="icon-item__name">{name}</div>
            </div>
          })
        }
      </div>
      <Demo title="使用方法" desc="通过设置对应的name属性" path="icons/examples/basic.tsx"/>
      <Demo title="不通过组件直接使用" desc="通过设置ru-icon-[name]来组合成一个icon" path="icons/examples/class.tsx"/>

    </div>
  );
};

export default IconExample;