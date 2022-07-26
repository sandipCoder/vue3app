<template>
<div>
    <h1> All Posts </h1>
    <button class="btn btn-link" @click="addpopShow">Add Post</button>
    <div class="dark" v-if="postData.popup"></div>
    <div class="popup w-25 p-3 bg-secondary " v-if="postData.popup">
        <span class="float-end text-white btn btn-link text-decoration-none" @click="closePop"> X</span>
        <div class="title-pop">
            <h3>Add Post</h3>
        </div>
        <div class="body text-left">
            <form action="" @submit.prevent="addNewPost">
                <div class="mb-2">
                    <label for="postTitle" class="form-label">Post Title</label>
                    <input type="text" class="form-control" id="postTitle" v-model="postData.title" placeholder="post Title">
                </div>
                <div class="mb-2">
                    <label for="postbody" class="form-label">Post Description</label>
                    <textarea class="form-control" id="postbody" v-model="postData.body" rows="3"></textarea>
                </div>

                <div>
                    <button class="btn btn-success btn-sm">Submit</button>
                </div>
            </form>
        </div>
    </div>

    <div class="container">
        <hr class="my-4" />
        <div class="row">
            <Allposts v-for="post in postData.posts" :key="post.id" :post="post" />
        </div>
    </div>
</div>
</template>

<script>
import {
    reactive,
    ref,
    toRefs
} from 'vue'
import Allposts from '../components/Allposts.vue'
import {
    onMounted
} from 'vue'
import axios from 'axios'
export default {
    components: {
        Allposts
    },
    setup() {
        const postData = reactive({
            posts: [],
            popup: false,
            title: '',
            body: ''
        });
        onMounted(() => {
            axios.get('https://dummyjson.com/posts').then(respose => {
                return postData.posts = respose.data.posts
            })
        })

        function addpopShow() {
            postData.popup = true
        }

        function closePop() {
            postData.popup = false
        }

        function addNewPost() {
            if (postData.title === '' && postData.body === '') {
                alert("please Enter valid data")
            } else {
                axios.post("https://dummyjson.com/posts/add", {
                    title: postData.title,
                    body: postData.body,
                    userId: 5,

                }).then(res => {
                    postData.posts.unshift(res.data)
                        postData.title = '',
                        postData.body = ''
                })
                closePop()
            }

        }
        return {
            // /...toRefs(postData)
            postData,
            addpopShow,
            addNewPost,
            closePop
        }
    }
}
</script>

<style scoped>
div.dark {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.566);
}

.popup {
    position: fixed;
    z-index: 1041;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: gray;
    text-align: left !important;
}
</style>
