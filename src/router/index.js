import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import DashboardView from "@/views/DashboardView.vue";
import { useAuthStore } from "@/stores/checkAuth";
import AllPost from "@/components/post/AllPost.vue";
import AllProducts from "@/components/products/AllProducts.vue";
import CreateProduct from "@/components/products/CreateProduct.vue";
import CreatePost from "@/components/post/CreatePost.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
        meta: { layout: "CheckAuthLayout" }, // Định nghĩa layout cho route này
    },
    {
        path: "/signup",
        name: "Signup",
        component: SignupView,
        meta: { layout: "CheckAuthLayout" },
    },
    {
        path: "/dashboard",
        component: DashboardView,
        meta: { layout: "DefaultLayout", requiresAuth: true }, // Route yêu cầu đăng nhập
        children: [
            {
                path: "overview",
                name: "Overview",
                component: DashboardView,
            },
            {
                path: "posts",
                name: "Posts",
                children: [
                    {
                        path: "all-post",
                        name: "AllPost",
                        component: AllPost,
                    },
                    {
                        path: "create-post",
                        name: "CreatePost",
                        component: CreatePost,
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
                        component: AllProducts,
                    },
                    {
                        path: "create-product",
                        name: "CreateProduct",
                        component: CreateProduct,
                    },
                ],
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
