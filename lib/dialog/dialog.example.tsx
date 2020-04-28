import React, { useState } from 'react';
import Demo from '../../example/demo';
import Table from '../../example/table';

const DialogExample = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div className="rummy-demo">
			<h2>Dialog组件</h2>
			<p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
			<Demo path="dialog/examples/basic" title="基础用法" />
			<Demo path="dialog/examples/model" title="model 对话框" />
			<Demo path="dialog/examples/alert" title="alert 信息提示" />
			<Demo path="dialog/examples/confirm" title="confirm 确认对话框" />
			<Table
				title="Dialog Attributes"
				source={[
					['visible', 'Dialog是否展示', 'boolean', '必填', 'false'],
					['title', 'Dialog的header', 'string | ReactNode', '非必填', '-'],
					['closeOnClickMask', '是否可以通过点击遮罩关闭dialog', 'boolean', '非必填', 'true'],
					['buttons', '底部按钮', 'ReactNode | ReactNode[]', '非必填', '-'],
					['onCancel', 'visible为false时', '() => any', '非必填', '-'],
					['onExited', '当dialog消失动画结束', '() => any', '非必填', '-']
				]}
			/>
			<Table
				title="Model Attributes"
				source={[
					['title', 'Dialog的header', 'string | ReactNode', '必填', '-'],
					['content', 'Dialog的内容', 'string | ReactNode', '必填', '-'],
					['afterClose', '当Dialog消失', '() => any', '非必填', '-'],
					['buttons', '底部按钮', 'ReactNode | ReactNode[]', '非必填', '-']
				]}
			/>
			<Table
				title="Alert Attributes"
				source={[
					['title', 'Dialog的header', 'string | ReactNode', '必填', '-'],
					['content', 'Dialog的内容', 'string | ReactNode', '必填', '-'],
					['afterClose', '当Dialog消失', '() => any', '非必填', '-']
				]}
			/>
			<Table
				title="Confirm Attributes"
				source={[
					['title', 'Dialog的header', 'string | ReactNode', '必填', '-'],
					['content', 'Dialog的内容', 'string | ReactNode', '必填', '-'],
					['afterClose', '当Dialog消失,点击取消按钮', '() => any', '非必填', '-'],
					['onOk', '点击确定按钮', '() => any', '非必填', '-']
				]}
			/>
		</div>
	);
};

export default DialogExample;
