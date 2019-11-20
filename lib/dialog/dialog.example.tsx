import React, {useState} from 'react';
import { Dialog } from 'fisher-ui';
import 'fisher-ui/dialog/index.scss'

const DialogExample = () => {
  const [visible, setVisible]  = useState(false)
  return (
    <div>
      <h2>Dialog组件</h2>
      <button onClick={() => setVisible(true)}>点级打开</button>
      <Dialog title="对话框" visible={visible} onCancel={() => setVisible(false)}>dianwo</Dialog>
    </div>
  );
};

export default DialogExample;
