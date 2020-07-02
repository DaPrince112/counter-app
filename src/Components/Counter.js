import React, {Component} from 'react';
import { ElementClass } from 'enzyme';


export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            result: null
        }
    }


increment = (x) => {
    return x += 1;
}

decrement = (x) => {
    return x -= 1;
}

findResult = (x) =>{
    if( x >= 3){
        return "Limit Reached";
    } else
    return "";
}

decResult = (x) =>{
    if( x <= 0){
        return "racecar";
    } 
}


handleClick = () =>{
    const currentCount = this.increment(this.state.count);
    const currentResult = this.findResult(currentCount);

    if(currentCount > 3){
        this.setState({
            count: 0,
            result:""
        })
    }else
    this.setState({
        count: currentCount,
        result: currentResult
    })
}

decClick = () =>{
    const currentCount = this.decrement(this.state.count);
    const currentResult = this.decResult(currentCount);

    if(currentCount < 0){
        this.setState({
            count: 0,
            result:currResult
        })
    }else
    this.setState({
        count: currentCount,
        result: ""
    })
}

render() {
    const currCount = this.state.count;
    const result = this.state.result;
    return(
        <div className="counter">
        <h2 className="current-count">{currCount}</h2>
        <h3 className="result" style={{color: "red"}}></h3>
        <button className="increment" onClick={this.handleClick}>
            Incureasu!
        </button>
        <button className="decrement" onClick={this.decClick}>
            Decureasu!
        </button>
       </div>
     )
}
}