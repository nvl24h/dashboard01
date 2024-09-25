<template>
    <div class="post">
        <table class="table post__table">
            <thead class="table__head post__table-head">
                <tr class="table__row post__table-row">
                    <th class="table__header post__table-header">
                        <label for="post__checkbox">
                            <input
                                type="checkbox"
                                id="post__select-all"
                                name="post__checkbox"
                                class="table__checkbox post__checkbox"
                            />
                        </label>
                    </th>
                    <th class="table__header post__table-header">Image</th>
                    <th class="table__header post__table-header">Title</th>
                    <th class="table__header post__table-header">Collection</th>
                    <th class="table__header post__table-header">Date</th>
                </tr>
            </thead>
            <tbody class="table__body post__table-body">
                <tr class="table__row post__table-row">
                    <td class="table__data post__table-data">
                        <input type="checkbox" name="post__checkbox" class="table__checkbox post__checkbox" />
                    </td>
                    <td class="table__data post__table-data">
                        <img src="../../assets/image/Betty-choice.png" class="table__image post__image" alt="post image" />
                    </td>
                    <td class="table__data post__table-data">
                        <router-link to="/" class="table__link post__link"
                            >Hộp đựng vang da ngang – Cam họa tiết</router-link
                        >
                    </td>
                    <td class="table__data post__table-data">Wine</td>
                    <td class="table__data post__table-data">2021</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import "@/assets/dashboard/table.css";
export default {
    name: "Allpost",
};
</script>
