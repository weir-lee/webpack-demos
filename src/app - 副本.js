import React from 'react';
import ReactDOM from 'react-dom';

// 首先我们需要导入一些组件...
import { Router, Route, Link, hashHistory} from 'react-router';

// 然后我们从应用中删除一堆代码和
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
                {this.props.children}
            </div>
        )
    }
})

// 新建一个组件让其在 Inbox 内部渲染
const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

// 新建一个组件让其在 Inbox 内部渲染
//const Message = React.createClass({
//    render() {
//        return <h3>Message</h3>
//    }
//})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {/* 渲染这个 child 路由组件 */}
                {/*this.props.children || "Welcome to your Inbox"*/}
            </div>
        )
    }
})

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
ReactDOM.render((
    <Router >
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} />
        </Route>
    </Router>
), document.getElementById('app'))