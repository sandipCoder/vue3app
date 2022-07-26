
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    title: "New Title",
    counts: 0,
    todos: [],
    apiData:{},
    recipes: [
      {
        slug: 'katsu-curry',
        title: 'Katsu Curry',
        description: 'A delicious curry made with chicken, potatoes, and a special sauce',
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder',
        ],
        method: [
          'Heat oil in a large skillet over medium heat.',
          'Add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
          'Add curry powder and cook, stirring, until fragrant, about 1 minute.',
          'Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes.',
        ]
      },
      {
        slug: 'ramen-noodle-soup',
        title: 'Ramen noodle soup',
        description: 'A delicious curry made with chicken, potatoes, and a special sauce',
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion, chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder',
        ],
        method: [
          'Heat oil in a large skillet over medium heat.',
          'Add onion and garlic and cook, stirring often, until softened, about 5 minutes.',
          'Add curry powder and cook, stirring, until fragrant, about 1 minute.',
          'Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes.',
        ]
      }
    ]
  },
  getters: {
    getallData(state) {
      return state.counts
    },
    getAllTodos(state) {
      return state.todos
    }
  },
  mutations: {
    // GET_ALLPOST(state, data) {
    //   state.posts = data
    // },

    ADD_NETODO(state, title) {
      state.todos.push({
        title,
        id: new Date().getTime(),
        done: false
      })
      //console.log(state.todos)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

    DELETE_TODO(state, delteTodo) {
      state.todos = state.todos.filter(todo => todo.id != delteTodo.id)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

    STATUS_CHANGE(state, todo) {
      let index = state.todos.indexOf(todo)
      console.log(index)
      state.todos[index].done != todo.done
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

    incrementCount(state, num) {
      state.counts = state.counts + num
    },

    ADD_RECIPE(state, foodData) {
      state.recipes.push(foodData)
    },

    SHOW_DATA(state,data){
     state.apiData = data
    }
  },
  actions: {
    // getPosts({ commit }) {
    //   axios.get('https://dummyjson.com/posts').then(respose => {
    //     commit('GET_ALLPOST', respose.daat)
    //     console.log(respose.data)
    //   })

    // }

    async fetchData({ commit }) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      const data = res.data
      commit("SHOW_DATA", data)
      console.log(data)
    },

    updateCount({ commit }, num) {
      commit('incrementCount', num)
    }
  },
  modules: {
  }
})
