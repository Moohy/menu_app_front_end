import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                <h3>{this.props.item.name}</h3>
                <img src={this.props.item.image} className="foodpic"></img>
                <p>{this.props.item.description}</p>
                <p>{this.props.item.price}</p>                
                </div>
            </div>
        );
    }
}

export default MenuItem;