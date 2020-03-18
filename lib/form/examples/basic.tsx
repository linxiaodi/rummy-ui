import React, { useRef, useState } from 'react';
import { Form, Input, Button } from 'rummy-ui'
import { FormRef } from 'rummy-ui/form/index'

const Item = Form.Item

const rules = {
  username: {
    require: true,
    maxLen: 12
  },
  password: {
    require: true
  }
}

const App = () => {
  const form = useRef<any>(null)
  const initialVal = { username: '1', password: '11' }
  const onSubmit = () => {
    console.log(form.current.model);
  }

  return (
    <Form ref={form} initialValue={initialVal} rules={rules}>
      <Form.Item prop="username" label="账号">
        <Input className="w-330"/>
      </Form.Item>
      <Form.Item prop="password" label="密码">
        <Input className="w-330" type="password"/>
      </Form.Item>
      <Form.Item>
        <Button onClick={() => form.current.resetModel()}>重置</Button>
        <Button onClick={onSubmit} type="primary">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;