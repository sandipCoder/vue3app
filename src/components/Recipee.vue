<template>
<div class="col-md-6 my-3" v-for="item in $store.state.recipes" :key="item.id">
    <div class="card text-left mx-4">
        <div class="card-body">
            <h4 class="card-title">{{item.title}}</h4>
            <p class="card-text">{{item.description}}</p>
        </div>
        <p>
            <router-link :to="`/recipe/${item.slug}`">
                <button class="btn btn-success btn-sm">View Recipe</button>
            </router-link>
        </p>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dd {
    width: 700px;
    margin: 0 auto;
}
</style>
