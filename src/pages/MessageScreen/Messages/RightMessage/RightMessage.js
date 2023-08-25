import React from "react";
import { IMAGES } from "../../../../constants/images";

const RightMessageItem = ({ text, time, icon }) => (
    <div className="d-flex right">
        <div className="ConversationTextContainer">
            <p className="conversationText">{text}</p>

            <div className="dateAndImageContainer">
                <p className="dateText">{time}</p>
                <img src={IMAGES.TickIcon} alt="no_image" width="10px" height="10px" className="tickIcon" />
            </div>
        </div>
        {icon && <img src={icon} alt="no_image" width="26px" height="26px" className="rightImageIcon" />}
    </div>
);

export default RightMessageItem;
