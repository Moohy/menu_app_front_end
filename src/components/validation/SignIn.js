import React, {Component} from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
// import API from '../../CONSTANTS'

let base_url = 'https://shielded-mesa-36213.herokuapp.com'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:""
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        axios.post(`${base_url}/api/login` , 
             {auth: this.state}
        )
        .then(r=>{
            console.log(r);
            if (r.data.jwt) {
                localStorage.setItem('token', r.data.jwt)
                this.props.loginStatus(true)
                // this.props.history.push('/')
            }else{

            }
            
        })
        .catch(e=>{
            console.log(e);
        })
    }
    
    render(){
        return(
        <div>
           <Container>
                <Form>
                    <FormGroup>
                        <Label>
                            Username
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

