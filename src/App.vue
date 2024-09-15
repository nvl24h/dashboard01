<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CheckAuthLayout from "@/layouts/CheckAuthLayout.vue";

export default {
    name: "App",
    setup() {
        const route = useRoute();

        // Chọn layout dựa trên meta field
        const layout = computed(() => {
            return route.meta.layout === "CheckAuthLayout" ? CheckAuthLayout : DefaultLayout;
        });

        return { layout };
    },
};
</script>
