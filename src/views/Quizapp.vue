<template>
<div class="mt-5">
    <h3>Vue 3 Quiz app</h3>
    <hr />
    <section class="quiz" v-if="!completedQuiz">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-4 text-left mt-5">
                    <ul class="list-group">
                        <div>
                            <h5>{{getCurrentQuestion.question}}</h5>
                            <li class="list-group-item" v-for="(option,index) in getCurrentQuestion.options" :key="index">
                                <label :for="`option${index}`">
                                    <input type="radio" :id="`option${index}`" v-model="getCurrentQuestion.selected" :name="getCurrentQuestion.index" :value="index" @change="setAnswer" :disabled="getCurrentQuestion.selected"/>
                                    {{option}}
                                </label>
                            </li>
                        </div>
                    </ul>
                    <button class="btn btn-success btn-sm mt-2" @click="NextQuestion">Next</button>
                </div>
            </div>
        </div>
    </section>
    <section v-else>
        <h2>You have finished the quiz!</h2>
        <p>Your score is {{getScore}}/{{questions.length}}</p>
    </section>
</div>
</template>

<script>
import {
    computed,
    ref
} from "vue"

export default {

    setup() {
        const completedQuiz = ref(false)
        const currentvalue = ref(0)
        const questions = ref([{
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
            let question = questions.value[currentvalue.value]
            question.index = currentvalue.value
            return question
        })

        const NextQuestion = () => {
            if (currentvalue.value < questions.value.length - 1) {
                currentvalue.value++
                return
            }
            completedQuiz.value = true
        }

        const setAnswer = (e) => {
            questions.value[currentvalue.value].selected = e.target.value;
            e.target.value = null
        }
        const getScore = computed(() => {
            let value = 0;
            questions.value.map(q => {
                if (q.selected != null && q.answer == q.selected) {
                    value++
                    console.log("correct")
                }
            })
            return value
        })

        return {
            currentvalue,
            questions,
            getCurrentQuestion,
            NextQuestion,
            completedQuiz,
            setAnswer,
            getScore
        }
    }
}
</script>

<style scoped>
.text-left {
    text-align: left;
    background: #dadada;
    padding: 10px;
}
</style>
