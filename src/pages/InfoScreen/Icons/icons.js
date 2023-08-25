import React from "react";
import { IMAGES } from "../../../constants/images";
import './icons.css'

const Icons = () => {
    const iconImages = [
        IMAGES.FaceBookIcon,
        IMAGES.InstaIcon,
        IMAGES.TwitterIcon,
        IMAGES.GoogleIcon,
        IMAGES.LinkedinIcon
    ];

    return (
        <div>
            <p className="fetchText mt-3">Fetch data from</p>
            <div className="iconContainer mt-0">
                {iconImages.map((icon, index) => (
                    <img key={index} src={icon} alt="no_image_found" width="38px" height="38px" />
                ))}
            </div>

            <p className="titleInfo mt-3">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    );
}

export default Icons;
