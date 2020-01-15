import React, { Component } from 'react'
import Menu from '../menu/Menu'

export default class RestaurantItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             toMenu: false
        }
    }

    handleGetRestaurant = (e) => {
        this.setState(prevState=>{return{toMenu: !prevState.toMenu}})
        this.props.hideSearchBar()
    }
    
    render() {
        const restaurant = (
            <div className="card" onClick={e=>this.handleGetRestaurant(e)}>
                {this.props.restaurant.name}
            </div>
        )

        const menu = (
            <React.Fragment>
                <div onClick={e=>this.handleGetRestaurant(e)}>
                    Back
                </div>
                <Menu restaurant_id={this.props.restaurant.id} />
            </React.Fragment>
        )

        return (
            <div >
                {this.state.toMenu ? menu : restaurant}
            </div>
        )
    }
}
