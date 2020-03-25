import React from 'react';
import Table from '../../example/table';
import Demo from '../../example/demo';

const FormExample = () => {
  return (
    <div>
      <h2>Form表单</h2>
      <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</p>
      <Demo title="基础使用" desc="" path="form/examples/basic"/>
      <Demo title="表单校验" desc="" path="form/examples/validate"/>
      <Demo title="表单自定义校验" desc="" path="form/examples/custom-validate"/>
      <h3>API</h3>
      <Table title="Form Attributes" source={[
        ['initialValue', '表单的默认value', 'object', '', ''],
        ['rules', '表单校验规则', 'object', '', '']
      ]}/>

      <Table title="Form ref" type="method" source={[
        ['resetFields', '重置所有值为并重置所有错误信息', '(model) =>'],
        ['validate', '对整个表单进行校验，返回值也是一个promise对象，resolve表示执行成功返回表单value, reject表示失败返回表单的错误信息', '(e?, model) => e'],
        ['model', '表单内容', 'object']
      ]}/>
    </div>
  );
};

export default FormExample;