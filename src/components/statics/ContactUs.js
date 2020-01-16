import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

class ContactUs extends Component {
    render() {
        return (
            <div>
                
            <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2>Contact us</h2>
                  <p className="lead">            <div>
                
                <p>Call, email </p>
                <p>what@forever.what</p>
                <p> (800) MY-Home <br /> 1 (800) 698-3384 </p>
                <p>123 Main Street <br /> Jeddah Town, USA 99555</p>
                <a><SocialIcon url="https://twitter.com/jaketrent"/></a>
                <a><SocialIcon url="https://facebook.com/jaketrent"/></a>
                <a><SocialIcon url="https://pinterest.com/jaketrent"/></a>
                <a><SocialIcon url="https://snapchat.com/jaketrent"/></a>
                <a><SocialIcon url="https://path.com/jaketrent"/></a>

                
            </div></p>
                </div>
              </div>
            </div>
          </section>
          </div>
        );
    }
}

export default ContactUs;