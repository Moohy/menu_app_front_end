import React, { Component } from 'react';
import Menuform from './Menuform';
import AddMenuItem from './AddMenuItem';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

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
            <div className="container-menu-item">
                {/* <div className="">
                </div> */}
                <Card>
                    <CardImg top width="100%" src={this.props.item.image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{this.props.item.name}</CardTitle>
                    <CardSubtitle>{this.props.item.price} SR</CardSubtitle>
                    <CardText>{this.props.item.description}</CardText>
                    </CardBody>
                </Card>
                {/* <Menuform onChange={fields => this.onChange(fields)} restaurant_id={this.props.item.restaurant_id} menu_item_id={this.props.item.id}></Menuform>      */}
            </div>
        );
    }
}

export default MenuItem;