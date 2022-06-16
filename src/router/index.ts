import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Index.vue'

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                component: () => import('@/layout/dashboard/Index.vue'),
                name: 'dashboard',
                meta: {
                    title: '首页',
                    icon: 'HomeFilled'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/Index.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})
export default router
