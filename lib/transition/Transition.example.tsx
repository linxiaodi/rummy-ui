import React, { useState } from 'react';
import Demo from '../../example/demo';
import Table from '../../example/table';

const App = () => {
	return (
		<div>
			<h2>Transition 过渡动画</h2>
			<p>内置的过渡动画组件，只支持CSS属性的过渡动画。</p>
			<Demo
				title="基础使用"
				desc="绑定一个字符串classNames，相当于绑定了一系列的className，比如fade，相当于声明{
          enter: fade-enter, enterActive: fade-enter-active, enterDone: fade-enter-done,
          exit: fade-exit, exitActive: fade-exit-active, exitDone: fade-exit-done
        }"
				path="transition/examples/basic"
			/>
			<Demo path="transition/examples/custom" />

			<h3>API</h3>
			<Table
				title="Transition Attributes"
				type="attribute"
				source={[
					['in', '控制组件显示隐藏', 'boolean', '必填', '-'],
					['classNames', '控制组件的CSS动画，如果声明的是string,会默认为：一系列的classNames', 'string | object', '必填', '-'],
					['onEnter', '当组件开始动画时', '() => any', '非必填', 'any'],
					['onEntered', '当组件动画完成之后', '() => any', '非必填', 'any'],
					['onExit', '当组件执行离开动画时', '() => any', '非必填', 'any'],
					['onExited', '当组件动画完成离开动画之后', '() => any', '非必填', 'any']
				]}
			/>
		</div>
	);
};

export default App;
