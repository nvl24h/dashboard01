import axiosInstance from "../instance.api";

export const getUser = async (data) => {
    const response = await axiosInstance.get("/user/signup", data);
    return response.data;
};
