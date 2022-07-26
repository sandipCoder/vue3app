<template>
<div>
    <router-link to="/project">
        <button class="btn btn-success btn-sm"> Back to Recipe</button>
    </router-link>
    <div class="d-flex justify-content-center my-5">
        <div class="recipe-detail col-md-4">
            <h2 class="title">{{recipe.title}}</h2>
            <p class="description">
                {{recipe.description}}
            </p>
            <hr class="my-4">

            <div>
                <h4>Ingrediants</h4>
                <ul>
                    <li v-for="(ingrediant,j) in recipe.ingredients" :key="j">{{ingrediant}}</li>
                </ul>
            </div>
            <hr class="my-4" />
            <div class="method my-1">
                <h4>Methods</h4>
                <ul>
                    <li v-for="(step,i) in recipe.method" :key="i">{{step}}
                        <hr class="my-4" />
                    </li>

                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            slugTitle: this.$route.params.slug
        }
    },
    computed: {
        recipe() {
            return this.$store.state.recipes.find(recipe => {
                return recipe.slug === this.slugTitle
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
