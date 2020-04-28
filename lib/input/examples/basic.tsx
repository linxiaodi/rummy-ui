import React, { useState } from 'react';
import { Input } from 'rummy-ui';

const Basic = () => {
	const [val1, setVal1] = useState('hello world');
	return (
		<div>
			<Input />
			<div className="mb-16" />
			<div>受控组件的值：{val1}</div>
			<Input value={val1} onChange={value => setVal1(value)} />
		</div>
	);
};

export default Basic;
