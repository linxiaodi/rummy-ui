import React from 'react';
import { Icon } from 'fisher-ui'
import { iconList } from 'fisher-ui/icons/index'

const IconExample = () => {
  return (
    <div>
      <h2>Icon组件</h2>
      <div className="icon-list">
        {
          iconList.map((name) => {
            return <div className="icon-item">
              <Icon name={name} key={name} />
              <div className="icon-item__name">{name}</div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default IconExample;