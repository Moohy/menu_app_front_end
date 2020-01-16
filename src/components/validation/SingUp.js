import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import { toast } from 'react-toastify';
import Loading from '../addson/Loading'

let base_url = 'https://shielded-mesa-36213.herokuapp.com'

class SingUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:"",
            email:"",
            password:"",
            name:"",
            description:'',
            address:'',
            image:''
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        setTimeout(() => {
            this.setState(prevState => {return {isActive: !prevState.isActive}})
  
            let user_id = null
            axios.post(`${base_url}/api/users/` , 
                {user: {
                        'username': this.state.username,
                        'password': this.state.password,
                        'email': this.state.email
                    }}
            )
            .then(r=>{
                console.log(r);
                user_id = r.data.user.id
                if (user_id != null) {
                    toast.success("Signed Up successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });
                    axios.post(`${base_url}/api/restaurants/` , 
                    {restaurant: {
                        'name': this.state.name,
                        'description': this.state.description,
                        'address': this.state.address,
                        'image': this.state.image,
                            'user_id': user_id
                    }}
                    )
                    .then(r=>{
                        console.log(r);
                        if (r.data.status == 201) {
                            this.props.history.push('/signin')
                            toast.success("Restaurant has been created successfully", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: false,
                                draggable: false,
                            });
                        }
                    })
                    .catch(e=>{
                        console.log(e);
                        toast.error("Something went wrong try again! Or contact our team", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: false,
                        });
                    })
                }else{
                    toast.error("User not created!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });
                }
            })
            .catch(e=>{
                console.log(e);
                toast.error("Something went wrong try again! Or contact our team", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                });
            })
        },2000)
        this.setState(prevState => {return {isActive: !prevState.isActive}})
    }
    
    render(){
        return(
        <div>
            <Loading isActive={this.state.isActive}></Loading>
           <Container>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label>
                                Email
                            </Label>
                            <Input 
                                name= {'email'}
                                value={this.state.email} 
                                placeholder = {'Enter your email'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Username
                            </Label>
                            <Input 
                                name= {'username'}
                                value={this.state.username} 
                                placeholder = {'Enter your usarname'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Password
                            </Label>
                            <Input 
                                type="password"
                                name= {'password'}
                                value={this.state.password} 
                                placeholder = {'Enter your password'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Password
                            </Label>
                            <Input 
                                type="password"
                                name= {'password_conf'}
                                // value={this.state.password} 
                                placeholder = {'Enter your password conformation'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                        <FormGroup>
                            <Label>
                                Restaurant Name
                            </Label>
                            <Input 
                                name= {'name'}
                                value={this.state.name} 
                                placeholder = {'Enter your restaurant name'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Restaurant Description
                            </Label>
                            <Input 
                                name= {'description'}
                                value={this.state.description} 
                                placeholder = {'Enter your restaurant description'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Restaurant Address
                            </Label>
                            <Input 
                                name= {'address'}
                                value={this.state.address} 
                                placeholder = {'Enter your restaurant address'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Restaurant Image
                            </Label>
                            <Input 
                                name= {'image'}
                                value={this.state.image} 
                                placeholder = {'Enter your restaurant image'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                    <Col>
                    
                    </Col>
                    <Button 
                        onClick= {this.handleSubmit}>    
                        Sign In
                    </Button>
                </Form>
           </Container>
        </div>
        )
    }
}

export default SingUp;
