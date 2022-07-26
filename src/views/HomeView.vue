<template>
<div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <TodosViewVue/>
</div>
</template>

<script>
// @ is an alias to /src
import TodosViewVue from '@/components/TodosView.vue'

export default {
    name: 'HomeView',
    components: {
        TodosViewVue
    }
}
</script>
