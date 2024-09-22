<template>
    <div class="auth">
        <div class="auth__box">
            <!-- left -->
            <div class="auth__left">
                <div class="auth__content">
                    <div class="auth__header">
                        <h1 class="auth__title">Đăng Nhập</h1>
                        <p class="auth__description">Làm thế nào để bắt đầu lorem ipsum dolor at?</p>
                    </div>
                    <div class="auth__form">
                        <form @submit.prevent="handleSubmit">
                            <div class="auth__form-item">
                                <input
                                    class="auth__input"
                                    type="text"
                                    id="email"
                                    placeholder="Tên đăng nhập"
                                    autocomplete="email"
                                    v-model="username"
                                />
                                <i class="fa-solid fa-user auth__icon"></i>
                                <p class="auth__error" v-if="formErrorUser">{{ formErrorUser }}</p>
                            </div>
                            <div class="auth__form-item">
                                <input
                                    class="auth__input"
                                    type="password"
                                    id="password"
                                    placeholder="Mật khẩu"
                                    autocomplete="current-password"
                                    v-model="password"
                                />
                                <i class="fa-solid fa-lock auth__icon"></i>
                                <p class="auth__error" v-if="formErrorPassword">{{ formErrorPassword }}</p>
                            </div>
                            <button class="auth__button" type="submit">Đăng Nhập Ngay</button>
                        </form>
                    </div>
                    <div class="auth__social-login">
                        <h2 class="auth__social-title"><span>login</span> with social</h2>
                        <button class="auth__social-button" type="button">
                            <img class="auth__social-icon" src="../../public/images/facebook 1.png" alt="logo google" />
                            <p class="auth__social-text">Đăng Nhập với Google</p>
                        </button>
                        <button class="auth__social-button" type="button">
                            <img class="auth__social-icon" src="../../public/images/google 1.png" alt="logo facebook" />
                            <p class="auth__social-text">Đăng Nhập với Facebook</p>
                        </button>
                    </div>
                </div>
            </div>
            <!-- right -->
            <div class="auth__right">
                <div class="auth__right-box">
                    <h2 class="auth__right-title">Những công việc tuyệt vời đang chờ bạn. Đăng Nhập Ngay!!!</h2>
                    <img class="auth__right-img" src="../../public/images/women with tab 1.png" alt="phụ nữ" />
                    <img class="auth__right-circle" src="../../public/images/thunderbolt 1.png" alt="hình tròn" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/checkauthcss/style.css";
import { useAuthStore } from "@/stores/checkAuth";
import { ref } from "vue";

export default {
    name: "Login",

    setup() {
        const username = ref("");
        const password = ref("");
        const formErrorUser = ref("");
        const formErrorPassword = ref("");
        const authStore = useAuthStore();

        const validateForm = () => {
            let valid = true;
            formErrorUser.value = "";
            formErrorPassword.value = "";

            if (!username.value) {
                formErrorUser.value = "Vui lòng nhập tên người dùng!";
                valid = false;
            }
            if (!password.value) {
                formErrorPassword.value = "Vui lòng nhập mật khẩu!";
                valid = false;
            }
            return valid;
        };

        const handleSubmit = async () => {
            if (validateForm()) {
                try {
                    await authStore.login(username.value, password.value);
                    // Chuyển hướng đến trang mong muốn sau khi đăng nhập thành công
                    // route...
                } catch (error) {
                    // Xử lý lỗi nếu có
                    console.error(error);
                }
            }
        };

        return {
            username,
            password,
            formErrorUser,
            formErrorPassword,
            handleSubmit,
        };
    },
};
</script>
