import React, { Component } from 'react';
import Restaurants from '../restaurants/Restaurants'
import ContactUs from '../statics/ContactUs'
import AboutUs from '../statics/AboutUs'
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
            <>
            <Link className="navbar-brand" to="/add_menu_item">Add Menu Item</Link>{" "}
            <Link className="navbar-brand" to="/logout">Logout</Link>{" "}
            </>
        )

        const loggedInRoutes = (
            <>
            <Route path="/add_menu_item" component={AddMenuItem} />
            <Route path="/logout" component={() => <Logout loginStatus={this.loginStatus}/>} />
            </>
        )

        const loggedOutLinks = (
            <>
            <Link className="navbar-brand" to="/signin">SignIn</Link>{" "}
            <Link className="navbar-brand" to="/signup">SignUp</Link>{" "}
            </>
        )

        const loggedOutRoutes = (
            <>
            <Route path="/signin" component={() => <SignIn loginStatus={this.loginStatus}/>} />
            <Route path="/signup" component={SingUp} />
            </>
        )
        
        return (

            <div>
                
                <Router>    
                <>
                    <nav style={{width: '100%', backgroundColor: "#B7791F"}} className="navbar " id='nav'>
                        <div>
                            <p className='logo'>Menu App</p>
                        </div>
                        <div>
                            <Link className="navbar-brand" to="/">Home</Link>{" "}
                            {/* <div> */}
                            <Link className="navbar-brand" to="/restaurants">Restaurants</Link>{" "}
                            <Link className="navbar-brand" to="/contactus">ContactUs</Link>{" "}
                            <Link className="navbar-brand" to="/aboutus">AboutUs</Link>{" "}
                            {this.state.isLoggedIn? loggedInLinks : loggedOutLinks }
                        
                        </div>
                    </nav>
                </>
                
                <Route exact path="/" component={LandingPage} />
                 <Route path="/restaurants" component={Restaurants} /> 
                 <Route path="/ContactUs" component={ContactUs} /> 
                 <Route path="/aboutus" component={AboutUs} />
                 {this.state.isLoggedIn? loggedInRoutes: loggedOutRoutes}
        </Router>
            </div>            
        );
    }
}

export default Header;