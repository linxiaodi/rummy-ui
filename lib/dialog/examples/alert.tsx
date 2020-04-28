import React from 'react';
import { alert, Button } from 'rummy-ui';

const Alert = () => {
	return (
		<div>
			<Button
				type="primary"
				onClick={() => {
					alert({ title: 'Alert', content: 'alert内容', afterClose: () => console.log('alert对话框被关了') });
				}}>
				打开alert提示
			</Button>
		</div>
	);
};

export default Alert;
