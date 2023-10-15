import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeFormeMebers from "../modules/members/pages/HomeFormeMebers.vue"
import Addproject from '../modules/members/pages/addProjectMember.vue'
// import Login  from '../sharedcomponents/LoginPage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
