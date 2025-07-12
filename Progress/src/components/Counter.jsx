import React, { Component } from 'react';
class Counter extends Component { 

    // constructor(){
    //     super();//since counter extends component, we have to call constructore of component using super before using 'this'
    //     this.handleIncrement = this.handleIncrement.bind(this);//bind allowes to creae new instance of this for handleIncrement that shall point to the object
    // }instead of this 
    //state has any info we want to use
    //Below is about the array mapping:
    //we did it like this because in react there is no concept of loops, we are using array mapping
    //we are mapping the array elements into a list
    //when we are callung a func or a value from other file then we are using prop
    // handleIncrement=()=>{//we made it an arrow function as arrow functions inherit the bind, so we do not have to create a constructor for such functions each time
    //     this.setState({value:this.state.value+1})
    // }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0}>-</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
            </div>
        );
    }
    formatCount(){
        const {value}=this.props.counter;
        return value===0 ? "Zero" : value;
    }
    getBadgeClasses(){
        let classes="badge m-2 badge-";
        classes+=this.props.counter.value ===0 ? "warning":"primary";
        return classes;
    }
}
export default Counter;