<template>
    <div class="product">
        <table class="table product__table">
            <thead class="table__head product__table-head">
                <tr class="table__row product__table-row">
                    <th class="table__header product__table-header">
                        <label for="product__checkbox">
                            <input
                                type="checkbox"
                                id="product__select-all"
                                name="product__checkbox"
                                class="table__checkbox product__checkbox"
                            />
                        </label>
                    </th>
                    <th class="table__header product__table-header">Image</th>
                    <th class="table__header product__table-header">Name</th>
                    <th class="table__header product__table-header">Price</th>
                    <th class="table__header product__table-header">Quantity</th>
                    <th class="table__header product__table-header">Collection</th>
                    <th class="table__header product__table-header">Date</th>
                </tr>
            </thead>
            <tbody class="table__body product__table-body">
                <!-- Lặp qua danh sách sản phẩm và hiển thị chúng -->
                <tr v-for="(product, index) in products" :key="index" class="table__row product__table-row">
                    <td class="table__data product__table-data">
                        <input type="checkbox" name="product__checkbox" class="table__checkbox product__checkbox" />
                    </td>
                    <td class="table__data product__table-data">
                        <img :src="product.product_thumb" class="table__image product__image" alt="Product image" />
                    </td>
                    <td class="table__data product__table-data">
                        <router-link
                            :to="'/dashboard/products/edit-product/' + product._id"
                            class="table__link product__link table_title"
                        >
                            {{ product.product_name }}
                        </router-link>
                    </td>
                    <td class="table__data product__table-data">
                        {{ formatPrice(product.product_price) }}
                    </td>
                    <td class="table__data product__table-data">
                        {{ product.product_quantity }}
                    </td>
                    <td class="table__data product__table-data">
                        {{ product.product_type }}
                    </td>
                    <td class="table__data product__table-data">
                        {{ product.date }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import "@/assets/dashboard/table.css";
import { useProductStore } from "@/stores/AllProducts";
import { computed, onMounted } from "vue";

export default {
    name: "AllProduct",

    setup() {
        const productStore = useProductStore();

        // Sử dụng computed để lấy sản phẩm từ store
        const products = computed(() => productStore.products);

        // Lấy danh sách sản phẩm từ API khi component được mounted
        const getDataProduct = async () => {
            // const aaaa = await productStore.getAllProductAdmin();
            // console.log(aaaa);

            return await productStore.getAllProductAdmin();
        };

        onMounted(() => {
            getDataProduct();
        });

        const formatPrice = (price) => {
            return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        return {
            products,
            formatPrice,
        };
    },
};
</script>
