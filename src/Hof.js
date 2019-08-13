import React, { Component } from 'react';
class Hof  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count : 0
         }
    }   
    hitCount = (param)=>{
        this.setState({count: this.state.count + 1})

    }
    render() { 
        return ( 
            <div>
                <button onClick={this.hitCount}>Click x times</button>
                <br />
                <span>Click : {this.state.count}</span>
            </div>
         );
    }
}
 
export default Hof;