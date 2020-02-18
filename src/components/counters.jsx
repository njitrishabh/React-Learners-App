import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() { 

        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm2 m-2"
                >
                    Reset
                </button>
                {counters.map(counter => (
                    // these are props which are being sent to the counter.jsx (child class).
                    <Counter 
                    key={counter.id} 
                    onDelete = {onDelete} 
                    counter={counter}
                    onIncrement = {onIncrement} 
                    />
                ))}
            </div>    
          );
    }
}
 
export default Counters;