import React from 'react';
import LandingPageCourser from './LandingPageCourser'
import LandingPageRestaurantCards from './LandingPageRestaurantCards'
import {Carousel} from 'react-bootstrap';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="container whatever">
                <LandingPageCourser/>
                <LandingPageRestaurantCards/>
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


