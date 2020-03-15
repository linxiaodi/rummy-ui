import React, {useState} from 'react';
import { Dialog, modal, alert, confirm } from 'rummy-ui';
import { Button } from 'rummy-ui';


const DialogExample = () => {
  const [visible, setVisible]  = useState(false)
  return (
    <div className="rummy-demo">
      <h2>Dialog组件</h2>
      <h3>基本用法</h3>
      <Button type="primary" onClick={() => setVisible(true)}>基本用法</Button>
      <Dialog
        title="对话框"
        visible={visible}
        buttons={[<Button onClick={() => setVisible(false)}>取消</Button>, <Button onClick={() => console.log('确定')} type="primary">确定</Button>]}
      >这是基本用法</Dialog>
      <h3>modal 对话框</h3>
      <Button onClick={() => {
        modal({
          content: 'modal对话框',
          title: 'Modal',
          afterClose: () => { console.log('modal对话框被关闭了!') }
        })
      }}>打开modal</Button>
      <h3>alert 信息提示</h3>
      <Button
        type="primary"
        onClick={() => {
          alert({ title: 'Alert', content: 'alert内容', afterClose: () => console.log('alert对话框被关了') })
        }}
      >打开alert提示</Button>
      <h3>confirm 确认对话框</h3>
      <Button type="primary" onClick={() => {
        confirm({
          title: 'Confirm',
          content: 'confirm确定框',
          onOk: () => console.log('confirm确定'),
          afterClose: () => console.log('取消')
        })
      }}>打开confirm</Button>
    </div>
  );
};

export default DialogExample;
