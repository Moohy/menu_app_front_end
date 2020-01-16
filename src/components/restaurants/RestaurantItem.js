import React, { Component } from 'react'
import Menu from '../menu/Menu'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import './Restaurant.css'

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
        this.props.hideRestaurants()
    }
    
    render() {
        const restaurant = (
            <div className="" onClick={e=>this.handleGetRestaurant(e)}>
                <Card>
                    <CardImg top width="100%" src={this.props.restaurant.image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{this.props.restaurant.name}</CardTitle>
                    <CardSubtitle>{this.props.restaurant.address}</CardSubtitle>
                    <CardText>{this.props.restaurant.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )

        const menu = (
            <React.Fragment>
                <h1 className='page-title'>Menu</h1>
                <div className='back-button-container'>
                    <Button color="primary" id='back-button' onClick={e=>this.handleGetRestaurant(e)}>
                        Back
                    </Button>
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
