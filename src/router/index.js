import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/checkAuth";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/LoginView.vue"),
        meta: { layout: "CheckAuthLayout" }, // Định nghĩa layout cho route này
    },
    {
        path: "/signup",
        name: "Signup",
        component: () => import("@/views/SignupView.vue"),
        meta: { layout: "CheckAuthLayout" },
    },
    {
        path: "/dashboard",
        component: () => import("@/views/DashboardView.vue"),
        meta: { layout: "DefaultLayout", requiresAuth: true }, // Route yêu cầu đăng nhập
        children: [
            {
                path: "overview",
                name: "Overview",
                component: () => import("@/views/DashboardView.vue"),
            },
            {
                path: "posts",
                name: "Posts",
                children: [
                    {
                        path: "all-post",
                        name: "AllPost",
                        component: () => import("@/components/post/AllPost.vue"),
                    },
                    {
                        path: "create-post",
                        name: "CreatePost",
                        component: () => import("@/components/post/CreatePost.vue"),
                    },
                ],
            },
            {
                path: "products",
                name: "Products",
                children: [
                    {
                        path: "all-products",
                        name: "AllProduct",
                        component: () => import("@/components/products/AllProducts.vue"),
                    },
                    {
                        path: "edit-product/:id",
                        name: "EditProduct",
                        component: () => import("@/components/products/EditProduct.vue"),
                    },
                    {
                        path: "create-product",
                        name: "CreateProduct",
                        component: () => import("@/components/products/CreateProduct.vue"),
                    },
                ],
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound404.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Route Guard để kiểm tra đăng nhập
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore(); // Lấy thông tin từ store
    const isAuthenticated = authStore.isAuthenticated || localStorage.getItem("accessToken"); // Kiểm tra nếu đã lưu accessToken

    if (to.meta.requiresAuth && !isAuthenticated) {
        // Nếu route yêu cầu đăng nhập và người dùng chưa đăng nhập
        next({ name: "Login" }); // Chuyển hướng về trang login
    } else {
        next(); // Cho phép đi tiếp
    }
});

export default router;
