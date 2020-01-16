import React, { Component } from 'react'
import RestaurantItem from './RestaurantItem'
import RestaurantsSearch from './RestaurantsSearch'

export default class RestaurantList extends Component {
    constructor(props) {
        super(props)
        console.log(props.restaurants);
        
        this.state = {
             restaurants: props.restaurants,
             serachInput: '',
             hideSearchBar: false,
             hideRestaurants: false
        }
    }

    handleSearch = (e) => {
        const searchValue = e.target.value;

        this.setState(function(prevState, props) {
          
          const filteredRestaurants = this.props.restaurants.filter(function(r) {
            return r.name.toLowerCase().includes(searchValue.toLowerCase())
          });
    
          return {
            serachInput: searchValue,
            restaurants: filteredRestaurants
          };
        });
    }

    handleSearchBarToAppeare = () =>{
        this.setState(prevState => {
            return{
                hideSearchBar: !prevState.hideSearchBar
            }
        })
    }
    hideRestaurants = () =>{
        this.setState(prevState => {
            return{
                hideRestaurants: !prevState.hideRestaurants
            }
        })
    }
    
    render() {
        const restaurants = this.state.restaurants.map((e,i)=>(
            <RestaurantItem key={i} restaurant={e} hideSearchBar={this.handleSearchBarToAppeare} hideRestaurants={this.hideRestaurants}/>
        ))
        return (
            <div className='container-restaurant-items'>
                {this.state.hideSearchBar ? null:<RestaurantsSearch value={this.state.serachInput} onChange={this.handleSearch} />}
                <div className='cards'>
                    {this.state.hideRestaurants ? null:restaurants}
                </div>
            </div>
        )
    }
}
