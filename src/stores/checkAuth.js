// stores/auth.js
import { defineStore } from "pinia";
import { userApi } from "@/api/user/user.api";

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
                this.isAuthenticated = true;
                const { _id, name, email } = response?.data?.metadata?.shop;
                const { accessToken, refreshToken } = response?.data?.metadata?.tokens;
                localStorage.setItem("userId", _id);
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("accessToken", accessToken);

                if (refreshToken) {
                    const expirationDate = new Date();
                    expirationDate.setDate(expirationDate.getDate() + 7); // Đặt cookie hết hạn sau 7 ngày
                    document.cookie = `refreshToken=${refreshToken}; expires=${expirationDate.toUTCString()}`;
                }

                this.user = response.data;
                return response.data;
            } catch (error) {
                this.error = error.response ? error.response.data.message : "Network error";
                throw error;
            }
        },
    },
});
