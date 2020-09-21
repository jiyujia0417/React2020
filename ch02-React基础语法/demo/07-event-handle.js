import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
四、事件处理

事件绑定

React事件绑定属性的命名采用驼峰式写法
采用JSX语法需要传入一个函数作为事件处理函数，而不是一个字符串
*/
// function fn() {
//     console.log('hello world');
// }
// let ele = <button onClick={fn}>事件处理</button>
// ReactDOM.render(ele, document.getElementById('root'));

// 事件处理函数绑定this：类的方法默认是不会绑定this的

// 1、通过bind绑定this
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             content: 'hello'
//         }
//         this.handleClick = this.handleClick.bind(this);//加上绑定，下面的函数中的this才能指向该组件
//     }
//     handleClick() {
//         console.log(this);// this是undefined
//         this.setState({ content: 'world' });// 报错
//     }
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// 2、箭头函数（可以直接绑定this，一般写代码的时候用箭头函数
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            content: 'hello'
        }
    }

    //箭头函数形式this指向该组件
    handClick = () => {
        console.log(this);
        this.setState({ content: 'world' });
    }

    render() {
        return (
            <div>
                <p>{this.state.content}</p>
                <button onClick={this.handClick}>Click</button>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

