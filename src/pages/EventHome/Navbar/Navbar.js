import React from "react";
import { IMAGES } from "../../../constants/images";
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="navbarContainer">
            <div class="backButton">
                <img src={IMAGES.BackArrow} alt="no_image_found" class="backArrow" />
            </div>
            <div class="downloadContainer">
                <img src={IMAGES.DownloadIcon} alt="no_image_found" />
                <div class="downloadText">Download elRed</div>
            </div>

            <img src={IMAGES.ShareIcon} alt="no_image_found" className="ml-auto mt-1 pl-3" width="24px" height="24px" />

        </div>

    );
};

export default Navbar;


