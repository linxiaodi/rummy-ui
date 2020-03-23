import React from 'react';
import Validator from '../../lib/_util/validator/index'

const NotFound = () => {
    const v = new Validator({
        age: [{minLen: 10, message: '年龄长度不对'}],
        username: [{ require: true, message: '请输入姓名' }],
    })

    v.start({ username: '', age: '' }).then(() => {
        console.log('success')
    }, (error) => {
        console.log(error)
    })

    return (
        <div>
            <h1>404</h1>
        </div>
    );
};

export default NotFound;
