import React, {useState} from 'react';
import { Dialog } from 'fisher-ui';
import 'fisher-ui/dialog/index.scss'
import { Button } from 'fisher-ui';



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
        onCancel={() => setVisible(false)}
        buttons={[<Button onClick={() => setVisible(false)}>取消</Button>, <Button onClick={() => console.log('确定')} type="primary">确定</Button>]}
      >这是基本用法</Dialog>
      <h3>alert 信息提示</h3>
      <h3>confirm 确认对话框</h3>
      <h3>modal 对话框</h3>
    </div>
  );
};

export default DialogExample;
