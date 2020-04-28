import React, { useState } from 'react';
import { Input } from 'rummy-ui';
import Table from '../../example/table';
import Demo from '../../example/demo';

const InputExample = () => {
	const [val1, setVal1] = useState('hello world');
	return (
		<div className="rummy-demo ru-demo-input">
			<Demo path="input/examples/basic" title="基础使用" desc="绑定value和onChange可变为受控组件" />
			<Demo path="input/examples/size" title="格式尺寸的Input" />
			<Demo path="input/examples/disabled" title="禁用状态" />
			<h3>API</h3>
			<Table
				title="Input Attributes"
				source={[
					['value', 'input的值', 'string', '非必选', '-'],
					['disabled', '禁用', 'boolean', '非必选', 'false'],
					['size', '指定不同尺寸', 'sm | md | lg', '非必选', 'md'],
					['onChange', '当input改变时回传', '(v:string)=>{}', '非必选', '-']
				]}
			/>
		</div>
	);
};

export default InputExample;
