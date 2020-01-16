import React from 'react';
import { SocialIcon } from 'react-social-icons';


function Footer(props) {
    return (
<footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Menu App 2020</p>
                <a className="social"><SocialIcon url="https://twitter.com/jaketrent"/></a>
                <a className="social"><SocialIcon url="https://facebook.com/jaketrent"/></a>
                <a className="social"><SocialIcon url="https://pinterest.com/jaketrent"/></a>
                <a className="social"><SocialIcon url="https://snapchat.com/jaketrent"/></a>
                <a className="social"><SocialIcon url="https://path.com/jaketrent"/></a>
        </div>
        {/* /.container */}
      </footer>
    );
}

export default Footer;