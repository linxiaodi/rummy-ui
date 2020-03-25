import React, { useRef } from 'react';
import { Button, Form, Input } from 'rummy-ui';

const App = () => {
  const form = useRef<any>(null)
  const initial = {
    shop: '',
    phone: ''
  }
  const rules = {
    shop: [
      { require: true, message: '请输入店铺名称' },
      { max: 12, message: '店铺名称最多12个字' }
    ],
    phone: [
      { require: true, message: '请输入电话号码' },
      {
        validator: (value: string, rule: any, cb: (err?: string) => any) => {
          const reg = /1[1-9][0-9]{9}/
          console.log(value);
          if (reg.test(value)) {
            cb()
          } else {
            cb('手机号码格式不正确')
          }
        }
      },
    ]
  }

  const onSubmit = () => {
    form.current.validateFields((err: string, model: any) => {
      if (err) {
        console.log('报错信息是:', err);
        console.log('表单执行失败')
      } else {
        console.log('表单执行成功！')
      }
      console.log('表单的值是:', model)
    });
  }

  return (
    <div>
      <Form rules={rules} ref={form} initialValue={initial}>
        <Form.Item prop="shop" label="店铺名称">
          <Input className="w-330"/>
        </Form.Item>
        <Form.Item prop="phone" label="联系电话">
          <Input className="w-330" type="number"/>
        </Form.Item>
        <Form.Item>
          <Button onClick={() => form.current.resetFields()}>重置</Button>
          <Button onClick={onSubmit} type="primary">提交</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;