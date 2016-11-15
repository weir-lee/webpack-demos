import React from 'react';
import ReactDOM from 'react-dom';
// 导入一些组件
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

const App = React.createClass({
    render(){
        return(
            <div>
                <h1>App</h1>
                {
                    //把<a>变成<Link>
                }
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/inbox'>Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});

const Message = React.createClass({
    render(){
        return <h3>Message</h3>
    }
});

const Dashboard = React.createClass({
    render(){
        return <h3>Dashboard</h3>
    }
});

const Inbox = React.createClass({
    render(){
        return (
            <div>
                <h2>Inbox</h2>

                {this.props.children || 'Welcome to your Inbox'}
            </div>
        )
    }
});

const About = React.createClass({
    render(){
        return <h3>About</h3>
    }
});

ReactDOM.render(
    <div>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Dashboard}/>
                <Route path='about' component={About}/>
                <Route path='inbox' component={Inbox}>
                    <Route path='message/:id' component={Message}/>
                </Route>
            </Route>
        </Router>
    </div>,
    document.getElementById('app')
);
