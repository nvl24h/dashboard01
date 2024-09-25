<template>
    <div class="dashboard">
        <div class="dashboard__left">
            <DashboardLeft />
        </div>
        <div class="dashboard__right">
            <router-view />
        </div>
    </div>
</template>

<script>
import DashboardLeft from "@/components/dashboard/DashboardLeft.vue";
export default {
    components: {
        DashboardLeft,
    },
};
</script>

<style scoped>
.dashboard {
    width: 100%;
    display: flex;
}

.dashboard__left {
    width: 240px;
    background-color: rgb(230, 230, 230);
    padding: 24px;
    min-height: 100vh;
}

.dashboard__right {
    flex-grow: 1;
    background-color: rgb(246, 246, 246);
    padding: 24px;
}
</style>
