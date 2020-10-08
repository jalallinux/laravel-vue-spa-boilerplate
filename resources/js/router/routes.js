import auth from '@/middleware/auth';
import guest from '@/middleware/guest';
import NotFound from "@/views/errors/NotFound";

const Dashboard = () => import(/* webpackChunkName: "js/chunks/dashboards" */ '../views/Dashboard/DashboardRoutes.vue');
const Home = () => import(/* webpackChunkName: "js/chunks/home" */ '../views/Home.vue');
const Auth = () => import(/* webpackChunkName: "js/chunks/auth" */ '../views/Auth/AuthRoutes.vue');
const DashboardIndex = () => import(/* webpackChunkName: "js/dashboard" */ '../views/Dashboard/Index.vue');
const DashboardLayout = () => import(/* webpackChunkName: "js/chunks/dashboard" */ '../views/layout/DashboardLayout.vue');
const AdminLayout = () => import(/* webpackChunkName: "js/chunks/admin-layout" */ '../views/layout/AdminLayout.vue');
const AppLayout = () => import(/* webpackChunkName: "js/chunks/app-layout" */ '../views/layout/AppLayout.vue');
const AdminDashboard = () => import(/* webpackChunkName: "js/admin-user" */ '../views/Admin/AdminDashboard.vue');
const AdminUser = () => import(/* webpackChunkName: "js/admin-user" */ '../views/Admin/User/Index.vue');
const AdminUserRoutes = () => import(/* webpackChunkName: "js/admin-users" */ '../views/Admin/User/AdminUserRoutes.vue');

export default [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/auth/:url',
                name: 'auth',
                component: Auth,
                props: true,
                meta: {
                    middleware: [guest]
                }
            },
        ]
    },
    {
        path: '/dashboard',
        component: DashboardLayout,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: DashboardIndex,
                props: true
            },
            {
                path: '/:url',
                name: 'dashboards',
                component: Dashboard,
                props: true
            }
        ],
        meta: {
            middleware: [auth]
        }
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            {
                path: 'dashboard',
                name: 'admin-dashboard',
                component: AdminDashboard,
                props: true
            },
            {
                path: 'user',
                name: 'admin-user',
                component: AdminUser
            },
            {
                path: '/user/:url',
                name: 'admin-users',
                component: AdminUserRoutes,
                props: true
            }
        ],
        meta: {
            middleware: [auth]
        }
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: NotFound
    },
    {
        path: '*',
        name: 'error404',
        component: NotFound
    }
];
