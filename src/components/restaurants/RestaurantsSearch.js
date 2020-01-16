import React, { Component } from 'react'

export default class RestaurantsSearch extends Component {
    render() {
        return (
            <div className='search-container'>
                <input id="search" type="text" onChange={this.props.onChange} value={this.props.value} placeholder='serach for a restaurant...'></input>
            </div>
        )
    }
}
