import IconExample from 'rummy-ui/icons/icon.example';
import DialogExample from 'rummy-ui/dialog/dialog.example';
import ButtonExample from 'rummy-ui/button/button.example';
import LayoutExample from 'rummy-ui/layout/layout.example';
import InputExample from 'rummy-ui/input/input.example'

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