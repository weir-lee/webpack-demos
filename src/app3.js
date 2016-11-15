import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello3 from './components/Hello/Hello3.js';

// 此案例用来说明组件的声明周期，非常重要
// 引入Hello3.js
ReactDOM.render(
    <Hello3 />,
    document.getElementById('app')
);

