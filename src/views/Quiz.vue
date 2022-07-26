<template>
<div class="mt-5">
    <h3>Vue 3 Quiz app</h3>
    <hr />
    <section class="quiz" v-if="!quizCompleted">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-4 text-left mt-5">
                    <ul class="list-group">
                        <div>
                            <h5>{{getCurrentQuestion.question}}</h5>
                            <li class="list-group-item " v-for="(option,index) in getCurrentQuestion.options" :key="index" 
                            :class="`option ${ getCurrentQuestion.selected == index ? index == getCurrentQuestion.answer ? 'bg-success text-white' : 'bg-danger text-white': ''}`">
                                <label :for="`option${index}`">
                                    <input type="radio" :id="`option${index}`" v-model="getCurrentQuestion.selected" :value="index" :name="getCurrentQuestion.index" @change="getAnser" :disabled="getCurrentQuestion.selected" />
                                    {{option}}
                                </label>
                            </li>
                        </div>
                    </ul>
                    <button class="btn btn-success btn-sm mt-2" :disabled="!getCurrentQuestion.selected" @click="nextQuestion">
                        {{ 
                           getCurrentQuestion.index == questions.length - 1 ? 'Finish' : 
                           getCurrentQuestion.selected == null ? 'Select an option': 'Next question'
                        }}
                </button>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-5 w-100 justify-content-center d-flex" v-else>
        <div class=" bg-info p-5">
            <h2>You have finished the quiz!</h2>
            <h3>Your score is = {{score}}/{{questions.length}}</h3>
        </div>

    </section>
</div>
</template>

<script>
import {
    ref,
    computed,
    reactive
} from 'vue'
export default {
    setup() {
        const currentvalue = ref(0)
        const quizCompleted = ref(false)
        const questions = reactive([{
                question: 'What is Vue?',
                answer: 0,
                options: [
                    'A framework',
                    'A library',
                    'A type of hat'
                ],
                selected: null
            },
            {
                question: 'What is Vuex used for?',
                answer: 2,
                options: [
                    'Eating a delicious snack',
                    'Viewing things',
                    'State management'
                ],
                selected: null
            },
            {
                question: 'What is Vue Router?',
                answer: 1,
                options: [
                    'An ice cream maker',
                    'A routing library for Vue',
                    'Burger sauce'
                ],
                selected: null
            }
        ])

        const getCurrentQuestion = computed(() => {
            let question = questions[currentvalue.value]
            question.index = currentvalue.value
            return question

        })

        const getAnser = (e) => {
            questions[currentvalue.value].selected = e.target.value
            e.target.value = null
        }

        const nextQuestion = () => {
            if (currentvalue.value < questions.length - 1) {
                currentvalue.value++
                return
            }
            quizCompleted.value = true
        }

        const score = computed(() => {
            let total = 0;
            questions.map(que => {
                if (que.selected != null && que.answer == que.selected) {
                    console.log("currect")
                    total++
                }
            })
            return total
        })

        return {
            questions,
            currentvalue,
            getCurrentQuestion,
            nextQuestion,
            quizCompleted,
            getAnser,
            score

        }

    }
}
</script>

<style scoped>
.text-left {
    text-align: left;
    background: #def3de;
    padding: 10px;
}
</style>
