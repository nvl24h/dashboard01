import { defineStore } from "pinia";
import { productApi } from "@/api/products/product.api";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        product: {},
    }),

    actions: {
        async getAllProductAdmin() {
            try {
                const response = await productApi.getAllProductAdmin();
                if (response.status === 200) {
                    // Cập nhật danh sách sản phẩm vào state
                    this.products = response.data.metadata; // Cập nhật tùy theo cấu trúc API
                    console.log(this.products);
                } else {
                    console.error("Error something");
                }
            } catch (error) {
                console.error(error);
            }
        },

        async getProductAdmin(productId) {
            try {
                const response = await productApi.getProductAdmin(productId);
                if (response.status === 200) {
                    this.product = response.data.metadata;
                    return response;
                } else {
                    console.error("Error something");
                }
            } catch (error) {
                console.error(error);
            }
        },

        async updateProductAdmin(productId, payload) {
            try {
                const response = await productApi.updateProductAdmin(productId, payload);
                if (response.status === 200) {
                    this.product = response.data.metadata;
                    return response;
                } else {
                    console.error("Error something");
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
});
