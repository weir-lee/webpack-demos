import React, {Component} from 'react';

// ES6写法
// 本案例演示如何绑定react提供的事件
// 单机事件和参数传递

export default class Hello5 extends Component {
    // 默认属性
    static defaultProps = {

    }; // 注意这里有分号

    static propTypes = {

    }; // 注意这里有分号

    // 用构造函数的方式初始化state
    constructor(props){
        super(props);
        this.state = {liked:false};
    }

    handleClick(pram1, pram2, pram3, e){
        console.log(pram1);
        console.log(pram2);
        console.log(pram3);
        console.log(e);
        // 改变状态用this.setState()
        this.setState({liked: !this.state.liked});
        //var that = this;
        //function testThis(){
        //    console.log(this);
        //    //console.log(this.state);
        //}
        //testThis();
    }

    // 箭头函数
    //handleClick=(param,pm2,pm3,e)=>{
    //    //console.log(param);
    //    //console.log(pm2);
    //    //console.log(pm3);
    //    //console.log(e);
    //    this.setState({ liked: !this.state.liked });
    //}
    render(){
        var isliked = this.state.liked? 'like':'don\'t like';
        return(
            // ES6要这样写， bind(this)
            //<div onClick={this.handleClick}>
            <div onClick={this.handleClick.bind(this, 23, 'abc',function(){})}>
                You {isliked} this. Click to toggle.
            </div>
        );
    }
}