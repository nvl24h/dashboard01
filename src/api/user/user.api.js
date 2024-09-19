import axiosInstance from "../instance.api";

export const userApi = {
    login: async (data) => await axiosInstance.post("users/login", data),
    signup: async (data) => await axiosInstance.post("users/signup", data),
};
