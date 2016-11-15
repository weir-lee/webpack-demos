import React, {Component} from 'react';

// ES6写法
// 本案例演示表单的状态属性，受控组件、非受控组件

export default class MyInputFocus extends Component {
    // 默认属性
    static defaultProps = {}; // 注意这里有分号

    // 属性类型
    static propTypes = {}; // 注意这里有分号

    // 用构造函数的方式初始化state
    constructor(props){
        super(props);
        // 初始化state
        this.state = {userInput: ''};
    }

    handleClearAndFocus(){
        this.setState({userInput:''},function(){
            this.refs.theInput.focus();
            //console.log(this.refs.input2)
        })
    }

    handleChange(e){
        console.log(e.target.value);
        console.log(this.refs.theInput.value);
        this.setState({userInput: e.target.value});
    }

    render(){
        return(
            <div>
                <div onClick={this.handleClearAndFocus.bind(this)}>
                    Click to Focus and Reset!
                </div>
                <input
                    ref="theInput"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
                <input ref="input2" value="非受控组件"/>
            </div>
        );
    }
}