import { routers } from "../../../constants/routes";

export function handleToaster(setShowToaster, shouldOpen) {
    setShowToaster(shouldOpen);
}

export function yesClicked(history) {
    history(routers.INFO);
}