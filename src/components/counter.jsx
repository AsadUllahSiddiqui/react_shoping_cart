import React, { Component } from 'react';

class counter  extends Component {
    style={
      fontSize:50,
      fontWeight:"bold"
    };
    render() { 
        return(
        <div> 
        {this.props.children}
        {/*<img src={this.state.imageurl}></img>*/}
        <span style={this.style} >{this.formatcount()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className={this.get_incriment_button_style()}>increment</button>
        <button onClick={()=>this.props.onDelete( this.props.counter.id)} className={"btn btn-sm m-2 btn-danger "}>delete</button>
        {/*this.state.tags.length===0 &&"please create new tag"*/}
        {/*this.rendertags()*/}
        </div>);
    }
    get_incriment_button_style() {
        let buttonclasses = "btn btn-sm m-2 btn-";
        if (this.props.counter.value === 0) { buttonclasses += "warning"; }
        else { buttonclasses += "primary"; }
        return buttonclasses;
    }
    rendertags(){
        if(this.state.tags.length===0) 
            return <p>there are no tags!!</p>;
        return <ul>{this.state.tags.map(tags=><li key={tags}>{tags}</li>)}</ul>;
    }
    formatcount() {
        const value=this.props.counter.value;
        if(value===0){
            return 'zero';
        }
        else
            return value;

    }
}
 
export default counter ;