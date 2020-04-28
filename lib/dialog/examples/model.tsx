import React from 'react';
import { Button, modal } from 'rummy-ui';

const Model = () => {
	return (
		<div>
			<Button
				onClick={() => {
					modal({
						content: 'modal对话框',
						title: 'Modal',
						afterClose: () => {
							console.log('modal对话框被关闭了!');
						}
					});
				}}>
				打开modal
			</Button>
		</div>
	);
};

export default Model;
