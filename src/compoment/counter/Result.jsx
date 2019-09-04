import React, { Component } from 'react'

export class Result extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Result
