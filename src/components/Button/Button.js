import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Button.css'
import { routers } from "../../constants/routes";

const ButtonContainer = () => {
    const history = useNavigate();
    const location = useLocation();
    const buttonText = location.pathname === routers.INFO ? "Reply" : "Send Reply";

    const buttonClicked = () => {
        history(location.pathname === routers.INFO ? routers.OTP : routers.MESSAGE);
    }

    return (
        <div>
            {location.pathname === routers.INFO ? (
                <button type="submit" className="buttonMain" onClick={buttonClicked}>{buttonText}</button>
            ) : (
                <div className="buttonComponent">
                    <button type="submit" className="otpButtonReply" onClick={buttonClicked}>{buttonText}</button>
                </div>
            )}
        </div>
    );
}

export default ButtonContainer;
