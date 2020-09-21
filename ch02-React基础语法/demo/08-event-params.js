import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
事件处理函数传参
*/
// 传参的两种形式：
// 1、函数声明时事件对象作为最后一个参数传入

// 2、箭头函数的事件对象显示传入（bind隐式传入

// 事件处理函数传参
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			content:'hello'
		}
	}
	//要将事件对象参数放在最后一个
	handleClick = (name,ev)=>{
		console.log(name);
		console.log(ev);
	}
	// 将原生的onchange事件进行了优化，实现用户输入的实时响应处理
	handleChange = (e)=>{
		console.log(e.target.value);
	}
	render() {
		return (
			<div>
				<p>{this.state.content}</p>
				<input type="text" onChange={this.handleChange}/>
				<button onClick={this.handleClick.bind(this,'liu')}>Click</button>
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));