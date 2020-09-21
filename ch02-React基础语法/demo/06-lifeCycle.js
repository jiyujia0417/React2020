import React, { createElement } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

/*
组件声明周期

生命周期函数：
指在类定义的组件中才有生命周期函数

函数生命周期包含的阶段：

1.初始化：constructor()
会在其装载前被调用
在函数内任何其他的表达式之前调用super(),否则this.props在构造函数中是未定义的
（如果在constructor中要使用this.props,就必须给super加参数super(props))

作用：
初始化状态，赋值一个对象到this.state
绑定事件处理函数到一个实例

2.挂载
static getDerivedStateFromProps()
需要将其声明为静态方法，如果是实例方法，将不能被识别
组件实例化后或接受新属性时将会被调用
应该返回一个对象来更新状态，或者返回null来表明新属性不需要任何新状态
用此方法后，componentWillMount、componentWillUpdate等原始的生命周期钩子将不能使用

render()
类组件唯一必须的方法

componentDidMount()
组件挂载后立即调用，发送请求的地方

3.更新
static getDerivedStateFromProps( )

shouldComponentUpdate( )
当接收到新属性或状态时，在渲染前被调用，返回布尔值

render( )

getSnapshotBeforeUpdate( )
在最新的渲染输出提交给 DOM 前将会立即调用
该函数返回的任何值将会 作为参数被传递给componentDidUpdate

componentDidUpdate( )

4.卸载
componentWillUnmount( )

5.错误处理
componentDidCatch( )

*/

// 实例：
class Clock extends React.Component {

    //初始化
    constructor(props) {
        //会在其装载前被调用
        // 在函数内任何其他的表达式之前调用super(),否则this.props在构造函数中是未定义的
        super(props);//如果需要在构造函数中使用props，需当参数传入props
        this.state = {
            date: new Date().toLocaleTimeString(),
        }
        console.log('1-constructor');
    }

    tick() {
        this.setState({ date: new Date().toLocaleTimeString() })
    }

    //挂载
    static getDerivedStateFromProps(nextProps, prevState) {
        // 需要将其声明为静态方法，如果是实例方法，将不能被识别
        // 组件实例化后或接受新属性时将会被调用
        console.log('2-getDerivedStateFromProps');
        //应该返回一个对象来更新状态，或者返回null来表明新属性不需要任何新状态
        return null;
    }

    //组件挂载后立即调用，发送请求的地方
    componentDidMount() {
        console.log('4-componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('5-shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('6-getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('7-componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerID);
    }

    render() {
        console.log('3-render')
        return <div>
            <p>hello</p>
            <h1>北京时间：{this.state.date}</h1>
        </div>
    }
}

class App extends React.Component {

    constructor() {
        super();
        this.state = { name: 1 }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: 2 })
        }, 2000);
    }

    render() {
        return <Clock name={this.state.name} />
    }
}

ReactDOM.render(<App />, document.getElementById('root'));