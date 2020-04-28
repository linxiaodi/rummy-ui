import React from 'react';
import './layout.example.scss';
import Demo from '../../example/demo';

const LayoutExample = () => {
	return (
		<div className="ru-example-layout">
			<h2>Layout 组件</h2>
			<p>协助进行页面级整体布局。</p>

			<Demo title="基本布局" desc="如果layout里面有sider就会横向布局" path="layout/examples/basic" />
		</div>
	);
};

export default LayoutExample;
