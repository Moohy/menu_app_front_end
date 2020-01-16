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
                        <h1 className="text-uppercase text-white font-weight-bold">Your Favorite Source of Free Bootstrap Themes</h1>
                        <hr className="divider my-4"/>
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="/restaurants">Find Out More</a>
                        </div>
                    </div>
                    </div>
                </header> 
                {/* <LandingPageRestaurantCards/> */}
            </div>

//             <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="./images/image1.png"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="./images/image2.jpg"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="./images/image3.png"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>

//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="./images/image4.jpg"
//       alt="Fourth slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>

        );
    }
};


