import { routers } from "../../constants/routes";

export const getButtonText = (locationPath) => {
    return locationPath === routers.INFO ? "Reply" : "Send Reply";
};

export const handleButtonClick = (locationPath, history) => {
    history(locationPath === routers.INFO ? routers.OTP : routers.MESSAGE);
};
