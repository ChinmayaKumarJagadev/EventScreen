import { routers } from "../../../constants/routes";

export function handleToaster(setShowToaster, shouldOpen) {
    setShowToaster(shouldOpen);
}

export function eventInfoScreen(history) {
    history(routers.INFO);
}