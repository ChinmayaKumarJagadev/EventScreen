import React from "react";
import { useLocation } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import './TopHeader.css';
import { routers } from "../../constants/routes";

const TopHeader = () => {
    const location = useLocation();
    const pageTitle = location.pathname === routers.OTP ? "Enter OTP" : location.pathname === routers.INFO ? "Your information" : location.pathname === routers.MESSAGE ? "Future Forward Season 1 Epi..." : location.pathname === routers.MEMBER ? 'Members' : location.pathname === routers.MEMBERINFO ? 'Info' : '';

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className={location.pathname === routers.MESSAGE ? "messageTopContainer" : "topContainer"}>
            {location.pathname === routers.MESSAGE ? (
                <img src={IMAGES.MessageBackIcon} alt="no_image_found" className="messageTopBackArrow" onClick={goBack} />
            ) : (
                <img src={IMAGES.BackArrowInfo} alt="no_image_found" className="backArrow" onClick={goBack} />
            )}
            <p className={location.pathname === routers.MESSAGE ? "messageHeaderText" : "infoText"}>{pageTitle}</p>
        </div>
    );
}

export default TopHeader;
