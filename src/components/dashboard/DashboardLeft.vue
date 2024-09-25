<template>
    <div class="dashboard__sidebar">
        <!-- Logo -->
        <div class="dashboard__logo">
            <router-link to="/"><img src="../../assets/image/Betty-choice.png" width="200px" alt="good food" /></router-link>
        </div>

        <div class="menu">
            <h2 class="menu__heading">Overview</h2>
            <ul class="menu__list">
                <li class="menu__item" @click="navigateTo('')"><i class="fa-solid fa-house menu__icon"></i>Home</li>
                <li class="menu__item" :class="{ menu__active: activeMenu === 'post' }" @click="toggleSubMenu('post')">
                    <p>
                        <i class="fa-solid fa-newspaper menu__icon"></i>Posts
                        <i class="fa-solid fa-chevron-down menu__arrow"></i>
                    </p>
                    <ul class="menu__sub--list" v-show="activeMenu === 'post'">
                        <li class="menu__sub--item" @click="navigateTo('posts/all-post')">All posts</li>
                        <li class="menu__sub--item" @click="navigateTo('posts/create-post')">Create post</li>
                        <li class="menu__sub--item">Categories</li>
                        <li class="menu__sub--item">tags</li>
                    </ul>
                </li>
                <li class="menu__item" :class="{ menu__active: activeMenu === 'product' }" @click="toggleSubMenu('product')">
                    <p>
                        <i class="fa-solid fa-eye menu__icon"></i>Products<i
                            class="fa-solid fa-chevron-down menu__arrow"
                        ></i>
                    </p>
                    <ul class="menu__sub--list" v-show="activeMenu === 'product'">
                        <li class="menu__sub--item" @click="navigateTo('products/all-products')">All products</li>
                        <li class="menu__sub--item" @click="navigateTo('products/create-product')">Create product</li>
                        <li class="menu__sub--item" @click="navigateTo('products/create-product')">Collections</li>
                    </ul>
                </li>
                <li class="menu__item" :class="{ menu__active: activeMenu === 'pages' }" @click="toggleSubMenu('pages')">
                    <p>
                        <i class="fa-regular fa-file-lines menu__icon"></i>Pages<i
                            class="fa-solid fa-chevron-down menu__arrow"
                        ></i>
                    </p>
                    <ul class="menu__sub--list" v-show="activeMenu === 'pages'">
                        <li class="menu__sub--item">All pages</li>
                        <li class="menu__sub--item">Add new page</li>
                    </ul>
                </li>
                <li class="menu__item" :class="{ menu__active: activeMenu === 'media' }" @click="toggleSubMenu('media')">
                    <p>
                        <i class="fa-solid fa-image menu__icon"></i>Media<i class="fa-solid fa-chevron-down menu__arrow"></i>
                    </p>
                    <ul class="menu__sub--list" v-show="activeMenu === 'media'">
                        <li class="menu__sub--item">Library</li>
                        <li class="menu__sub--item">Add new media file</li>
                    </ul>
                </li>
            </ul>
            <h2 class="menu__heading">Other</h2>
            <ul class="menu__list">
                <li
                    class="menu__item"
                    :class="{ menu__active: activeMenu === 'settings' }"
                    @click="toggleSubMenu('settings')"
                >
                    <p><i class="fa-solid fa-gear"></i>Settings<i class="fa-solid fa-chevron-down menu__arrow"></i></p>
                    <ul class="menu__sub--list" v-show="activeMenu === 'settings'">
                        <li class="menu__sub--item">General</li>
                        <li class="menu__sub--item">Form</li>
                        <li class="menu__sub--item">Menus</li>
                        <li class="menu__sub--item">Account</li>
                        <li class="menu__sub--item">Contact</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import "@/assets/dashboard/style.css";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    name: "DashboardLeft",

    setup() {
        // State
        const router = useRouter();
        const activeMenu = ref(null);

        const toggleSubMenu = (menu) => {
            // activeMenu.value = activeMenu.value === menu ? null : menu;
            activeMenu.value = menu;
        };

        const navigateTo = (route) => {
            router.push(`/dashboard/${route}`);
        };

        return {
            activeMenu,
            toggleSubMenu,
            navigateTo,
        };
    },
};
</script>
