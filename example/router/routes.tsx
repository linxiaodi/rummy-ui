import IconExample from 'fisher-ui/icons/icon.example';
import DialogExample from 'fisher-ui/dialog/dialog.example';
import ButtonExample from 'fisher-ui/button/button.example';

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
  }
];
export default routes;