import React from 'react';
import LandingPageCourser from './LandingPageCourser'
import LandingPageRestaurantCards from './LandingPageRestaurantCards'

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="container">
                <LandingPageCourser />
                <LandingPageRestaurantCards />
            </div>
        );
    }
};


