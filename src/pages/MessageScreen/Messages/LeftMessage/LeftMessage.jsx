import React from "react";

const LeftMessageItem = ({ text, time, icon }) => (
    <div className="d-flex">
        {icon && <img src={icon} alt="no_image" className="allmessageIcons"/>}
        <div className="ConversationTextContainter">
            <div className="conversationText">{text}</div>
            <div className="dateText">{time}</div>
        </div>
    </div>
);

export default LeftMessageItem