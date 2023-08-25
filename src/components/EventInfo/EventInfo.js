import React from "react";
import './EventInfo.css'
import { IMAGES } from "../../constants/images";

const EventInfo = () => {
    return (
        <div className="footerContainer">
            <div className="contentBox title bg-white">
                Future Forward Season 3 Episode 1
            </div>
            <div className="contentBox">
                <img src={IMAGES.DateIcon} alt="no_image_found" class="icon" />
                <p className="contentText">Fri 11 Aug 2023 - Sat 12 Aug 2023</p>
            </div>
            <div className="contentBox2">
                <img src={IMAGES.ClockIcon} alt="no_image_found" className="icon" />
                <p className="contentText">6:00 PM</p>
            </div>
        </div>

    )
}
export default EventInfo