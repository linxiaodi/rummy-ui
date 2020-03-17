import React from 'react';
import Table from '../../example/table';
import Demo from '../../example/demo';

const FormExample = () => {
  return (
    <div>
      <h2>Form表单</h2>
      <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</p>
      <Demo title="基础使用" desc="" path="form/examples/basic"/>
      <h3>API</h3>
      <Table title="Form Attributes" source={[
        ['defaultValue', '表单的默认value', 'object', '', ''],
        ['rules', '表单校验规则', 'object', '', '']
      ]}/>

      <Table title="Form Methods" type="method" source={[
        ['resetFields', '重置所有', 'model'],
        ['validate', '对整个表单进行校验', '(e?) => e']
      ]}/>
    </div>
  );
};

export default FormExample;