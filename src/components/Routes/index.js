import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../Views/SignUp.vue";
import Home from "../Views/Home.vue";
import LogIn from "../Views/LogIn.vue";
import Add from '../Views/AddRestaurant.vue';
import Update from "../Views/UpdateRestaurant.vue";
const routes = [
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
   
  },{
    path: "/",
    name: "Home",
    component: Home,
  }
  ,{
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
  }
  ,{
    path: "/Add",
    name: "Add",
    component: Add,
  } ,{
    path: "/Update/:id",
    name: "Update",
    component: Update,
  }
];
const router = createRouter({
      routes,
      history: createWebHistory(),
    });
export default router;