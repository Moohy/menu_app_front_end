import React from 'react'
import axios from 'axios'
import {Card, Button} from 'react-bootstrap/';

let base_url = 'https://shielded-mesa-36213.herokuapp.com'

export default class LandingPageRestaurantCards extends React.Component {
    state = {
        restaurants: []
    };
    componentDidMount() {
        axios.get(`${base_url}/api/restaurants`).then(res => {
            console.log(res.data.restaurants);
            this.setState({ restaurants: res.data.restaurants });
        });
    }

    imageClick = () => {
        console.log(); //links to the restaurant's page
    } 

    render() {
        return (

        <div className='cardcont'>




     <div>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/ar/a/a1/Albaik_logo.svg" width="250" height="250"/>
       <Card.Body>
       <Card.Title><a href='/restaurants/1'>Albaik</a></Card.Title>
      </Card.Body>
       </Card>
       </div>

  <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kudu_logo_%28Saudi_Arabia%2C_2016%29_%28background%2C_without_wordmark_variant%29.svg/1151px-Kudu_logo_%28Saudi_Arabia%2C_2016%29_%28background%2C_without_wordmark_variant%29.svg.png" width="250" height="250"/>
    <Card.Body>
    <Card.Title><a href='/restaurants/1'>Kodo</a></Card.Title>
    </Card.Body>
    </Card>
</div>

</div>


            // <div>
            //    {this.state.restaurants.map(e => <Card.Img onClick={(e) => this.imageClick(e)} src={e.image}/>)}
            // </div>
        );
    }
}