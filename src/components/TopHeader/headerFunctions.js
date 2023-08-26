import { routers } from "../../constants/routes";

export function goBack(history, route) {
    history(route === routers.MESSAGE ? routers.HOME : -1);
}
