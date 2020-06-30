import React, {Component} from 'react';


export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            result: null
        }
    }


render() {
    const currCount = this.state.count;
    const result = this.state.result;
    return(
        <div className="counter">
        <h2 className="current-count">{currCount}</h2>
        <h3 className="result" style={{color: "red"}}></h3>
        <button className="button btn prime">
            Incureasu!
        </button>
       </div>
     )
}
}