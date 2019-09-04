import React, { Component } from "react";

export class Increment extends Component {
  constructor() {
    super();
    this.state = {
        incrementNum: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target: {name, value}}) {

    const newValue = {...this.state[name]}
    newValue.name = Number.isInteger(parseInt(value))? value: value ===""? "": 1;
    console.log(Number.isInteger(parseInt(value))||value ==="","check")
    console.log(value ==="","check2")
    console.log(value,"value")
    console.log(newValue, 'new')

    this.setState((prevState) => ({
        [name]: newValue.name
    }));
  }
  render() {
    const { number, incr } = this.props;
    const { incrementNum } = this.state;
    return (
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <botton
            onClick={() => incr(incrementNum)}
            type='button'
            id='button-addon1'
            className='btn btn-outline-success'
          >
            IncrementBy:
          </botton>
          <input
            name="incrementNum"
            type='text'
            value={incrementNum}
            onChange={this.handleChange}
            className='form-control'
            placeholder=''
          />
        </div>
      </div>
    );
  }
}

export default Increment;
