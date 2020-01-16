import React from 'react';
import LandingPageCourser from './LandingPageCourser'
import LandingPageRestaurantCards from './LandingPageRestaurantCards'
import {Carousel} from 'react-bootstrap';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div >
                {/* <LandingPageCourser/> */}
                <header style={{overflowX: 'hidden'}} className="masthead" >
                    <div className="container h-100 w-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">Check the menus!</h1>
                        <hr className="divider my-4"/>
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">We made it easy to choose your favorite meal.</p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="/restaurants">Restaurants</a>
                        </div>
                    </div>
                    </div>
                </header> 
                {/* <LandingPageRestaurantCards/> */}
            </div>

        );
    }
};


