<template>
<div>
    <div class="row">
        <div class="col-md-5">
            <form @submit.prevent="addProductsInList">
                <div class="mb-3">
                    <label for="prodTitle" class="form-label">Product Title</label>
                    <input type="text" class="form-control" id="prodTitle" v-model="formdata.title">
                </div>
                <div class="mb-3">
                    <label for="prodDescription" class="form-label">Product Description</label>
                    <textarea type="text" id="prodDescription" v-model="formdata.description" rows="5" class="form-control"></textarea>
                </div>
                <div class="mb-3">
                    <label for="prodImage" class="form-label">Product Images</label>
                    <input type="text" class="form-control" v-model="formdata.thumbnail" id="prodImage">
                </div>
                <button class="btn btn-success">Submit</button>
            </form>
        </div>

    </div>

</div>
</template>

<script>
import {
    reactive
} from '@vue/reactivity'
import axios from 'axios'
export default {

    setup() {
        const formdata = reactive({
            title: '',
            description: '',
            thumbnail: ''
        })

        const addProductsInList = async () => {
            await axios.post('http://localhost:3000/products/', {
                title: formdata.title,
                description: formdata.description,
                thumbnail: formdata.thumbnail,
                id: (Math.random().toString(36)).subString(2)
            })
        }

        return {
            formdata,
            addProductsInList
        }

    }
}
</script>

<style scoped>
form {
    text-align: left;
}
</style>
