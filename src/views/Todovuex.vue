<template>
<div>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h3>Add todos</h3>

                <form action="" @submit.prevent="addTodo" class="mt-3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="title" placeholder="title" v-model="title">
                        <button class="input-group-text btn btn-success" id="basic-addon2">Add Todo</button>
                    </div>
                </form>
                <ListTodos />
                <!-- {{$store.state.apiData}}
                <button @click="getDataApi">ShowData</button> -->
            </div>
        </div>
    </div>

</div>
</template>

<script>
import ListTodos from "../components/ListTodos.vue"
import {
    onMounted,
    ref,
    watch
} from "vue"
import {
    useStore
} from 'vuex'
export default {
    components: {
        ListTodos
    },
    setup() {
        const title = ref('')
        const store = useStore()

        const addTodo = () => {
            if (title.value.trim() === "") {
                return
            } else {
                store.commit('ADD_NETODO', title.value)
                title.value = ""
            }

        }

        // watch(store.state.todos, (newval) => {
        //     localStorage.setItem('todos', JSON.stringify(newval))
        // }, {
        //     deep: true
        // })

        onMounted(() => {
            store.state.todos = JSON.parse(localStorage.getItem('todos')) || []
        })

        const getDataApi = () => {
            console.log("HEllo")
            //store.dispatch('fetchData')

        }

        return {
            title,
            store,
            addTodo,
            getDataApi
        }
    }
}
</script>

<style scoped>
form input {
    margin: 0px 0px;
}
</style>
