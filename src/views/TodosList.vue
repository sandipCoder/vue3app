<template>
<div class="mt-5">
    <div class="container">
        <div class="row justify-content-center">
            <section class="todoslist w-25">
                <h3>Create Todo</h3>
                <form @submit.prevent="addTodos">
                    <h6>What is in your Todo list</h6>
                    <input type="text" class="form-control" v-model="input_text" placeholder="Enter todo here" />
                    <h6>Pick category</h6>
                    <div class="options">
                        <div class="form-check radioBtn">
                            <input class="form-check-input" v-model="inputval" type="radio" value="personal" name="category" id="personal">
                            <label class="form-check-label" for="personal">
                                Personal
                            </label>
                        </div>
                        <div class="form-check radioBtn">
                            <input class="form-check-input" type="radio" v-model="inputval" name="category" value="business" id="business" checked>
                            <label class="form-check-label" for="business">
                                Business
                            </label>
                        </div>
                    </div>
                    <div class="d-grid gap-2 my-2">
                        <button class="btn btn-success" type="submit">Add Todo</button>
                    </div>
                </form>

                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(todo,index) in todos" :key="index">
                        <div class="ms-2 me-auto">

                            <div class="fw-bold">
                                <div class="form-check">
                                    <input class="form-check-input" v-model="todo.done" type="checkbox" value=""  :id="`flexCheckIndeterminate ${index}`">
                                    <label class="form-check-label" :class="{'text-decoration-line-through text-danger':todo.done}"  :for="`flexCheckIndeterminate ${index}`">
                                      <span ></span> {{todo.title}}
                                    </label>
                                </div>
                            </div>
                            {{todo.category}}
                        </div>
                        <button class="badge rounded-pill btn btn-sm btn-danger" @click="deleteTodo(todo)">Delete</button>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref,
    onMounted,
    watch
} from 'vue'
export default {
    setup() {
        const input_text = ref('')
        const inputval = ref('')
        // const name = ref('')
        const todos = ref([])

        const addTodos = () => {
            console.log("hello")
            if (input_text.value.trim() === '' && inputval.value === null) {
                console.log("enter val")
            } else {
                todos.value.push({
                    title: input_text.value,
                    category: inputval.value,
                    id: new Date().getTime(),
                    done: false,
                    editable: false,

                })

                console.log(todos.value)

                input_text.value = '';
                inputval.value = null
            }

        }

        watch(todos, (newVal) => {
            localStorage.setItem('todos', JSON.stringify(newVal))
        }, {
            deep: true
        })

        onMounted(() => {
            todos.value = JSON.parse(localStorage.getItem('todos')) || []
        })
        // watch(getTodo.todos, (newVal) => {
        //     localStorage.setItem('todos', JSON.stringify(newVal))
        // }, {
        //     deep: true
        // })

        const deleteTodo = (todo) => {
            console.log("heee")
            todos.value = todos.value.filter(item => item.id != todo.id)
        }

        return {
            input_text,
            addTodos,
            inputval,
            todos,
            deleteTodo

        }
    }
}
</script>

<style scoped>
.todoslist {
    text-align: left;
}

.options {
    display: flex;
    justify-content: space-around;
}

.radioBtn {
    padding: 20px 40px;
    border: 1px solid #ccc;
}
</style>
