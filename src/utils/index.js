"use strict";
import { useUploadStore } from "@/stores/uploadImage";

export const filePickerCallback = (callback, value, meta) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("id", "file");

    input.onchange = async () => {
        const file = input.files[0];
        if (file) {
            try {
                // Tạo FormData để gửi file lên server
                const formData = new FormData();

                formData.append("file", file);

                // Gửi API để upload file sử dụng store
                const uploadStore = useUploadStore();
                const response = await uploadStore.uploadImageThumb(formData); // Truyền trực tiếp formData
                console.log("Response:: ", response);

                if (response && response.data && response.data.url) {
                    // Giả sử API trả về { data: { url: '...' } }
                    const imageUrl = response.data.url;
                    // Sử dụng callback của TinyMCE để hiển thị ảnh trong editor
                    callback(imageUrl, { title: file.name });
                } else {
                    console.error("Error uploading image: No URL returned");
                }
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
    };

    input.click();
};
