import { useNavigate } from "react-router-dom";
import { routers } from "../../../constants/routes";

export function openToaster(setShowToaster) {
    setShowToaster(true);
}

export function closeIcon(setShowToaster) {
    setShowToaster(false);
}

export function YesClicked(history) {
    history(routers.INFO);
}