import axiosInstance from "../instance.api";

export const productApi = {
    getAllProductAdmin: async () => await axiosInstance.get("products/publict/all"),
};
