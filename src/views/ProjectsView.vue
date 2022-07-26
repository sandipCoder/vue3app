<template>
<div>
    <!-- <h1>Project Vuew</h1>
    <div> {{counter}}</div>
    <br />

    <button @click="counterUpdate">Inc count</button><br />

    <div> {{doubleCouter}}</div>

    <div>
        list
        <ul>
            <li>{{data.name}}</li>
            <li>{{data.number}}</li>
        </ul>
    </div> -->
    <h3 class="my-3">My Recipe List</h3>
    <button class="btn btn-success" @click="addRecipeModel">Add Recipe</button>

    <div class="pop-up" v-if="recipeshow">
        <div class="addrecipe">
            <h5 class="text-white">Add new recipe</h5>
            <form action="" @submit.prevent="addnewRecipe">
                <div>
                    <input type="text" v-model="food.title" class="form-control" placeholder="Recipe Name">
                </div>
                <div>
                    <textarea type="text" name="" v-model="food.description" id="" cols="30" rows="5" class="form-control" placeholder="Description"></textarea>
                </div>

                <div class="my-4" v-for="j in food.ingrediantsrow" :key="j">
                    <input type="text" v-model="food.ingredients[j-1]" class="form-control" placeholder="Ingrediants">
                </div>

                <div class="my-4">
                    <button type="button" class="btn-success btn btn-sm" @click.prevent="addIngrdiants"> Add Ingrediants</button>
                </div>

                <div class="my-4" v-for="i in food.methodsrow" :key="i">
                    <textarea type="text" name="" v-model="food.method[i-1]" id="" cols="30" rows="5" class="form-control" placeholder="Methods"></textarea>
                </div>
                <div class="mt-4 justify-content-around d-flex">
                    <button class="btn-success btn btn-sm" @click.prevent="addStep"> Add Step</button>
                </div>

                <div class="mt-4">
                    <button class="btn-success btn btn-sm"> Add Recipe</button>
                    <button class="btn-success btn btn-sm mx-2 float right" @click="closeRecipe"> Close</button>
                </div>
            </form>
        </div>
    </div>
    <div class="container mt-5 w-50">
        <div class="row">
            <Recipee />
        </div>
    </div>

</div>
</template>

<script>
import Recipee from "../components/Recipee.vue"
// import {
//     reactive,
//     ref
// } from '@vue/reactivity'
// import {
//     computed,
//     watch
// } from '@vue/runtime-core'
import {
    reactive,
    ref
} from "vue";
import {
    useStore
} from 'vuex';

export default {
    components: {
        Recipee
    },
    setup() {

        // let counter = ref(0)
        // const data = reactive({
        //         name: "sandip",
        //         age: 33,
        //         number: 1,
        //     },

        // )

        // //   setInterval(()=>{
        // //     counter.value ++
        // //   },2000)

        // function counterUpdate() {
        //     counter.value++
        // }

        // const doubleCouter = computed(() => {
        //     return counter.value * 2

        // })

        // setTimeout(() => {
        //     data.number++
        // }, 1000)

        // watch(counter, (oldval, newval) => {
        //     console.log(oldval, newval)
        // })

        // return {
        //     data,
        //     counter,
        //     counterUpdate,
        //     doubleCouter
        // }
        const food = reactive({
            title: '',
            description: '',
            ingrediantsrow: 1,
            methodsrow: 1,
            ingredients: [],
            method: []
        })
        const store = useStore()
        const recipeshow = ref(false)

        function addRecipeModel() {
            recipeshow.value = true
        }

        function closeRecipe() {
            recipeshow.value = false
        }

        function addIngrdiants() {
            food.ingrediantsrow++;
        }

        function addStep() {
            food.methodsrow++
        }

        function addnewRecipe() {
            food.slug = food.title.toLowerCase()

            if (food.slug === '') {
                alert("please enter valid detail....")
                return;
            }

            store.commit('ADD_RECIPE', {
                ...food
            })
            closeRecipe()
            food = {
                title: '',
                description: '',
                ingrediantsrow: 1,
                methodsrow: 1,
                ingredients: [],
                method: []
            }

        }

        return {
            addRecipeModel,
            recipeshow,
            closeRecipe,
            food,
            addIngrdiants,
            addStep,
            addnewRecipe
        }
    }
}
</script>

<style>
.pop-up {
    width: 600px;
    top: 50%;
    position: absolute;
    z-index: 999;
    max-height: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(143, 143, 143);
    overflow: hidden;
    overflow-y: scroll;
}

form input {
    margin: 15px 0px
}

.addrecipe {
    padding: 15px;
    border-radius: 5px;
    margin: 20px 0px;

}

.modal {
    display: block !important;
    opacity: 1;
}

.fade {
    opacity: 1 !important;
}
</style>
