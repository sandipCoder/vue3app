<template>
<div>
    <h3>All Products</h3>
    <hr class="my-3">
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="product in  items.products " :key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.title}}</td>
                    <td> <img :src="product.thumbnail" class="img-fluid" width="100" /></td>
                    <td> <router-link :to="`/productadmin/products/${product.id}/edit`">  <button class="btn btn-success btn-sm mx-3">Edit</button> </router-link>
                    <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import {
    reactive
} from '@vue/reactivity'
import {
    onMounted
} from '@vue/runtime-core'
import axios from 'axios'
export default {
    setup() {
        const items = reactive({
            products: [],

        })
        onMounted(async () => {
            const data = await axios.get('http://localhost:3000/products')
            items.products = data.data
        })

        const deleteProduct = async (id) => {
            const data = await axios.delete(`http://localhost:3000/products/${id}`)
            items.products = data.data
        }

        return {
            items,
            deleteProduct
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
