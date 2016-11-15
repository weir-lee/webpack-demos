import React,{Component} from 'react';

var TodoList = React.createClass({
    render: function(){
        var createItem = function(item){
            return <li key={item.id}>{item.text}</li>
        };
        return <ul>{this.props.items.map(createItem)}</ul>
    }
});

var TodoApp = React.createClass({
    getInitialState: function(){
        return {items:[], text:''};
    },
    onChange: function(e){
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();
        var nextItems = this.state.items.concat([{text:this.state.text,id:Date.now()}]);
        var nextText = '';
        this.setState({items:nextItems,text:nextText});
    },


    render: function(){
        return (
            <div>
                <h3>ToDp</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    {
                    //在ES5里面事件不需要bind(this),ES6需要
                    //下面onChange={this.onChange}
                    }
                    <input value={this.state.text} onChange={this.onChange}/>
                    <button>{'Add # '+(this.state.items.length+1)}</button>
                </form>
            </div>
        )
    }
});

module.exports = TodoApp;