import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div>
       <header style={{overflowX: 'hidden'}} class="">
            <div class="container h-100">
              <div class="row h-100 align-items-center justify-content-center text-center">
              </div>
            </div>
          </header> 
          <section className="py-5">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">Menu App is a platform to present resturants menus for viewers to check the desired resturant menu.</p>
        </div>
      </section>


      <section className="py-5">
      <div className="container">
      <h1>Team Members</h1>
      
        <div className="container-memeber">
          
          <div className="card">
                    <h2>Mohammed</h2>
                    <h4>Team Leader</h4>
                    <a href= 'https://github.com/Moohy?tab=repositories' target='_blank'>Profile</a>

                </div>
                <div className="card">
                    <h2>Amal</h2>
                    <h4>Team Member</h4>
                    <a href= 'https://github.com/Amal337?tab=repositories' target='_blank'>Profile</a>
                </div>
                <div className="card">
                    <h2>Hatim</h2>
                    <h4>Team Member</h4>
                    <a href= 'https://github.com/hatimalattas?tab=repositories' target='_blank'>Profile</a>
                </div>
                <div className="card">
                    <h2>Dalia</h2>
                    <h4>Team Member</h4>
                    <a href= 'https://github.com/dhdammas?tab=repositories' target='_blank'>Profile</a>
                </div>
                <div className="card">
                    <h2>Ibrahim</h2>
                    <h4>Team Member</h4>
                    <a href= 'https://github.com/izahran?tab=repositories' target='_blank'>Profile</a>
                </div>
        </div>
        </div>
      </section>
          </div>

            // <div>
            //     <div>
            //     <h1>About Us</h1>
            //     <p>Menu App is a platform to present resturants menus for viewers to check the desired resturant menu.</p>
            //     <p>The App was built by GA students team as a team project done by: </p>
            //     </div>
            //     <div>
            //         <h2>Mohammed</h2>
            //         <h4>Team Leader</h4>
            //     </div>
            //     <div>
            //         <h2>Amal</h2>
            //         <h4>Team Member</h4>
            //     </div>
            //     <div>
            //         <h2>Hatim</h2>
            //         <h4>Team Member</h4>
            //     </div>
            //     <div>
            //         <h2>Dalia</h2>
            //         <h4>Team Member</h4>
            //     </div>
            //     <div>
            //         <h2>Ibrahim</h2>
            //         <h4>Team Member</h4>
            //     </div>
            // </div>
            
            
            
        
        );
    }
}

export default AboutUs;
