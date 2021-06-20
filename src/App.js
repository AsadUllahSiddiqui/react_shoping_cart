
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

import React, { Component } from 'react';
 
class App extends Component {
  state = {
    counters:[
        {id:1,value:0},
        {id:2,value:3},
        {id:3,value:4},
        {id:4,value:5},
        {id:5,value:6}
    ]
    
}

handledelete=(CounterId)=>{
 const counters=this.state.counters.filter(c=> c.id!==CounterId);
 this.setState({counters:counters});
};
handleincrement=(Counter)=>{
    const counters = [...this.state.counters]
    const index=counters.indexOf(Counter);
    counters[index]={...Counter};
    counters[index].value++;
    this.setState({counters});
   };
handlereset=()=>{
   const counters= this.state.counters.map(c=> {
       c.value=0;
       return c;
    });
   this.setState({counters:counters});
}
  render() { 
    return (  
      <React.Fragment>
        <NavBar total={this.state.counters.filter(c=>c.value>0).length}/>
       
          <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handlereset}
            onIncrement={this.handleincrement}
            onDelete={this.handledelete}
          />
          </main>
          </React.Fragment>
         
    );
  }
}
 
export default App;
