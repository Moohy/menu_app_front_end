import React, { Component } from 'react';
import axios from 'axios';
// import RestaurantItem from './RestaurantItem'
import RestaurantList from './RestaurantList';
import Loading from '../addson/Loading'

let base_url = 'https://shielded-mesa-36213.herokuapp.com'

export default class Restaurants extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            restaurants: [],
            isActive: true
        }
    }

    componentDidMount = () =>{
        axios.get(`${base_url}/api/restaurants`)
        .then(r=>{
            console.log(r);
            
            this.setState(prevState => {
                return{
                    restaurants: r.data.restaurants,
                    isActive: !prevState.isActive
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
                <Loading isActive={this.state.isActive}></Loading>       
                {this.state.isActive? null : <RestaurantList restaurants={this.state.restaurants} />}
            </div>
        )
    }
}
