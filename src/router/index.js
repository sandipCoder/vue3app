import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import RecipeView from "../views/RecipeView.vue";
import PostView from "../views/PostView.vue";
import GetPost from "../views/GetPost.vue";

import ProductAdmin from "../views/ProductAdmin.vue";
import Products from "../views/Products.vue";
import ProductCreate from "../views/ProductCreate.vue";
import ProductEdit from "../views/ProductEdit.vue";
import Quizapp from "../views/Quizapp.vue";
import Quiz from "../views/Quiz.vue";

import TodosList from "../views/TodosList.vue";

import Covid from "../views/Covid.vue";
import Todovuex from "../views/Todovuex.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/project",
    name: "ProjectsView",
    component: ProjectsView,
  },

  {
    path: "/recipe/:slug",
    name: "RecipeView",
    component: RecipeView,
  },
  {
    path: "/posts",
    name: "PostView",
    component: PostView,
  },
  {
    path: "/getpost/:id",
    name: "GetPost",
    component: GetPost,
  },
  {
    path: "/productadmin",
    name: "ProductAdmin",
    component: ProductAdmin,
    children: [
      {
        path: "products",
        name: "Products",
        component: Products,
      },
      {
        path: "products/create",
        name: "ProductCreate",
        component: ProductCreate,
      },
      {
        path: "products/:id/edit",
        name: "ProductEdit",
        component: ProductEdit,
        props: true,
      },
    ],
  },
  {
    path: "/covid",
    name: "Covid",
    component: Covid,
  },
  {
    path: "/quiz",
    name: "Quizapp",
    component: Quizapp,
  },
  {
    path: "/quizapp",
    name: "Quiz",
    component: Quiz,
  },
  {
    path: "/todo",
    name: "TodosList",
    component: TodosList,
  },
  {
    path: "/todovuex",
    name: "Todovuex",
    component: Todovuex,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
