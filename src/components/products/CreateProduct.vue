<script setup>
import Editor from "@tinymce/tinymce-vue";
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
            }"
            initial-value="Welcome to TinyMCE!"
        />
    </main>
</template>
