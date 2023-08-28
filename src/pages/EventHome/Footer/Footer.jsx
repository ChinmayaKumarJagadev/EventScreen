import React, { useState } from "react";
import { IMAGES } from "../../../constants/images";
import { useNavigate } from "react-router-dom";
import { handleToaster, eventInfoScreen } from "./FooterFunction";
import './Footer.scss';
import EventInfo from "../../../components/EventInfo/EventInfo";

const Footer = () => {
    const history = useNavigate()
    const [showToaster, setShowToaster] = useState(false);

    return (
        <div className="footerContainerMain">
            <div className="footerInfo">
                <EventInfo />
            </div>

            {showToaster ? (
                <div className="toaster">
                    <img src={IMAGES?.CrossIcon} alt="no_image_found" className="CrossIcon" onClick={() => handleToaster(setShowToaster, false)} />
                    <div className="toastertext"><b>You have responded No</b></div>
                    <div className="changetext" onClick={() => handleToaster(setShowToaster, false)} ><b>Change</b></div>
                </div>
            ) : (<div className="buttonContainer mt-4">
                <div className="button"><b>Maybe</b></div>
                <div className="button" onClick={() => handleToaster(setShowToaster, true)}><b>No</b></div>
                <div className="button" onClick={() => eventInfoScreen(history)} id="yesButton"><b>Yes</b></div>
            </div>)}
        </div>
    );
};
export default Footer;
