"use strict";

import { defineStore } from "pinia";
import { uploadApi } from "@/api/uploads/upload.api";

export const useUploadStore = defineStore("upload", {
    state: () => ({}),

    actions: {
        async uploadImageThumb(formData) {
            // Đổi tên tham số thành formData để rõ ràng hơn
            try {
                const response = await uploadApi.uploadThumb(formData);
                if (response.status === 200) {
                    // Trả về phản hồi để sử dụng tiếp
                    return response;
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
