import './hello.css';
import './hello.scss';
import React, {Component} from 'react';

let style={
    backgroundColor:'yellow'
}

// ES6语法
export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1 style={style}>Hello world</h1>
                <h2>哈哈哈哈</h2>
                <img/>
            </div>
        )
    }
}

