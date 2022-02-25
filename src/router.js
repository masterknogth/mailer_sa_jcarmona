import { createRouter, createWebHistory } from 'vue-router'

import Login from "./components/Login.vue";
import Registro from "./components/Registro.vue";
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

];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;