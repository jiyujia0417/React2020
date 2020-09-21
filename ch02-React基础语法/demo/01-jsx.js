import React, { Children, createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
一、JSX语法
JavaScript 和 XML 结合的一种格式
利用HTML语法来创建虚拟DOM
eg：const ele = <h1>hello world</h1>

表达式中插入变量：const elem = <h1>{ele}</h1>;

React 元素实质上是一个普通的对象
*/

// ReactDOM.render(<h1>hello</h1>,document.getElementById('root'));

// jsx 语法（语法糖）
// const ele = <h1>hello world!</h1>
// ReactDOM.render(ele, document.getElementById('root'));

// jsx重使用表达式
// const str = 'hello world';
// const ele = <h1>{str}</h1>;
// ReactDOM.render(ele, document.getElementById('root'));

// 元素包含：元素类型、元素属性、子节点
//react元素实际上是一个对象，类似下面的普通JavaScript对象
// const ele = {
//     type:"h1",
//     props:{
//         children:["hello world"],
//         className: "box",
//         id: "ele"
//     }
// };

// Babel 编译:把JSX转换为一名为React.createElement()的方法调用，返回JavaScript对象
// 参数：元素名称（必须）、元素属性（可选）、子节点（可选）
// ReactDOM.render(<h1 id="ele" class="elem"><div class="div" id="div1">hello world!</div></h1>, document.getElementById('root'));
// 等于
const ele = ReactDOM.render(React.createElement("h1", {
    id: 'ele',
    className: 'elem'
  }, React.createElement("div", {
    className: "div",
    id: "div1"
  }, "hello world!")
), document.getElementById('root'));
console.log(ele);