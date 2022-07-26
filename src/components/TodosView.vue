<template>
<div>
    <h1>Todo with vue 3 Composion Api</h1>
    <input type="text" name="" v-model="title" id="" @keypress.enter="addNote">
    <button v-if="showandHide" @click="updateNote">Update Note</button>
    <ul>
        <li v-for="(note,index) in notes" :key="index" :class="note.completed ?'text-line' : '' " @dblclick="completedVal(note)"> <span> {{note.title}} </span>
            <button @click="deleteNote(note)">Delete</button>
            <button @click="editNotes(index)">Edit</button> </li>
        <hr />
        <div class="d-flex w-50">

            <span>All Todos: {{allTodosLenght}}</span> <span>Completed : {{completedLen}}</span> <span>Not Completed :{{notcompletedLen}}</span>
        </div>
    </ul>

</div>
</template>

<script>
import {
    computed,
    reactive,
    ref,
    toRefs
} from 'vue'
export default {
    // data() {
    //     return {
    //         count: 0
    //     }
    // },

    // methods: {
    //     counterIncreament() {
    //         this.count++
    //     }
    // }

    //composion api
    setup() {
        const state = reactive({
            notes: [{
                    title: "Rohan",
                    completed: false,
                    id: 1
                },
                {
                    title: "Rakesh",
                    completed: true,
                    id: 2
                },
                {
                    title: "Mahesh",
                    completed: false,
                    id: 3
                }
            ],

            title: ''

        })

        //const title = ref();
        const hidenVal = ref();
        const showandHide = ref(false);

        const allTodosLenght = computed(() => {
            return state.notes.length
        })

        const completedLen = computed(() => {
            return state.notes.filter(item => item.completed).length
        })
        const notcompletedLen = computed(() => {
            return state.notes.filter(item => !item.completed).length
        })

        function addNote() {
            state.notes.push({
                title: state.title,
                id: (Math.random().toString(36)).substr(2),
                completed: false
            })
            state.title = ""
        }

        function deleteNote(note) {
            state.notes = state.notes.filter(item => {
                return item.id != note.id
            })
        }

        function editNotes(index) {
            hidenVal.value = index
            state.title = state.notes[index].title
            showandHide.value = true
        }

        function updateNote() {
            console.log(hidenVal.value)
            state.notes[hidenVal.value].title = state.title
            showandHide.value = false

        }

        function completedVal(note) {
            note.completed = !note.completed
        }

        return {
            ...toRefs(state),
            hidenVal,
            showandHide,
            addNote,
            deleteNote,
            editNotes,
            updateNote,
            allTodosLenght,
            completedVal,
            completedLen,
            notcompletedLen

        }
    }

}
</script>

<style>
.d-flex {
    display: flex;
    justify-content: space-between;
}

.w-50 {
    width: 500px;
    margin: 0 auto;
}

.text-line {
    text-decoration: line-through;
}
</style>
