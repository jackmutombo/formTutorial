import React, { Component } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import Result from './Result';

export class Counter extends Component {
    constructor(){
        super()
        this.state = {
            num : 0
        }
        this.handleDecrement= this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement(step=1){
        console.log(step, "step")
        this.setState((prevState) => ({
            num: prevState.num + step
        }))
    }

    handleDecrement({step} = 1){
        this.setState((prevState) => ({
            num: prevState.num - step
        }))
    }


    render() {
        const{ num } = this.state;
        return (
            <div>
                <div className="row justify-content-md-center">                 
                    <div className="col-4">
                       <Result>
                           {num}
                       </Result>
                    </div>                 
                </div>
                <div className="row justify-content-around">
                    <div className='col-4'>
                        <Decrement number={num} dec={this.handleDecrement}/>                        
                    </div>
                    <div className='col-4'>
                        <Increment numbr= {num} incr= {this.handleIncrement}/>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter
