"use strict";

import axios from "axios";

// Tạo một instance của Axios với cấu hình mặc định
const axiosInstance = axios.create({
    baseURL: "https://api.azz.icu/v1/api/", // Base URL cho API của bạn
    timeout: 10000, // Thời gian timeout cho mỗi request
    headers: {
        "Content-Type": "application/json",
        "x-api-key":
            "e8055c44bc0693e18f3e5cf32b6dc393c6e7f4d86fd92e88a930a3e8f9b7028b3d880481b22e6695da262192f05b93af73e40608fdedddc03c49cb98116c4318",
    },
});

// Interceptor để thêm token vào mỗi request nếu có
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        const userId = localStorage.getItem("userId");

        if (token) {
            config.headers["authorization"] = token; // Thêm token vào header
        }
        if (userId) {
            config.headers["x-user-id"] = userId; // Thêm userId vào header
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor để xử lý lỗi response
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Xử lý lỗi toàn cục (vd: nếu token hết hạn thì chuyển hướng đến login)
        if (error.response.status === 401) {
            // Chuyển hướng người dùng đến trang đăng nhập
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
