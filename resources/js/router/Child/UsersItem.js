import AdminPage from "../../views/AdminPage.vue";

export default {
    path: 'users',
    name: 'usersItem',
    component: AdminPage,
    props: true,
    children: [
        {
            name: 'users',
            path: '',
            props: true,
            component: () => import("../../views/UsersPage/Index.vue"),
        }
    ]
}
