<template>
    <div class="product-editor">
        <div class="product-editor__left">
            <h1 class="product-editor__title">{{ nameProduct2 }}</h1>
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
                            v-model="nameProduct"
                            @change="onNameProductInput"
                        />
                    </div>
                    <span class="slug__product">http://localhost:5173/products/{{ productSlug }}</span>
                </div>

                <!-- Description -->
                <div class="product-editor__description">
                    <label for="productDescription" class="product-editor__description-label">Mô tả sản phẩm</label>
                    <Editor
                        api-key="5isebp954tf7aiwbmjgvuredk0f3s93sl92ba26r583bs1pf"
                        v-model="initialValue"
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
                        <li class="product-editor__image-item" v-for="(image, index) in productThumb" :key="index">
                            <img :src="image" alt="Hình ảnh sản phẩm" class="product-editor__image" />
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
                    <p>
                        Xuất bản ngày: <strong>{{ productDate }}</strong>
                    </p>
                </div>
                <button class="product-editor__button" v-on:click="updateProduct()">Xuất bản</button>
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
import { ref, computed, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";
import "@/assets/product/style.css";
import { useProductStore } from "@/stores/AllProducts";
import { useRoute } from "vue-router";

// Biến phản ứng cho tên sản phẩm
const nameProduct = ref("");
const initialValue = ref(""); // Sử dụng ref cho initialValue của Editor
const productSlug = ref("");
const productState = ref("");
const productDate = ref("");
const nameProduct2 = ref("");
const productPrice = ref("");
const productQuantity = ref("");
const productThumb = ref([]);
const productType = ref("");
const productDescription = ref("");
const productCollection = ref("");

const aaaa = "";

const onNameProductInput = () => {
    // Nếu bạn muốn thực hiện thêm hành động khi tên sản phẩm thay đổi, thực hiện ở đây
    console.log("Tên sản phẩm đã thay đổi:", nameProduct.value);
    nameProduct.value = nameProduct.value;
};

// Hàm callback cho file picker (nếu cần thiết)
function filePickerCallback(callback, value, meta) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.onchange = () => {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const id = "blobid" + new Date().getTime();
            const blobCache = Editor.editorInstance.editorUpload.blobCache;
            const base64 = reader.result.split(",")[1];
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);

            callback(blobInfo.blobUri(), { title: file.name });
        };

        reader.readAsDataURL(file);
    };

    input.click();
}

const productStore = useProductStore();

// Lấy route hiện tại
const route = useRoute();
const productId = route.params.id;

// Hàm để lấy dữ liệu sản phẩm theo id
const getDataProduct = async () => {
    try {
        const getProduct = await productStore.getProductAdmin(productId);
        if (getProduct) {
            console.log("Fetched product:", getProduct.data.metadata);
            productState.value = getProduct.data.metadata.product_slug || "";
            productDate.value = getProduct.data.metadata.createdAt || "";
            productSlug.value = getProduct.data.metadata.product_slug || "";
            nameProduct.value = getProduct.data.metadata.product_name || "";
            nameProduct2.value = getProduct.data.metadata.product_name || "";
            initialValue.value = getProduct.data.metadata.product_details || "";
            productPrice.value = getProduct.data.metadata.product_price || "";
            productQuantity.value = getProduct.data.metadata.product_quantity || "";
            productThumb.value.push(getProduct.data.metadata.product_thumb);
            productType.value = getProduct.data.metadata.product_type || "";
            productDescription.value = getProduct.data.metadata.product_description || "";
            productCollection.value = getProduct.data.metadata.product_collection || "";
        } else {
            console.error("Product not found");
        }
    } catch (error) {
        console.error("Error fetching product:", error);
    }
};

const updateProduct = async () => {
    try {
        const getProduct = await productStore.updateProductAdmin(productId, {
            product_name: nameProduct.value,
            product_type: "Electronic",
        });
        if (getProduct) {
            console.log("Fetched product:", getProduct.data.metadata);
            productState.value = getProduct.data.metadata.product_slug || "";
            productDate.value = getProduct.data.metadata.createdAt || "";
            productSlug.value = getProduct.data.metadata.product_slug || "";
            nameProduct.value = getProduct.data.metadata.product_name || "";
            nameProduct2.value = getProduct.data.metadata.product_name || "";
            initialValue.value = getProduct.data.metadata.product_details || "";
            productPrice.value = getProduct.data.metadata.product_price || "";
            productQuantity.value = getProduct.data.metadata.product_quantity || "";
            productThumb.value.push(getProduct.data.metadata.product_thumb);
            productType.value = getProduct.data.metadata.product_type || "";
            productDescription.value = getProduct.data.metadata.product_description || "";
            productCollection.value = getProduct.data.metadata.product_collection || "";
        } else {
            console.error("Product not found");
        }
    } catch (error) {
        console.error("Error fetching product:", error);
    }
};
// Gọi hàm khi component được mount
onMounted(() => {
    getDataProduct();
});
</script>
