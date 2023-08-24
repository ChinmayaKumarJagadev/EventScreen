import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Button.css'
import { routers } from "../../constants/routes";

const ButtonContainer = () => {
    const history = useNavigate();
    const location = useLocation();
    const buttonText = location.pathname === routers.INFO ? "Reply" : "Send Reply";

    const buttonClicked = () => {
        if (location.pathname === routers.INFO) {
            replyButtonClicked();
        } else if (location.pathname === routers.OTP) {
            sendReplyButtonClicked();
        }
    }

    const replyButtonClicked = () => {
        history(routers.OTP);
    }

    const sendReplyButtonClicked = () => {
        history(routers.MESSAGE);
    }

    return (
        <div className="buttonComponent">
            <button type="submit" className={location.pathname === routers.INFO ? "buttonMain": 'otpButtonReply' } onClick={buttonClicked}>{buttonText}</button>
        </div>
    );
}

export default ButtonContainer;
