import React from 'react';
import { Button, confirm } from 'rummy-ui';

const Confirm = () => {
	return (
		<div>
			<Button
				type="primary"
				onClick={() => {
					confirm({
						title: 'Confirm',
						content: 'confirm确定框',
						onOk: () => console.log('confirm确定'),
						afterClose: () => console.log('取消')
					});
				}}>
				打开confirm
			</Button>
		</div>
	);
};

export default Confirm;
