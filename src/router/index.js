import { createRouter, createWebHistory } from "vue-router";
import CheckAuthView from "@/views/CheckAuthView.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
    {
        path: "/",
        component: CheckAuthView,
        meta: { layout: "CheckAuthLayout" }, // Định nghĩa layout cho route này
        children: [
            {
                path: "login",
                name: "Login",
                component: () => import("@/components/Login.vue"),
                meta: { layout: "CheckAuthLayout" },
            },
            {
                path: "signup",
                name: "Signup",
                component: () => import("@/components/Signup.vue"),
                meta: { layout: "CheckAuthLayout" },
            },
        ],
    },
    {
        path: "/dashboard",
        component: DashboardView,
        meta: { layout: "DefaultLayout", requiresAuth: true }, // Route yêu cầu đăng nhập
        children: [
            {
                path: "create-product",
                name: "CreateProduct",
                component: DashboardView,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Route Guard để kiểm tra đăng nhập
router.beforeEach((to, from, next) => {
    const isAuthenticated = false; // Thay bằng logic kiểm tra đăng nhập của bạn
    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: "Login" }); // Chuyển hướng về trang login nếu chưa đăng nhập
    } else {
        next();
    }
});

export default router;
