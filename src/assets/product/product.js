// src/components/productEditor.js
import { ref, computed, onMounted } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { useProductStore } from "@/stores/AllProducts";
import { useRoute } from "vue-router";

// Biến phản ứng cho tên sản phẩm
const nameProduct = ref("");
const productName = ref("");

// Hàm chuyển đổi chuỗi thành slug
function toSlug(str) {
    return str
        .toLowerCase()
        .normalize() // Chuyển các ký tự có dấu thành dạng cơ bản
        .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
        .replace(/[^a-z0-9\s-]/g, "") // Loại bỏ ký tự đặc biệt
        .trim()
        .replace(/[\s-]+/g, "-"); // Thay thế khoảng trắng và dấu gạch ngang liên tiếp bằng một dấu gạch ngang
}

// Computed property để tạo slug từ nameProduct
const slug = computed(() => toSlug(nameProduct.value));

// Hàm callback cho file picker
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
async function getDataProduct() {
    try {
        const getProduct = await productStore.getProductAdmin(productId);
        if (getProduct) {
            console.log("Fetched product:", getProduct.data.metadata);
            nameProduct.value = getProduct.name || ""; // Gán tên sản phẩm
        } else {
            console.error("Product not found");
        }
    } catch (error) {
        console.error("Error fetching product:", error);
    }
}

// Gọi hàm khi component được mount
onMounted(() => {
    getDataProduct();
});

// Xuất ra các biến và hàm cần thiết để dùng trong Vue component
export { nameProduct, slug, filePickerCallback, getDataProduct };
