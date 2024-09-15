// stores/auth.js
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        error: null,
    }),
    actions: {
        async login(user, password) {
            try {
                const response = await axios.post("https://api.azz.icu/v1/api/users/login", {
                    username: user,
                    password: password,
                });
                this.isAuthenticated = true;
                return response.data;
            } catch (error) {
                this.error = error.response ? error.response.data.message : "Network error";
                throw error;
            }
        },
    },
});
