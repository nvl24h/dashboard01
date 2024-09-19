<template>
    <div class="dashboard">
        <div class="dashboard__left">
            <DashboardLeft></DashboardLeft>
        </div>
        <div class="dashboard__right">
            <DashboardRight></DashboardRight>
        </div>
    </div>
</template>

<script>
import DashboardLeft from "@/components/dashboard/DashboardLeft.vue";
import DashboardRight from "@/components/dashboard/DashboardRight.vue";
export default {
    components: {
        DashboardLeft,
        DashboardRight,
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
    background-color: aqua;
    padding-left: 24px;
}

.dashboard__right {
    flex-grow: 1;
    background-color: bisque;
    padding-left: 24px;
}
</style>
