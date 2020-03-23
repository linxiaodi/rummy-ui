import React from 'react';
import Validator from '../../lib/_util/validator/index'

const NotFound = () => {
    const v = new Validator({
        username: [{ require: true, message: '请输入姓名' }],
        age: [{require: true, message: '请输入年龄'}]
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
