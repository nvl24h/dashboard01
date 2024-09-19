import { defineStore } from "pinia";
import { userApi } from "@/api/user/user.api";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        error: null,
    }),
    actions: {
        async login(user, password) {
            try {
                const response = await userApi.login({
                    email: user,
                    password: password,
                });

                // Sử dụng response.status thay vì response.data.status
                if (response.status === 200) {
                    this.isAuthenticated = true;
                    const { _id, name, email } = response?.data?.metadata?.shop;
                    const { accessToken, refreshToken } = response?.data?.metadata?.tokens;

                    // Lưu thông tin vào localStorage
                    localStorage.setItem("userId", _id);
                    localStorage.setItem("name", name);
                    localStorage.setItem("email", email);
                    localStorage.setItem("accessToken", accessToken);

                    // Đặt cookie refreshToken với thời hạn 7 ngày
                    if (refreshToken) {
                        const expirationDate = new Date();
                        expirationDate.setDate(expirationDate.getDate() + 7);
                        document.cookie = `refreshToken=${refreshToken}; expires=${expirationDate.toUTCString()}`;
                    }

                    this.user = response.data;

                    await router.push("/dashboard");
                    return response.data;
                }
            } catch (error) {
                // Xử lý lỗi
                this.error = error.response ? error.response.data.message : "Network error";
                throw error;
            }
        },

        async signUp(name, email, password) {
            try {
                const response = await userApi.signup({
                    name: name,
                    email: email,
                    password: password,
                });

                // Sử dụng response.status thay vì response.data.status
                if (response.status === 200) {
                    // Chuyển hướng người dùng tới trang đăng nhập
                    return await router.push("/login");
                }
            } catch (error) {
                // Xử lý lỗi
                this.error = error.response ? error.response.data.message : "Network error";
                throw error;
            }
        },
    },
});
