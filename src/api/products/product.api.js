import axiosInstance from "../instance.api";

export const productApi = {
    getAllProductAdmin: async () => await axiosInstance.get("products/publict/all"),
    getProductAdmin: async (productId) => await axiosInstance.get(`products/${productId}`),
    updateProductAdmin: async (productId, payload) => await axiosInstance.patch(`products/update/${productId}`, payload),
};
