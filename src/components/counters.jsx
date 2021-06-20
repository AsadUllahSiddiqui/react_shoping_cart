import React, { Component,useState } from 'react';
import counter from './counter';
import Counter from './counter';

class counters extends Component {
   
    render() { 
        return (
        <div>

        <button className={"btn btn-sm m-2 btn-primary"} onClick={this.props.onReset} >reset</button>
       
        {this.props.counters.map(counters=>
        <Counter
        key={counters.id}
        onDelete={this.props.onDelete}
        onIncrement={this.props.onIncrement}
        counter={counters}
        selected={true}>
        <h4>Counter #{counters.id}</h4>
        </Counter>)}
        </div>
        );
    }
}
 
export default counters ;