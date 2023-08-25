import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import TopHeader from "../../components/TopHeader/TopHeader";
import MessageCenter from '../MessageScreen/Messages/Messages'
import './index.css'
import { memberClicked, infoClicked } from "./messageFunctions";

const MessagesHome = () => {
    const history = useNavigate();

    return (
        <div className="mainMessage">
            <div className="messageContainer">
                <TopHeader />

                <div className="imageSection">
                    <img src={IMAGES.MemberIcon} alt="no_image_found" className="messageHeaderIcons" onClick={() => memberClicked(history)}/>
                    <img src={IMAGES.InfoIcon} alt="no_image_found" className="messageHeaderIcons" onClick={() => infoClicked(history)}/>
                </div>
            </div>

            <p className="messageTitle">today</p>
            <MessageCenter />
        </div>
    );
}

export default MessagesHome;
