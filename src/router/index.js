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
import projectDetails from "../modules/members/pages/Tabs/projectDetails.vue";
import projectPhases from "../modules/members/pages/Tabs/projectPhases.vue";
import electronicContract from '../modules/members/pages/Tabs/ElectronicContract.vue';
import projectTransactions from "../modules/members/pages/Tabs/projectTransactions.vue";
import projectFiles from '../modules/members/pages/Tabs/projectsFile.vue';

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
        path:"projectPhases",
        component:projectPhases
      },
      {
        path:"electronicContract",
        component:electronicContract
      },
      {
        path:"projecttransactions",
        component:projectTransactions
      },
      {
        path:"projectfiles",
        component:projectFiles
      },
    ],
  },
  // {
  //   path: "/business", 
  //   component :Business-banner
  // },
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
