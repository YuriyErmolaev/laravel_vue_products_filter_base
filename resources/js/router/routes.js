import Admin from "../views/Admin.vue";
import dashboard from "./Child/Dashboard";

export default [{
    path: '/',
    component: Admin,
    children: [
        dashboard
    ]
}]
