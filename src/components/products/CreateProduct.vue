<template>
    <main id="sample">
        <Editor
            api-key="5isebp954tf7aiwbmjgvuredk0f3s93sl92ba26r583bs1pf"
            v-model="content"
            :init="{
                height: 300,
                menubar: false,
                plugins: 'lists link image preview',
                toolbar:
                    'undo redo | styleselect | bold italic | link image | alignleft aligncenter alignright | numlist bullist',
            }"
        />
    </main>
</template>

<script setup>
import { ref } from "vue";
import Editor from "@tinymce/tinymce-vue";

// Sử dụng ref để lưu trữ nội dung
const content = ref("Hello, World!sssssssssssss");
</script>
