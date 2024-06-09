import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
//---components
// import LoginPanal from "../components/LoginPanal.vue";
import SuccessPartners from "../modules/members/components/SuccessPartners.vue";
import AboutUs from "../modules/members/components/AboutUs.vue";
import TermsAndConditions from "../modules/members/components/TermsAndConditions.vue";
import ContactUs from "../modules/members/components/ContactUs.vue";
import FAQComponent from "../modules/members/components/FAQComponent.vue";
//--modules
//--------members------------
import HomePageForMembers from "../modules/members/pages/HomeFormeMebers.vue";
import PersonRegister from "../modules/members/pages/PersonRegister.vue";

import PersonLogin from "../modules/members/pages/PersonLogin.vue";

//--routes for tabs for Engineering_offices


//  routes for tabs for member
///////////////////////////////////////////////////////////



// import DashboardAccount from "../modules/members/pages/dashboardForMember/DashboardAccount.vue"
//-----------------


//-----------------

import adminroutrs from "../modules/Admin/routes/routes";
import memberRoutes from "../modules/members/routes/routes";
import bussinessRoutes from "../modules/Business/routes/routes";
import officeRoutes from "../modules/Engineering_offices/routes/routes";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomePageForMembers,
  },
  {
    path: "/loginPanal",
    name: "LoginPanal",
    component: () => import("../components/LoginPanal.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import( "../views/AboutView.vue"),
  },
  {
    path: "/successPartners",
    component: SuccessPartners,
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
  {
    path: "/termsandconditions",
    component: TermsAndConditions,
  },
  {
    path: "/faq",
    component: FAQComponent,
  },
  {
    path: "/contactus",
    component: ContactUs,
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../components/notFound.vue")

  },
  
  ...adminroutrs,
  ...memberRoutes,
  ...bussinessRoutes,
  ...officeRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
