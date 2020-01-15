import React, { Component } from 'react';
import Menuform from './Menuform';
import AddMenuItem from './AddMenuItem';

class MenuItem extends Component {

    state = {
        fields: {}
    };

    onChange = upadatedValue => {
        this.setState({ 
            fileds: {
            ...this.state.fields,
            ...upadatedValue 
        }
    });
    };


    render() { 
        return (
            <div className="container">
                <div className="card">
                <h3>{this.props.item.name}</h3>
                <img src={this.props.item.image} className="foodpic"></img>
                <p>{this.props.item.description}</p>
                <p>{this.props.item.price}</p>
                <Menuform onChange={fields => this.onChange(fields)} restaurant_id={this.props.item.restaurant_id} menu_item_id={this.props.item.id}></Menuform>     
                </div>
            </div>
        );
    }
}

export default MenuItem;