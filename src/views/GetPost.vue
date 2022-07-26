<template>
<div>
   <router-link to="/posts">
    <button class="btn btn-link">Go back</button>
    </router-link>
    <div class="container">
        <hr class="my-2"/>
        <div class="row justify-content-center">
            <div class="col-md-6 ">
                <div class="card-group">
                    <div class="card  border-0">
                        <div class="card-body">
                            <h3 class="card-title">{{data.post.title}}</h3>
                            <p class="card-text">{{data.post.body}}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    ref,
    onMounted,
    onUpdated,
    reactive,
} from "vue"
import {
    useRoute
} from 'vue-router'
import axios from 'axios'
export default {
    setup() {
        const data = reactive({
            post: '',
            id: ''
        })
        const postData = ref();
        const route = useRoute()

        onMounted(() => {
            data.id = route.params.id;
            axios.get(`https://dummyjson.com/posts/${data.id}`).then(res => {
                return data.post = res.data
            })
        });

        return {
            data,
            postData
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
