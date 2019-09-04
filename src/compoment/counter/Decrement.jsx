import React, { Component } from 'react'

export class Decrement extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <botton type="button" id="button-addon1" className="btn btn-outline-danger">DecrementBy:</botton>
                    <input type="text" className="form-control" placeholder="" />
                </div>
            </div>
            
        )
    }
}

export default Decrement
