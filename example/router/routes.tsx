import IconExample from '../../lib/icons/icon.example';
import DialogExample from '../../lib/dialog/dialog.example';
import ButtonExample from '../../lib/button/button.example';
import LayoutExample from '../../lib/layout/layout.example';
import InputExample from '../../lib/input/input.example';
import FormExample from '../../lib/form/form.example';
import MessageExample from '../../lib/message/message.example';
import TransitionExample from '../../lib/transition/Transition.example';
import SelectExample from '../../lib/select/select.example';
import ScrollExample from '../../lib/scroll/scroll.example';
import CollapseTransition from '../../lib/collapse/collapse.example';

const routes = [
	{
		path: '/icon',
		component: IconExample,
		sidebar: 'Icon 图标'
	},
	{
		path: '/dialog',
		component: DialogExample,
		sidebar: 'Dialog 对话框'
	},
	{
		path: '/button',
		component: ButtonExample,
		sidebar: 'Button 按钮'
	},
	{
		path: '/layout',
		component: LayoutExample,
		sidebar: 'Layout 布局'
	},
	{
		path: '/input',
		component: InputExample,
		sidebar: 'Input 输入框'
	},
	{
		path: '/form',
		component: FormExample,
		sidebar: 'Form 表单'
	},
	{
		path: '/message',
		component: MessageExample,
		sidebar: 'Message 信息提示'
	},
	{
		path: '/select',
		component: SelectExample,
		sidebar: 'Select 选择器'
	},
	{
		path: '/transition',
		component: TransitionExample,
		sidebar: 'Transition 动画使用'
	},
	{
		path: '/scroll',
		component: ScrollExample,
		sidebar: 'Scroll 虚拟滚动条'
	},
	{
		path: '/collapse',
		component: CollapseTransition,
		sidebar: 'collapse 折叠效果'
	}
];
export default routes;
