import React, {  } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
三、组件
React组件是小的，可复用的代码片段
*/

// 1、函数定义组件：
// 接收单一的props对象
// （是组件的输入内容，从父组件传递给子组件的数据（属性）；props是只读的，组件名称必须以大写字母开头
// 返回一个React元素
// 例一：
// function App(props) {
//     //组件名大写，与原生js相区别
//     const { title, id } = props;
//     return <div>
//         <h1>APP组件内容</h1>
//         <div>title:{title}</div>
//         <div>id:{id}</div>
//     </div>
// }
// ReactDOM.render(<App title="app" id="123"/>,document.getElementById('root'));

// 例二：
// function Hello(props) {
//     return <h1>hello,{props.name}</h1>
// }
// ReactDOM.render(<Hello name="React" />, document.getElementById('root'));

// 2、类定义组件
// React提供了React.Component抽象基础类
// 直接引用React.Component无意义，通常是用super继承他
// 至少定义一个render()方法
class Hello extends React.Component {
    render() {
        return <h1>hello,{this.props.name}</h1>
    }
}
ReactDOM.render(<Hello name="React" />, document.getElementById('root'));
