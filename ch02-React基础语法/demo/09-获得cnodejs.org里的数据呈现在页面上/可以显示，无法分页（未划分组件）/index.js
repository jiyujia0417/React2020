import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

console.log($);

const List = (props) => {
    return <ul>
        {
            props.data.map(
                (item) => <li>{item.title}</li>
            )
        }
    </ul>
}

const Buttons = () => {
    const btns = [1, 2, 3, 4, 5];
    return <div>
        {
            btns.map((item) => <button>{item}</button>)
        }
    </div>
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res => res.json())
            .then(({ data }) => {
                // console.log(data);
                this.setState({ data });
            })

    }

    render() {
        const { data } = this.state;
        return <div>
            <Buttons />
            <List data={data} />
        </div>
    }

}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);

