import React, { Component } from 'react';
import axios from 'axios';
// import RestaurantItem from './RestaurantItem'
import RestaurantList from './RestaurantList';

export default class Restaurants extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            restaurants: [],
            loading: true
        }
    }

    componentDidMount = () =>{
        axios.get('https://shielded-mesa-36213.herokuapp.com/api/restaurants')
        .then(r=>{
            console.log(r);
            
            this.setState(prevState => {
                return{
                    restaurants: r.data.restaurants,
                    loading: !prevState.loading
                }
            });
        })
        .catch(e=>{
            console.log(e);
        })
    }
    


    render() {
        return (
            <div>           
                {this.state.loading? null : <RestaurantList restaurants={this.state.restaurants} />}
            </div>
        )
    }
}
