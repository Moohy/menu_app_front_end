import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../addson/Loading'
import { toast } from 'react-toastify';
import { Container, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';

class AddMenuItem extends Component {
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

    onPost = e => {
        // alert("sss")
        // setTimeout(() => {
        //     this.setState(prevState => {return {isActive: !prevState.isActive}})
        
            e.preventDefault();
            

            axios.post(`https://shielded-mesa-36213.herokuapp.com/api/restaurants/${this.props.restaurant_id}/menu_items/`, this.state, {headers:{ "Authorization": localStorage.getItem("token")}})
            .then(r => {
                toast.success("Menu was created successfully", {
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
                toast.error("Menu was not created successfully", {
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
            })
        // },2000)
        // this.setState(prevState => {return {isActive: !prevState.isActive}})
    };

    render() {
        return (
            <div id="add-menu-form">
                {/* <Loading isActive={this.state.isActive}></Loading> */}
                <Row>
                <Container>
                    <Form>
                        <FormGroup>
                        <Input 
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.chengeHandler(e)}/>
                    </FormGroup>
                    {/* <br></br> */}

                    <FormGroup>
                    <Input 
                    name="image"
                    placeholder="Image"
                    value={this.state.image}
                    onChange={e => this.chengeHandler(e)}/>
                    </FormGroup>
                    
                    {/* <br></br> */}
                    <FormGroup>
                    <Input 
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={e => this.chengeHandler(e)}/>
                    </FormGroup>
                    
                    {/* <br></br> */}

                    <FormGroup>
                    <Input 
                    name="price"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={e => this.chengeHandler(e)}/>
                    </FormGroup>
                    
                    {/* <br></br> */}
                    <Button onClick={e => this.onPost(e)}>Add Menu Item</Button>
                    {/* </FormGroup> */}
                    </Form>
                </Container>
                </Row>
            </div>
        );
    }
}

export default AddMenuItem;
