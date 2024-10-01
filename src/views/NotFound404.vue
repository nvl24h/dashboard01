<!-- src/components/NotFound.vue -->
<template>
    <div class="not-found">
        <h1>404 - Trang Không Tìm Thấy</h1>
        <p>Xin lỗi, trang bạn tìm kiếm không tồn tại.</p>
        <router-link to="/">Quay lại trang chủ</router-link>
    </div>
</template>

<script>
export default {
    name: "NotFound",
};
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}
</style>
