import { createRouter, createWebHistory } from 'vue-router'

export default {
    install: (app: App) => {
        app.use(createRouter({
            history: createWebHistory(),
            routes: [
                {
                    name: 'index',
                    path: '/ig-planner/',
                    component: () => import('../pages/Index.vue')
                },
                {
                    name: 'profile',
                    path: '/ig-planner/:username',
                    component: () => import('../pages/Profile.vue')
                }
            ]
        }))
    }
}