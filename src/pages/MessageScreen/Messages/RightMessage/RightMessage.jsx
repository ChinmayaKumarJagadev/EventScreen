import React from "react";
import { IMAGES } from "../../../../constants/images";

const RightMessageItem = ({ text, time, icon }) => (
    <div className="d-flex right">
        <div className="ConversationTextContainer">
            <div className="conversationText">{text}</div>

            <div className="dateAndImageContainer">
                <div className="dateText">{time}</div>
                <img src={IMAGES.TickIcon} alt="no_image" className="tickIcon" />
            </div>
        </div>
        {icon && <img src={icon} alt="no_image" className="rightImageIcon" />}
    </div>
);

export default RightMessageItem;
