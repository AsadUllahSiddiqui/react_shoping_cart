import React, { Component } from 'react';


class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" herf="#">Total Counters : {this.props.total}</a>
                 
            </nav>
         );
    }
}
 
export default NavBar;