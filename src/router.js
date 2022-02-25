import { createRouter, createWebHistory } from 'vue-router'

import Login from "./components/Login.vue";
import Registro from "./components/Registro.vue";
import Email from "./components/Emails/Email.vue";
import ListEmail from "./components/Emails/ListEmail.vue";
import Users from "./components/Users.vue";
const routes = [
    {
        path: "/",
        name: "login",
        component: Login
    },
    {
        path: "/registro",
        name: "registro",
        component: Registro
    },
    {
        path: "/email",
        name: "email",
        component: Email
    },
    {
        path: "/lista-email",
        name: "lista-email",
        component: ListEmail
    },
    {
        path: "/usuarios",
        name: "usuarios",
        component: Users
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;