import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import './TopHeader.scss';
import { routers } from "../../constants/routes";
import { pageTitles, getArrowImage } from "./data";
import { goBack } from './headerFunctions'

const TopHeader = () => {
    const location = useLocation();
    const pageTitle = pageTitles[location?.pathname];
    const history = useNavigate();

    const arrowImage = getArrowImage(location?.pathname);

    return (
        <div className={location?.pathname === routers?.MESSAGE ? "messageTopContainer" : "topContainer"}>
            <img src={arrowImage} alt="no_image_found" className={location?.pathname === routers?.MESSAGE ? "messageTopBackArrow" : "backArrow"} onClick={() => goBack(history, location.pathname)} />
            <p className={location?.pathname === routers?.MESSAGE ? "messageHeaderText" : "infoText"}>{pageTitle}</p>
        </div>
    );
}

export default TopHeader;
