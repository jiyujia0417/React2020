import React, { createElement } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

/*
State(状态)
私有的、完全受控于当前组件，组件外部是无法进行修改的
类定义的组件特有的属性
需要有状态的声明（构造函数是其唯一能够初始化this.state的地方）
*/
//智能组件
class Clock extends React.Component {
    //类后面没有小括号，直接是大括号
    constructor() {//es6对类的默认方法
        super();//将父类中的this对象继承给子类
        //声明状态
        this.state = {
            date: new Date().toLocaleTimeString()
        }
        // setInterval(() => {
        //     this.setState({ name: new Date().toLocaleTimeString() })
        // }, 1000)
    }

    render() {
        return <div>
            <p>hello</p>
            <div>时间:{this.state.date}</div>
        </div>
    }
}
ReactDOM.render(<Clock />, document.getElementById('root'));
