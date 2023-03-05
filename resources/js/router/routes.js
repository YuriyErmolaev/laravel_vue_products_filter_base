import Admin from "../views/Admin.vue";
import dashboard from "./Child/Dashboard";
import usersItem from "./Child/UsersItem";
import importItem from "./Child/ImportItem";
import exportItem from "./Child/ExportItem";
import result from "./Child/Result";


export default [{
    path: '/',
    component: Admin,
    children: [
        dashboard,
        usersItem,
        importItem,
        exportItem,
        result
    ]
}]
