import React from 'react';
import ReactDOM from 'react-dom';

// alt shift + 上下键   复制一行
// alt + 上下键         移动一行
// 按住alt ，鼠标点击
// Ctrl + shift + 左右键，选中整个单词
// ctrl+shift+L 


let List = (props)=>{
  return <ul>
    {
      props.data.map(
        (item)=><li key={item.id}>{item.title}</li>
      )
    }
  </ul>
}

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    fetch('https://cnodejs.org/api/v1/topics')
    .then(res=>res.json())
    .then( ({data}) => {
      this.setState({data})
    })
  }

  getData = (page)=>{
    fetch('https://cnodejs.org/api/v1/topics?page='+page)
    .then(res=>res.json())
    .then( ({data}) => {
      this.setState({data})
    })
  }
  
  render(){
    const { data } = this.state;
    const btns = [1,2,3,4,5];
    return <div>
      {
        btns.map(
          (item)=>(
            <button 
              key={item}
              onClick={()=>this.getData(item)}
            >
              {item}
            </button>
        ))
      }
      <List data={data}/>
    </div>
  }
}

ReactDOM.render(
  <Home data='abc'/>,
  document.getElementById('root')
);