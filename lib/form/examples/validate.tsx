import React, { useRef } from 'react';
import { Button, Form, Input } from 'rummy-ui';

const App = () => {
  const initial = {
    name: '',
    hobby: ''
  }
  const rules = {
    name: { require: true, message: '请输入名字' },
    hobby: { max: 10, message: '爱好不能多于10个字' }
  }
  const form = useRef<any>(null)

  const validate = () => {
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
      <Form ref={form} initialValue={initial} rules={rules}>
        <Form.Item prop="name" label="姓名">
          <Input className="w-330" type="text"/>
        </Form.Item>
        <Form.Item prop="hobby" label="爱好">
          <Input className="w-330" type="text"/>
        </Form.Item>
        <Form.Item>
          <Button onClick={() => form.current.resetFields()}>重置</Button>
          <Button type="primary" onClick={validate}>校验</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;