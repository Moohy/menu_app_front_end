import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../addson/Loading'
import { toast } from 'react-toastify';

class Menuform extends Component {
    state = {
        name: "",
        image: "",
        description: "",
        price: "",
        restaurant_id: this.props.restaurant_id
    };

    chengeHandler = e => {
        this.props.onChange({ [e.target.name]: e.target.value })
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        setTimeout(() => {
            this.setState(prevState => {return {isActive: !prevState.isActive}})
            e.preventDefault();
            // this.props.onSubmit(this.state);
            axios.put(`https://shielded-mesa-36213.herokuapp.com/api/restaurants/${this.props.restaurant_id}/menu_items/${this.props.menu_item_id}`, this.state, {headers:{ "Authorization": localStorage.getItem("token")}})
            .then(r => {
                toast.success("Menu Item updated successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                });
                console.log(r);
            })
            .catch(e=>{
                toast.error("Menu Item was not updated successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                });
                console.log(e);
            })
            // to clear
            this.setState({
            name: "",
            image: "",
            description: "",
            price: ""
            });

            this.props.onChange({
            name: "",
            image: "",
            description: "",
            price: ""
            });
        },2000)
        this.setState(prevState => {return {isActive: !prevState.isActive}})
    };

    render() {
        return (
            <div>
                <Loading isActive={this.state.isActive}></Loading>
                <form>
                    <input
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.chengeHandler(e)}>
                    </input>
                    <br></br>

                    <input
                    name="image"
                    placeholder="Image"
                    value={this.state.image}
                    onChange={e => this.chengeHandler(e)}>
                    </input>
                    <br></br>

                    <input
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={e => this.chengeHandler(e)}>
                    </input>
                    <br></br>

                    <input
                    name="price"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={e => this.chengeHandler(e)}>
                    </input>
                    <br></br>
                    <button onClick={e => this.onSubmit(e)}>Edit Item</button>
                </form>
            </div>
        );
    }
}

export default Menuform;
