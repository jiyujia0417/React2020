import React, { Children, createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
更新渲染元素
React元素是不可变的
React元素呗创建后，无法改变其内容或属性

使用React的DOM算法进行比较高效的更新
*/

// 时间一秒一秒变化显示，更新渲染元素，观察渲染效率：
// 高效更新：性能高，不会把所有dom元素渲染一遍
setInterval(() => {
    const ele = <div>现在是北京时间：<h1>{new Date().toLocaleTimeString()}</h1></div>
    ReactDOM.render(ele, document.getElementById('root'));
}, 1000)


