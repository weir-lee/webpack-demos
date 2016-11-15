import './Hello.css';
import './Hello.scss';

var React = require('react');

// 内联样式
let style={
    backgroundColor:'blue'
}

//ES5写法，用React.createClass创建模块
// 此案例用来说明组件的声明周期，非常重要
var Hello3 = React.createClass({
    getDefaultProps(){
        console.log("getDefaultProps");
    },
    getInitialState() {
        console.log("getInitialState");
        return { liked: false };
    },
    componentWillMount(){
        console.log("componentWillMount");
    },
    componentDidMount(){
        const _that=this;
        setTimeout(function(){
            _that.setState({liked:true})
        },5000);
        setTimeout(function(){
            _that.setState({liked:true})
        },10000);
        console.log("componentDidMount");
    },
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    },
    render: function() {
        console.log("render");
        return(
            <div>
                <h1 style={style}>Hello world</h1>
                <br/>
                <img/>
            </div>
        )
    }
});

module.exports = Hello3;