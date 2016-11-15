import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello/Hello.js';

//require('./app.css');

var text = "JS哈哈";
const vv = "ES6语法";
ReactDOM.render(
    <Hello/>,
    document.getElementById('app')
);

//ReactDOM.render(
//    <Hello/>,
//    document.getElementById('app')
//);


//const name="hehe";
//
//document.getElementById("app").innerText=name;