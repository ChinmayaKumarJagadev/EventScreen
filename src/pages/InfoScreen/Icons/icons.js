import React from "react";
import { IMAGES } from "../../../constants/images";
import './icons.css'

const Icons = () => {

    return (
        <div>
            <p className="fetchText mt-3">Fetch data from</p>

            <div className="iconContainer mt-0">
                <img src={IMAGES.FaceBookIcon} alt="no_image_found" width="38px" height="38px" />
                <img src={IMAGES.InstaIcon} alt="no_image_found" width="38px" height="38px" />
                <img src={IMAGES.TwitterIcon} alt="no_image_found" width="38px" height="38px" />
                <img src={IMAGES.GoogleIcon} alt="no_image_found" width="38px" height="38px" />
                <img src={IMAGES.LinkedinIcon} alt="no_image_found" width="38px" height="38px" />
            </div>

            <p className="titleInfo mt-3">lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    );
}

export default Icons;
