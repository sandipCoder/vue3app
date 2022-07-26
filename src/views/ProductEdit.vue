<template>
<div>
    <div class="row">
        <div class="col-md-5">
            {{formdata.id}}
            <form @submit.prevent="editProductfromlist">
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
                <button class="btn btn-success">Update Data</button>
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
import {
    useRoute,
    useRouter
} from 'vue-router'
import {
    onMounted,
    onUnmounted
} from '@vue/runtime-core'
export default {
    props: ['id'],

    setup() {
        const route = useRoute()
        const router = useRouter()
        const formdata = reactive({
            title: '',
            description: '',
            thumbnail: '',
            getid: route.params.id,

        })

        onMounted(async () => {
            const response = await axios.get(`http://localhost:3000/products/${formdata.getid}`)
            formdata.title = response.data.title
            formdata.description = response.data.description
            formdata.thumbnail = response.data.thumbnail
        })

        const editProductfromlist = async () => {
            await axios.put(`http://localhost:3000/products/${formdata.getid}`, {
                title: formdata.title,
                description: formdata.description,
                thumbnail: formdata.thumbnail,
            })
            formdata.title = ''
            formdata.description = ''
            formdata.thumbnail = ''
            await router.push('/productadmin/products')
        }
        return {
            formdata,
            editProductfromlist
        }

    }
}
</script>

<style scoped>
form {
    text-align: left;
}
</style>
