import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Button.css';
import { getButtonText, handleButtonClick } from "./buttonFunctions";
import { routers } from "../../constants/routes";

const ButtonContainer = () => {
    const history = useNavigate();
    const location = useLocation();
    const buttonText = getButtonText(location?.pathname);

    return (
        <div className={location?.pathname === routers?.INFO ? "buttonComponent" : "buttonOTPContainer"}>
            <button
                type="submit"
                className={location?.pathname === routers?.INFO ? "buttonMain" : "otpButtonReply"}
                onClick={() => handleButtonClick(location?.pathname, history)}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default ButtonContainer;

