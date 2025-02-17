import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './mainRoutes';
// import AuthRoutes from './AuthRoutes';
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        MainRoutes,
    ]
});
export default router