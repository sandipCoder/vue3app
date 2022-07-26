<template>
<div>
    <ul class="list-group ">
        <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(todo,index) in $store.state.todos" :key="todo.id">
            <div class="ms-2 me-auto">
                <div class="fw-bold"> <input type="checkbox" v-model="todo.done" @change="todoStaus(todo)"  :id="`checkbox${index}`"/>
                    <span :class="{'text-danger': todo.done }"> {{todo.title}} </span></div>
            </div>
            <span class="badge btn bg-danger rounded-pill" @click="deleteTodo(todo)">delete</span>
        </li>
    </ul>
</div>
</template>

<script>
import {
    watch
} from "vue"
import {
    useStore
} from 'vuex'
export default {
    setup() {

        const store = useStore()

        const deleteTodo = (todo) => {
            store.commit('DELETE_TODO', todo)
        }

        const todoStaus = (todo)=>{
           store.commit('STATUS_CHANGE',todo)
        }

        return {
            store,
            deleteTodo,
            todoStaus
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
