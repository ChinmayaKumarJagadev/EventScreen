import React from "react";
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import { IMAGES } from "../../constants/images";
import './EventHome.scss'; 

const EventHome = () =>{
    return(
        <div className="event-home-container">
            <img src={IMAGES.EventHomeImage} alt="no_image" className="background-image" />
            <Navbar className="overlay" />
            <Footer className="overlay" />
        </div>
    )
}

export default EventHome;
