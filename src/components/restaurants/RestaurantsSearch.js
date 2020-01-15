import React, { Component } from 'react'

export default class RestaurantsSearch extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.onChange} value={this.props.value} placeholder='serach for a restaurant...'></input>
            </div>
        )
    }
}
