// "use strict";

// import axiosInstance from "../instance.api";

// export const uploadApi = {
//     uploadThumb: async (formData) => await axiosInstance.post("upload/product/thumb", formData),
// };

"use strict";

import axiosInstance from "../instance.api";

export const uploadApi = {
    uploadThumb: async (formData) => {
        return await axiosInstance.post("upload/product/thumb", formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Đảm bảo gửi đúng loại dữ liệu
            },
        });
    },
};
