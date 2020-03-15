import React, { useState } from 'react';
import { Form, Input, Button } from 'rummy-ui'

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
  const [form, setForm] = useState({ username: '', password: '' })

  const setUsername = (val: string) => {
    console.log(val);
    setForm({ ...form, username: val })
  }

  const setPassword = (val: string) => {
    console.log(val);
    setForm({ ...form, password: val })
  }

  return (
    <Form model={form} rules={rules}>
      <Form.Item prop="username" label="账号">
        <Input className="w-330" value={form.username as string} onChange={(e) => setUsername(e.target.value)}/>
      </Form.Item>
      <Form.Item prop="password" label="密码">
        <Input className="w-330" type="current-password" value={form.password as string} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Button>重置</Button>
        <Button type="primary">提交</Button>
      </Form.Item>
    </Form>
  );
};

export default App;