import IconExample from 'rummy-ui/icons/icon.example';
import DialogExample from 'rummy-ui/dialog/dialog.example';
import ButtonExample from 'rummy-ui/button/button.example';
import LayoutExample from 'rummy-ui/layout/layout.example';

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
];
export default routes;