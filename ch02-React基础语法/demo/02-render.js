import './index.css';

/*
二、元素渲染
React元素渲染过程：
JSX：Babel编译 + react.js构造
JavaScript对象结构：ReactDOM.render(将React元素传递ReactDOM.render方法把对象渲染到页面中去)
DOM元素：插入页面
*/
// 1、在首页中添加一个id='root'的<div>，节点的所有内容将由ReactDOM来管理
// 2、将React元素传递给ReactDOM.render方法，将其渲染到页面中去
// const ele = <h1>hello world!</h1>
// ReactDOM.render(ele,document.getElementById('root'));

// 使用原生js来实现框架

const eleObj = {
    type: 'h1',
    props: {
        className: 'box',
        id: 'box',
        children: ['hello', {
            type: 'div',
            props: {
                className: 'box',
                id: 'box',
                children: ['world']
            }
        }]
    }
}

function render(eleObj, container) {
    // 第一个参数：渲染的对象；第二个参数：渲染到哪
    //解构
    const { type, props } = eleObj;
    //创建第一层的节点
    let ele = document.createElement(type);
    //遍历属性对象，将属性添加到第一层节点对象上
    for (let prop in props) {
        if (prop === 'children') {
            //将第一层节点对象的子元素添加进去
            props.children.forEach((child) => {
                if (typeof (child) == "object") {
                    //如果是对象
                    render(props.children, ele);
                } else {
                    //如果是字符串，第一层元素节点就创建出来了
                    let txt = document.createTextNode(child);
                    ele.appendChild(txt);
                }
            })
        } else if (prop === 'className') {
            ele.setAttribute('class', props['className']);
        } else {
            ele.setAttribute(prop, props[prop]);
        }
    }
    //将第一层dom节点添加到container中
    container.appendChild(ele);
}

render(eleObj, document.querySelector('#root'));

