import React, { useState } from "react";
import { IMAGES } from "../../../constants/images";
import { useNavigate } from "react-router-dom";
import { openToaster, closeIcon, YesClicked } from "./FooterFunction";
import './Footer.css';
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
                    <img src={IMAGES.CrossIcon} alt="no_image_found" className="CrossIcon" onClick={() => closeIcon(setShowToaster)} />
                    <p className="toastertext"><b>You have responded No</b></p>
                    <p className="changetext"><b>Change</b></p>
                </div>
            ) : (<div className="buttonContainer mt-4">
                <p className="button"><b>Maybe</b></p>
                <p className="button" onClick={() => openToaster(setShowToaster)}><b>No</b></p>
                <p className="button text-white" onClick={() => YesClicked(history)} id="yesButton"><b>Yes</b></p>
            </div>)}
        </div>
    );
};
export default Footer;
