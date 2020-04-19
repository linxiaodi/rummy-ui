import React from 'react';

const Install = () => {
  return (
    <div>
      <h2>介绍</h2>
      <p>
        个人实验性开发项目，仅供学习。纯手撸 webpack 搭建开发生产环境，使用 TypeScript + React 结合 hooks 函数式组件的写法。依赖的第三方库只有 classnames。
      </p>
      <p><em>请不要用在生产环境。</em></p>

      <h2>安装</h2>
      <p>使用 npm 进行安装</p>
      <div className="hl">npm i rummy-ui -S</div>

      <h2>更多开发细节</h2>

      <p><a target="_blank" href="https://github.com/linxiaodi/rummy-ui#todo">todo list</a></p>

      <p>...</p>
    </div>
  );
};

export default Install;
