import React from 'react'
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

// 首先我们需要导入一些组件...
import { Router, Route, Link,hashHistory } from 'react-router'

// 增加一些 <Link> 元素...
const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                {/* 把 <a> 变成 <Link> */}
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>

                {/*
                 接着用 `this.props.children` 替换 `<Child>`
                 router 会帮我们找到这个 children
                 */}

            </div>
        )
    }
})

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
), document.body)