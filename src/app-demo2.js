import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello/Hello.js';

// 扩展属性
var props = {};
props.foo = '123';
props.bar = 'aaa';


//<Hello {...props}/>

// 扩展属性的使用, 引入Hello.js
ReactDOM.render(
    <Hello haha="555" {...props}/>,
    document.getElementById('app')
);

