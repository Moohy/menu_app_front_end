import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';
import Menuform from './Menuform';
import AddMenuItem from './AddMenuItem'

export default class Menu extends React.Component {
    state = {
        menu: [],
    };

    componentDidMount() {
        axios.get(`https://shielded-mesa-36213.herokuapp.com/api/restaurants/${this.props.restaurant_id}/menu_items`).then(res => {
            console.log(res.data.menu_items);
            this.setState({ menu: res.data.menu_items });
        });
    }

    onChange = upadatedValue => {
        this.setState({ 
            fileds: {
            ...this.state.fields,
            ...upadatedValue 
        }
    });
    };



    render() {
        const menu_items = this.state.menu.map((e,i) =>(
            <MenuItem key={i} item={e}/>
        ))
        return (           
            <div className="item container-m">
                {menu_items}
                <AddMenuItem  onChange={fields => this.onChange(fields)} restaurant_id={this.props.restaurant_id}></AddMenuItem>
                
            </div>       
        )
    }
}

