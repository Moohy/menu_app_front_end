import React from 'react'
import axios from 'axios'

export default class LandingPageRestaurantCards extends React.Component {
    state = {
        restaurants: []
    };
    componentDidMount() {
        axios.get("https://shielded-mesa-36213.herokuapp.com/api/restaurants").then(res => {
            console.log(res.data.restaurants);
            this.setState({ restaurants: res.data.restaurants });
        });
    }

    imageClick = () => {
        console.log(); //links to the restaurant's page
    } 

    render() {
        return (
            <div>
               {this.state.restaurants.map(e => <img onClick={(e) => this.imageClick(e)} src={e.image}/>)}
            </div>
        );
    }
}