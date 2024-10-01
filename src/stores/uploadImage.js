"use strict";

import { defineStore } from "pinia";
import { uploadApi } from "@/api/uploads/upload.api";

export const useUploadStore = defineStore("upload", {
    state: () => ({
        fileUpload: [],
    }),

    actions: {
        async uploadImageThumb(formData) {
            // Đổi tên tham số thành formData để rõ ràng hơn
            try {
                const response = await uploadApi.uploadThumb(formData);
                if (response.status === 200) {
                    // Cập nhật danh sách sản phẩm vào state
                    this.fileUpload = response.data.metadata; // Cập nhật tùy theo cấu trúc API
                    console.log(this.fileUpload);
                    return response; // Trả về phản hồi để sử dụng tiếp
                } else {
                    console.error("Error uploading image:", response.statusText);
                    return null;
                }
            } catch (error) {
                console.error("Error uploading image:", error);
                return null;
            }
        },
    },
});
