<template>
    <div class="product-editor">
        <div class="product-editor__left">
            <h1 class="product-editor__title">Rượu vang ngọt Reolo Rosso Medium Sweet a</h1>
            <div class="product-editor__content">
                <!-- Header -->
                <div class="product-editor__section">
                    <span class="product-editor__section-title">Thông tin chung</span>
                </div>

                <!-- Body -->
                <div class="product-editor__form">
                    <div class="product-editor__form-group">
                        <label for="nameProduct" class="product-editor__form-label">Tên sản phẩm</label>
                        <input
                            autocomplete="on"
                            type="text"
                            name="nameProduct"
                            id="nameProduct"
                            class="product-editor__form-input"
                            placeholder="Nhập tên sản phẩm"
                            value="Rượu vang đỏ Úc Oz Stamp Cabernet Sauvignon Limited Edition"
                        />
                    </div>
                </div>

                <!-- Description -->
                <div class="product-editor__description">
                    <label for="productDescription" class="product-editor__description-label">Mô tả sản phẩm</label>
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
                    />
                </div>

                <!-- Image -->
                <div class="product-editor__images">
                    <!-- Header -->
                    <div class="product-editor__section">
                        <span class="product-editor__section-title">Hình ảnh sản phẩm</span>
                    </div>

                    <!-- Image List -->
                    <ul class="product-editor__image-list">
                        <li class="product-editor__image-item">
                            <img
                                src="https://product.hstatic.net/200000511439/product/toorak_estate_9b9460a31ef84643ac6a63e35b944e27_large.jpg"
                                alt="Hình ảnh sản phẩm"
                                class="product-editor__image"
                            />
                        </li>
                        <li class="product-editor__image-item">
                            <div class="product-editor__image-upload">
                                <input
                                    accept="image/jpeg,.jpeg,.jpg,image/png,.png,image/gif,.gif"
                                    type="file"
                                    name="uploadImage"
                                    id="uploadImage"
                                    class="product-editor__image-input"
                                    style="display: none"
                                />
                                <div class="product-editor__image-placeholder">
                                    <i class="fa-solid fa-file-import"></i>
                                    <p class="product-editor__image-desc-link">Thêm ảnh</p>
                                    <p class="product-editor__image-desc">hoặc</p>
                                    <p class="product-editor__image-desc-link">Thêm URL</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="product-editor__right">
            <div class="product-editor__public">
                <div class="product-editor__section">
                    <span class="product-editor__section-title">Xuất bản</span>
                </div>
                <div class="product-editor__action">
                    <button class="product-editor__button">Lưu nháp</button>
                    <button class="product-editor__button">Xem thử</button>
                </div>
                <div class="product-editor__state">
                    <p>Trạng thái: <strong>Bản nháp</strong></p>
                    <p>Xuất bản ngày: <strong>12 / 09 / 2022</strong></p>
                </div>
                <button class="product-editor__button">Xuất bản</button>
            </div>

            <div class="product-editor__collection">
                <div class="product-editor__section">
                    <span class="product-editor__section-title">Bộ sưu tập</span>
                </div>
                <div class="product-editor__collection-all">
                    <div class="product-editor__collection-list">
                        <label class="product-editor__collection-item">
                            <input value="33" type="checkbox" name="tax_input[product_cat][]" id="in-product_cat-33" />
                            Products
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Editor from "@tinymce/tinymce-vue";
import "@/assets/product/style.css";
</script>
