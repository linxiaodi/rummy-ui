import React from 'react';
import Demo from '../../example/demo';
import Table from '../../example/table';

const App = () => {
	return (
		<div>
			<h2>Collapse Transition</h2>
			<p>未知宽高的折叠效果折叠效果</p>
			<Demo title="基本使用" path="collapse/examples/basic.tsx" />

			<Table
				title="Collapse Transition Attributes"
				source={[
					['in', '展示或者隐藏', '必填', 'boolean', '-'],
					['dir', '动画执行方向', '非必填', 'horizon | vertical', 'vertical']
				]}
			/>
		</div>
	);
};

export default App;
