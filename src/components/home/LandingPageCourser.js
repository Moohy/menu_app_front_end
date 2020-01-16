import React from 'react';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.png';
import image4 from '../images/image4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class LandingPageCourser extends React.Component {

    btnClick = () => {
       console.log("click!");
    }

    render() {
        return (
            <Carousel className="carousel-container" 
            showThumbs={false} stopOnHover={true} 
            showIndicators={false} showStatus={false} 
            showArrows={false} infiniteLoop={true}
            autoPlay={true} transitionTime={1000}
            dynamicHeight={false} emulateTouch={true}>
                <div>
                    <img src={image2} />
                    <h1>Great Offers</h1>
                    <button onClick={(e) => this.btnClick(e)}>Learn more </button>
                </div>
                <div>
                    <img src={image3} />
                    <h1>Get Free Dessert</h1>
                    <button onClick={(e) => this.btnClick(e)}>Learn more </button>
                </div>
                <div>
                    <img src={image4} />
                    <h1>Delicious Food Every Day</h1>
                    <button onClick={(e) => this.btnClick(e)}>Learn more </button>
                </div>
            
            </Carousel>
        );
    }
};