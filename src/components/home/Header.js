import React, { Component } from 'react';
import Restaurants from '../restaurants/Restaurants'
import ContactUs from '../statics/ContactUs'
import AboutUs from '../statics/AboutUs'
import Menu from '../menu/Menu'
import SignIn from '../validation/SignIn'
import AddMenuItem from '../menu/AddMenuItem'
import Logout from '../validation/Logout'
import SingUp from '../validation/SingUp'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import LandingPage from './LandingPage';
import axios from 'axios'

class Header extends Component {
      constructor(props){
        super(props)
        this.state={
          isLoggedIn: false
        }
      }

      componentDidMount=()=>{
        axios.get("https://shielded-mesa-36213.herokuapp.com/api/logged_in", {headers:{ "Authorization": localStorage.getItem("token")}}).then(res => {
            this.setState({isLoggedIn: res.data})
        });
      }

      loginStatus = (logged_in) =>{
        this.setState({isLoggedIn: logged_in})
      }
    
    render() {
        const loggedInLinks = (
            <div>
            <Link to="/add_menu_item">Add Menu Item</Link>{" "}
            <Link to="/logout">Logout</Link>{" "}
            </div>
        )

        const loggedInRoutes = (
            <div>
            <Route path="/add_menu_item" component={AddMenuItem} />
            <Route path="/logout" component={() => <Logout loginStatus={this.loginStatus}/>} />
            </div>
        )

        const loggedOutLinks = (
            <div>
            <Link to="/signin">sign in</Link>{" "}
            <Link to="/signup">signup</Link>{" "}
            </div>
        )

        const loggedOutRoutes = (
            <div>
            <Route path="/signin" component={() => <SignIn loginStatus={this.loginStatus}/>} />
            <Route path="/signup" component={SingUp} />
            </div>
        )
        
        return (
            <div className='logo'>
                <Router>    
                <div>
                    <nav>
                        <Link to="/">Home</Link>{" "}
                        <Link to="/restaurants">Restaurants</Link>{" "}
                        <Link to="/contactus">ContactUs</Link>{" "}
                        <Link to="/aboutus">AboutUs</Link>{" "}
                        <Link to="/menu">Menu</Link>{" "}
                        {this.state.isLoggedIn? loggedInLinks : loggedOutLinks }

                    </nav>
                </div>
                
                <Route exact path="/" component={LandingPage} />
                 <Route path="/restaurants" component={Restaurants} /> 
                 <Route path="/ContactUs" component={ContactUs} /> 
                 <Route path="/aboutus" component={AboutUs} />
                 <Route path="/menu" component={Menu} />
                 {this.state.isLoggedIn? loggedInRoutes: loggedOutRoutes}
        </Router>
            </div>            
        );
    }
}

export default Header;