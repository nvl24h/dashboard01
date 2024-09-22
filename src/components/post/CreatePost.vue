<script setup>
import Editor from "@tinymce/tinymce-vue";

const filePickerCallback = (callback, value, meta) => {
    if (meta.filetype === "image") {
        // Tạo một input file
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.style.display = "none";

        // Xử lý sự kiện chọn file
        input.addEventListener("change", () => {
            const file = input.files[0];
            if (file) {
                // Sử dụng FormData để gửi file lên server
                const formData = new FormData();
                formData.append("file", file);

                // Thay đổi endpoint và phương thức phù hợp với server của bạn
                fetch("/your-upload-endpoint", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        // Gọi callback với URL đến ảnh đã tải lên
                        callback(data.location);
                    })
                    .catch((error) => {
                        console.error("Error uploading file:", error);
                    });
            }
        });

        // Thêm input vào DOM và mở hộp thoại chọn file
        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
    }
};
</script>

<template>
    <main id="sample">
        <Editor
            api-key="5isebp954tf7aiwbmjgvuredk0f3s93sl92ba26r583bs1pf"
            :init="{
                toolbar_mode: 'sliding',
                plugins:
                    'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                toolbar:
                    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                images_file_types: 'jpg,svg,webp',
                file_picker_types: 'file image media',
                file_picker_callback: filePickerCallback,
            }"
            initial-value="Welcome to TinyMCE!"
        />
    </main>
</template>
