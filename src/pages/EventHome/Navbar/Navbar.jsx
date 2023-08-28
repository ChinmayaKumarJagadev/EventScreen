import React from "react";
import { IMAGES } from "../../../constants/images";
import './Navbar.scss'

const Navbar = () => {

    return (
        <div className="navbarContainer">
            <div className="backButton">
                <img src={IMAGES?.BackArrow} alt="no_image_found" className="backArrowHome" />
            </div>
            <div className="downloadContainer">
                <img src={IMAGES?.DownloadIcon} alt="no_image_found" />
                <div className="downloadText">Download elRed</div>
            </div>

            <img src={IMAGES?.ShareIcon} alt="no_image_found" id="share" className="shareIcon" />

        </div>

    );
};

export default Navbar;


