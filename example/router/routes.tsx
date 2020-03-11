import IconExample from '../../lib/icons/icon.example';
import DialogExample from '../../lib/dialog/dialog.example';
import ButtonExample from '../../lib/button/button.example';
import LayoutExample from '../../lib/layout/layout.example';
import InputExample from '../../lib/input/input.example'

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
    sidebar: 'Footer 布局'
  },
  {
    path: '/input',
    component: InputExample,
    sidebar: 'Input 输入框'
  }
];
export default routes;