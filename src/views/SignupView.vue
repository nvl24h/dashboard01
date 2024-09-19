<template>
    <div class="auth">
        <div class="auth__box">
            <!-- left -->
            <div class="auth__left">
                <div class="auth__content">
                    <div class="auth__header">
                        <h1 class="auth__title">Sign Up</h1>
                        <p class="auth__description">Làm thế nào để bắt đầu lorem ipsum dolor at?</p>
                    </div>
                    <div class="auth__form">
                        <form @submit.prevent="handleSubmit">
                            <div class="auth__form-item">
                                <input class="auth__input" type="text" id="name" placeholder="Your name" v-model="yourName" />
                                <i class="fa-solid fa-user auth__icon"></i>
                                <p class="auth__error" v-if="formErrorName">{{ formErrorName }}</p>
                            </div>
                            <div class="auth__form-item">
                                <input class="auth__input" type="text" id="email" placeholder="Email" v-model="yourEmail" />
                                <i class="fa-solid fa-user auth__icon"></i>
                                <p class="auth__error" v-if="formErrorEmail">{{ formErrorEmail }}</p>
                            </div>
                            <div class="auth__form-item">
                                <input
                                    class="auth__input"
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    autocomplete="new-password"
                                    v-model="password"
                                />
                                <p class="auth__error" v-if="formErrorPassword">{{ formErrorPassword }}</p>
                                <i class="fa-solid fa-user auth__icon"></i>
                            </div>
                            <div class="auth__form-item">
                                <input
                                    class="auth__input"
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Confirm password"
                                    autocomplete="new-password"
                                    v-model="confirmPassword"
                                />
                                <p class="auth__error" v-if="confirmErrorPassword">{{ confirmErrorPassword }}</p>
                                <i class="fa-solid fa-user auth__icon"></i>
                            </div>
                            <button class="auth__button" type="submit">Signup now</button>
                        </form>
                    </div>
                    <div class="auth__social-login">
                        <h2 class="auth__social-title"><span>Signup</span> with others</h2>
                        <button class="auth__social-button" type="button">
                            <img class="auth__social-icon" src="../../public/images/facebook 1.png" alt="logo google" />
                            <p class="auth__social-text">Signup with Google</p>
                        </button>
                        <button class="auth__social-button" type="button">
                            <img class="auth__social-icon" src="../../public/images/google 1.png" alt="logo facebook" />
                            <p class="auth__social-text">Signup with Facebook</p>
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
    name: "Signup",

    setup() {
        const yourName = ref("");
        const yourEmail = ref("");
        const password = ref("");
        const confirmPassword = ref("");

        const formErrorName = ref("");
        const formErrorEmail = ref("");
        const formErrorPassword = ref("");
        const confirmErrorPassword = ref("");

        const authStore = useAuthStore();

        const validateForm = () => {
            let valid = true;
            formErrorName.value = "";
            formErrorEmail.value = "";
            formErrorPassword.value = "";
            confirmErrorPassword.value = "";

            if (!yourName.value) {
                formErrorName.value = "Enter your name, please!";
                valid = false;
            }
            if (!yourEmail.value) {
                formErrorEmail.value = "Enter your email, please!";
                valid = false;
            }
            if (!password.value) {
                formErrorPassword.value = "Enter your password, please!";
                valid = false;
            }

            if (password.value !== confirmPassword.value) {
                confirmErrorPassword.value = "Password do not match!";
                valid = false;
            }
            return valid;
        };

        const handleSubmit = async () => {
            if (validateForm()) {
                try {
                    await authStore.signUp(yourName.value, yourEmail.value, password.value);
                } catch (error) {
                    // Xử lý lỗi nếu có
                    console.error(error);
                }
            }
        };

        return {
            yourName,
            yourEmail,
            password,
            confirmPassword,
            formErrorName,
            formErrorEmail,
            formErrorPassword,
            confirmErrorPassword,
            handleSubmit,
        };
    },
};
</script>
