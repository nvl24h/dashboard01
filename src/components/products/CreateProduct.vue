<script setup>
import { ref, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";

// Sử dụng một trạng thái ref để kiểm soát quá trình tải
const editorLoaded = ref(false);

onMounted(async () => {
    // Simulate loading TinyMCE resources, you can replace this with actual loading logic
    await loadEditor();
    editorLoaded.value = true;
});

// Giả lập một hàm tải TinyMCE không đồng bộ
async function loadEditor() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1500); // Giả sử mất 1 giây để tải tài nguyên
    });
}
</script>

<template>
    <main id="sample">
        <!-- Chỉ hiển thị trình soạn thảo khi đã tải xong -->
        <Editor
            v-if="editorLoaded"
            api-key="5isebp954tf7aiwbmjgvuredk0f3s93sl92ba26r583bs1pf"
            :init="{
                toolbar_mode: 'sliding',
                plugins:
                    'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                toolbar:
                    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                images_file_types: 'jpg,svg,webp',
                file_picker_types: 'file image media',
                block_unsupported_drop: false,
                file_picker_callback: (callback, value, meta) => {
                    // Provide file and text for the link dialog
                    if (meta.filetype == 'file') {
                        callback('mypage.html', { text: 'My text' });
                    }

                    // Provide image and alt text for the image dialog
                    if (meta.filetype == 'image') {
                        callback('myimage.jpg', { alt: 'My alt text' });
                    }

                    // Provide alternative source and posted for the media dialog
                    if (meta.filetype == 'media') {
                        callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
                    }
                },
            }"
            initial-value="Welcome to editer!"
        />
        <!-- Hiển thị loader khi trình soạn thảo đang tải -->
        <p v-else>Loading editor...</p>
    </main>
</template>
