import axiosInstance from "../instance.api";

export const userApi = {
    login: async (data) => await axiosInstance.post("users/login", data),
};
