<template>
<div class="col-md-3 my-3">
    <div class="card">
        <div class="card-header">
            {{post.userId}}
        </div>
        <div class="card-body">
            <h5 class="card-title"> {{post.title}}</h5>
            <p class="card-text"> {{post.body.slice(0,100)}}</p>
            <router-link :to="`/getPost/${post.id}`">
                <button class="btn btn-success btn-sm">Post View</button>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['post'],
    setup() {
        return {}
    }
}
</script>

<style scoped>

</style>
