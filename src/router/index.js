import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPanal from "../components/LoginPanal.vue"
import SuccessPartners from "../components/SuccessPartners.vue"
import HomeFormeMebers from "../modules/members/pages/HomeFormeMebers.vue"
import Addproject from '../modules/members/pages/addProjectMember.vue'
import PersonRegister from '../modules/members/pages/PersonRegister.vue'
import PersonLogin from "../modules/members/pages/PersonLogin.vue";
import AboutUs from "../components/AboutUs.vue";
import ProjectListforMember from "../modules/members/pages/dashboardForMember/MyProjects.vue";
import projectDetails from "../modules/members/pages/Tabs/projectDetails.vue"
import Prices_offers from "../modules/members/pages/Tabs/Prices_offers.vue";
import Business_banner
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/successPartners",
    component: SuccessPartners
  },
  {
    path:"/member", 
    children: [
      {
        path: "",
        component: HomeFormeMebers,
      },
      {
        path: "addproject",
        component: Addproject,
      },
      {
        path:"dashborad/projects",
        component:ProjectListforMember
      },
      {
        path:"projectdetails",
        component:projectDetails
      },
      {
        path:"pricesOffers",
        component:Prices_offers
      }
    ],
  },
  {
    path: "/business", 
    component : Business-banner
  },
  {
    path: "/person/register",
    component: PersonRegister,
  },
  {
    path: "/person/login",
    component: PersonLogin,
  },
  {
    path: "/aboutus",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
