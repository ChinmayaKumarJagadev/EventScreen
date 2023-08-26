import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import TopHeader from "../../components/TopHeader/TopHeader";
import MessageCenter from './Messages/Messages'
import './MessageScreen.scss'
import { routers } from "../../constants/routes";
import { navigateTo } from "./messageFunctions";

const MessagesHome = () => {
    const history = useNavigate();

    return (
        <div className="mainMessage">
            <div className="messageContainer">
                <TopHeader />

                <div className="imageSection">
                    <img src={IMAGES.MemberIcon} alt="no_image_found" className="messageHeaderIcons" onClick={() => navigateTo(history, routers.MEMBER)}/>
                    <img src={IMAGES.InfoIcon} alt="no_image_found" className="messageHeaderIcons" onClick={() => navigateTo(history, routers.MEMBERINFO)}/>
                </div>
            </div>

            <p className="messageTitle">today</p>
            <MessageCenter />
        </div>
    );
}

export default MessagesHome;
