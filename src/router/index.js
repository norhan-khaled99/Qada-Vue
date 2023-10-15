import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeFormeMebers from "../modules/members/pages/HomeFormeMebers.vue"
import LoginPanal from "../components/LoginPanal.vue"
import Addproject from '../modules/members/pages/addProjectMember.vue'
import PersonRegister from '../modules/members/pages/PersonRegister.vue'
import PersonLogin from "../modules/members/pages/PersonLogin.vue";

// import Login  from '../sharedcomponents/LoginPage.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/loginPanal",
    component: LoginPanal,
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
    path:"/member",
    
    children: [
      {
        path:"",
        component:HomeFormeMebers,
      },
      {
        path:"addproject", 
        component:Addproject,
      },
    ]
  },
  {
    path: "/person/register",
    component: PersonRegister,
  },
  {
    path: "/person/login",
    component: PersonLogin,
  },
];
    
    


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
