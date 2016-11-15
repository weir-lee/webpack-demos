import React, {Component} from 'react';

// ES6写法
// 本案例演示了如何给DOM元素绑定react未提供的事件，注册事件和取消事件
// 结合组件的生命周期，在组件渲染到真实DOM后再注册事件
//在组件生命周期离开的时候要把所有在组件生命周期中注册的方法取消掉，不取消会出现意想不到的错误，影响其他组件

let style = {
    backgroundColor: 'blue',
    fontSize: '50px',
    color: 'red'
};

export default class Hello4 extends Component {
    // 默认属性
    static defaultProps = {
        autoPlay: false,
        maxLoops: 10,
    }; // 注意这里有分号

    static propTypes = {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
    }; // 注意这里有分号
    // 用构造函数的方式初始化state
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
        console.log('componentWillMount2');
    }
    componentDidMount(){
        console.log('componentDidMount2');
        window.addEventListener('resize',function(){
           console.log('窗体变化了');
        });
    }
    shouldComponentUpdate(){
        return true;
    }
    componentWillUnmount(){
        //在组件生命周期离开的时候要把所有在组件生命周期中注册的方法取消掉
        window.removeEventListener('resize', function(){
            console.log('窗体大小发生变化事件取消了');
        });
    }
    render(){
        return(
            <div>
                <h1 style={style}> hello4</h1>
            </div>
        )
    }
}