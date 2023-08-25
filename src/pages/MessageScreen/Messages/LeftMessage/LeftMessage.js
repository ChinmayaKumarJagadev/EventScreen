import React from "react";

const LeftMessageItem = ({ text, time, icon }) => (
    <div className="d-flex">
        {icon && <img src={icon} alt="no_image" width="26px" height="26px" />}
        <div className="ConversationTextContainter">
            <p className="conversationText">{text}</p>
            <p className="dateText">{time}</p>
        </div>
    </div>
);

export default LeftMessageItem