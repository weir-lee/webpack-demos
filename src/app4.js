import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello4 from './components/Hello/Hello4.js';

// 本案例演示了如何给DOM元素绑定react未提供的事件，注册事件和取消事件
// 结合组件的生命周期，在组件渲染到真实DOM后再注册事件
//在组件生命周期离开的时候要把所有在组件生命周期中注册的方法取消掉，不取消会出现意想不到的错误，影响其他组件
// 引入Hello4.js
// 事件处理
ReactDOM.render(
    <Hello4 />,
    document.getElementById('app')
);

