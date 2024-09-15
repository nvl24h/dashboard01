<template>
    <div class="auth">
        <div class="auth__box">
            <!-- left -->
            <div class="auth__left">
                <div class="auth__content">
                    <div class="auth__header">
                        <h1 class="auth__title">Login</h1>
                        <p class="auth__description">How to i get started lorem ipsum dolor at?</p>
                    </div>
                    <div class="auth__form">
                        <form action="">
                            <div class="auth__form-item">
                                <input class="auth__input" type="text" id="email" placeholder="Username" />
                                <i class="fa-solid fa-user auth__icon"></i>
                                <p class="auth__error" :if="formErrorUser"></p>
                            </div>
                            <div class="auth__form-item">
                                <input class="auth__input" type="password" id="password" placeholder="Password" />
                                <i class="fa-solid fa-unlock auth__icon"></i>
                                <p class="auth__error" :if="formErrorPassword"></p>
                            </div>
                            <button class="auth__button" type="submit">Login Now</button>
                        </form>
                    </div>
                    <div class="auth__social-login">
                        <h2 class="auth__social-title"><span>Login</span> with others</h2>
                        <button class="auth__social-button" type="button">
                            <img class="auth__social-icon" src="../../public/images/facebook 1.png" alt="logo google" />
                            <p class="auth__social-text">Login with Google</p>
                        </button>
                        <button class="auth__social-button" type="button">
                            <img class="auth__social-icon" src="../../public/images/google 1.png" alt="logo facebook" />
                            <p class="auth__social-text">Login with Facebook</p>
                        </button>
                    </div>
                </div>
            </div>
            <!-- right -->
            <div class="auth__right">
                <div class="auth__right-box">
                    <h2 class="auth__right-title">Very good works are waiting for you Login Now!!!</h2>
                    <img class="auth__right-img" src="../../public/images/women with tab 1.png" alt="women" />
                    <img class="auth__right-circle" src="../../public/images/thunderbolt 1.png" alt="circle" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/checkauthcss/style.css";

export default {
    name: "CheckAuthView",

    setup() {
        const formErrorUser = () => {
            if (formErrorUser.value.length > 0) {
                return "Enter your user, please!";
            }
        };

        const formErrorPassword = () => {
            if (formErrorPassword.value.length > 0) {
                return "Enter your password, please!";
            }
        };

        return { formErrorUser, formErrorPassword };
    },
};
</script>
