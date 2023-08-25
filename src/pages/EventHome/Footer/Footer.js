import React, { useState } from "react";
import { IMAGES } from "../../../constants/images";
import { useNavigate } from "react-router-dom";
import { openToaster, closeIcon, YesClicked } from "./FooterFunction";
import './Footer.css'

const Footer = () => {
    const history = useNavigate()
    const [showToaster, setShowToaster] = useState(false);

    return (
        <div className="footerContainerMain">
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


            {showToaster ? (
                <div className="toaster">
                    <img src={IMAGES.CrossIcon} alt="no_image_found" className="CrossIcon" onClick={() => closeIcon(setShowToaster)} />
                    <p className="toastertext"><b>You have responded No</b></p>
                    <p className="changetext"><b>Change</b></p>
                </div>
            ) : (<div className="buttonContainer mt-3">
                <p className="button"><b>Maybe</b></p>
                <p className="button" onClick={() => openToaster(setShowToaster)}><b>No</b></p>
                <p className="button text-white" onClick={() => YesClicked(history)} id="yesButton"><b>Yes</b></p>
            </div>)}
        </div>
    );
};
export default Footer;
