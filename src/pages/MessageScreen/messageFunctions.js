import { routers } from "../../constants/routes";

export function memberClicked(history) {
    history(routers.MEMBER);
}

export function infoClicked(history) {
    history(routers.MEMBERINFO);
}