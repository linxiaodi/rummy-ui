import React, { useState } from 'react';
import { Button, CollapseTransition } from 'rummy-ui';

const Basic = () => {
	const [show, setShow] = useState(false);
	return (
		<div style={{ height: '300px', border: '1px solid #ddd' }}>
			<Button onClick={() => setShow(!show)}>切换</Button>
			<CollapseTransition in={show}>
				<ul style={{ background: 'lightblue' }}>
					<li>123</li>
					<li>222</li>
					<li>333</li>
					<li>444</li>
					<li>123</li>
					<li>222</li>
					<li>333</li>
					<li>444</li>
					<li>123</li>
					<li>222</li>
					<li>333</li>
					<li>444</li>
				</ul>
			</CollapseTransition>
		</div>
	);
};

export default Basic;
