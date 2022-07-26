<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/project">Project</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/posts">Posts</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/productadmin/products">Product Admin</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/covid">Covid Data</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link class="nav-link" to="/quiz">Quiz</router-link>
                    </li>

                     <li class="nav-item">
                        <router-link class="nav-link" to="/quizapp">Test</router-link>
                    </li>

                      <li class="nav-item">
                        <router-link class="nav-link" to="/todo">Todo</router-link>
                    </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/todovuex">VuexTodo</router-link>
                    </li>


                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    setup() {

        return {}
    }
}
</script>

<style scoped>
nav a.router-link-exact-active {
    color: #42b983;
}
</style>
