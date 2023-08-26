import { routers } from "../../constants/routes";
import { IMAGES } from "../../constants/images";

export const pageTitles = {
    [routers.OTP]: "Enter OTP",
    [routers.INFO]: "Your information",
    [routers.MESSAGE]: "Future Forward Season 1 Epi...",
    [routers.MEMBER]: "Members",
    [routers.MEMBERINFO]: "Info",
};

export function getArrowImage(pathname) {
    return pathname === routers.MESSAGE ? IMAGES.MessageBackIcon : IMAGES.BackArrowInfo;
}