import React, { useState } from 'react';
import { Button, Dialog } from 'rummy-ui';

const App = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<Button type="primary" onClick={() => setVisible(true)}>
				点击打开dialog
			</Button>
			<Dialog
				title="对话框"
				visible={visible}
				buttons={[
					<Button onClick={() => setVisible(false)}>取消</Button>,
					<Button onClick={() => console.log('确定')} type="primary">
						确定
					</Button>
				]}>
				这是基本用法
			</Dialog>
		</div>
	);
};

export default App;
