import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello5 from './components/Hello/hello5.js';

// 本案例演示如何绑定react提供的事件
// 引入Hello5.js
// 事件处理
ReactDOM.render(
    <Hello5 />,
    document.getElementById('app')
);

