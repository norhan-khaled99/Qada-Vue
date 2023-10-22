import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPanal from "../components/LoginPanal.vue";
import SuccessPartners from "../components/SuccessPartners.vue";
import HomeFormeMebers from "../modules/members/pages/HomeFormeMebers.vue";
import Addproject from "../modules/members/pages/addProjectMember.vue";
import PersonRegister from "../modules/members/pages/PersonRegister.vue";
import AboutUs from "../components/AboutUs.vue";
import TermsAndConditions from "../components/TermsAndConditions.vue";
import FAQComponent from "../components/FAQComponent.vue";
import ContactUs from "../components/ContactUs.vue";
import test from "../modules/members/pages/Tabs/mainTabs.vue";
import ProjectListforMember from "../modules/members/pages/dashboardForMember/MyProjects.vue";
import BusinessPanner from "../modules/Business/pages/BusinessPanner.vue";
import PersonLogin from "../modules/members/pages/PersonLogin.vue";
import BusinessRegister from '../modules/Business/pages/BusinessRegister.vue'
import BusinessLogin from '../modules/Business/pages/BusinessLogin.vue'
import Engineering_officesRegister from '../modules/Engineering_offices/Pages/Engineering_officesRegister.vue'
import Engineering_officesLogin from '../modules/Engineering_offices/Pages/Engineering_officesLogin.vue'
import CheckLine from '../modules/members/pages/dashboardForMember/CheckLine.vue'
import chatMember from '@/modules/members/pages/dashboardForMember/chatMember'

//  routes for tabs for member
import electronicContract from "../modules/members/pages/Tabs/ElectronicContract.vue";
import projectDetails from "../modules/members/pages/Tabs/projectDetails.vue";
import projectPhases from "../modules/members/pages/Tabs/projectPhases.vue";
import Prices_offers from "../modules/members/pages/Tabs/Prices_offers.vue";
import projectTransactions from "../modules/members/pages/Tabs/projectTransactions.vue";
import projectFiles from '../modules/members/pages/Tabs/projectsFile.vue';
import projectQuereries from  "../modules/members/pages/Tabs/projectQuereries";

import AcceptedProject from '../modules/members/pages/dashboardForMember/AcceptedProject.vue'
import DashboardCard from '../modules/members/pages/dashboardForMember/DashboardCard.vue'

//------Dashboard
import BusinessSettings from "../modules/members/pages/dashboardForMember/BusinessSettings.vue";
import UserSettings from "../modules/members/pages/dashboardForMember/UserSettings.vue";
import OfficeSettings from "../modules/members/pages/dashboardForMember/OfficeSettings.vue";
import PendingProject from "../modules/members/pages/dashboardForMember/PendingProject.vue"
import BusinessAccount from "../modules/members/pages/dashboardForMember/BusinessAccount.vue";
import UserAccount from "../modules/members/pages/dashboardForMember/UserAccount.vue";
import OfficeAccount from "../modules/members/pages/dashboardForMember/OfficeAccount.vue";
import BusinessComponent from "../modules/members/pages/dashboardForMember/BusinessComponent.vue";
import OfficesComponent from "../modules/members/pages/dashboardForMember/OfficesComponent.vue";
import UsersComponent from "../modules/members/pages/dashboardForMember/UsersComponent.vue";
import DashboardAccount from "../modules/members/pages/dashboardForMember/DashboardAccount.vue"
import TriangleDesign from "../modules/members/pages/Tabs/TriangleDesign.vue"
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
    component: SuccessPartners,
  },
  {
    path: "/member",
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
        path: "dashborad/projects",
        component: ProjectListforMember,
      },
      {
        path: "projectdetails",
        component: projectDetails,
      },
      {
        path: "pricesOffers",
        component: Prices_offers,
      },
      {
        path: "projectPhases",
        component: projectPhases,
      },
      {
        path: "electronicContract",
        component: electronicContract,
      },
      {
        path: "projecttransactions",
        component: projectTransactions,
      },
      {
        path: "projectfiles",
        component: projectFiles,
      },
      {
        path: "projectquereries",
        component: projectQuereries,
      },
      {
        path: "checkLine",
        component: CheckLine,
      },
      {
        path: "acceptedProject",
        component: AcceptedProject,
      },
      {
        path: "DashboardCard",
        component: DashboardCard
      }, {
        path: 'pendingProject',
        component: PendingProject
      },
      {
        path:'dashboardCard',
        component: DashboardCard,
      },
      {
        path:"test",
        component:test
      },
      {
        path:"chatMember",
        component:chatMember
      },
      {
        path: 'dashboardAccount',
        component: DashboardAccount
      },
      {
        path: 'triangle',
        component: TriangleDesign
      }
    ],
  },
  {
    path: "/business",
    children: [
      {
        path: "businessRegister",
        component: BusinessRegister,
      },
      {
        path: "businessLogin",
        component: BusinessLogin,
      },
      {
        path: "businessPanner",
        component: BusinessPanner,
      },
    ],
  },
  {
    path: "/EngineeringOffices",
    children: [
      {
        path: "Engineering_officesRegister",
        component: Engineering_officesRegister,
      },
      {
        path: "Engineering_officesLogin",
        component: Engineering_officesLogin,
      },
    ],
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
    path: "/businesssettings",
    component: BusinessSettings,
  },
  {
    path: "/usersettings",
    component: UserSettings,
  },
  {
    path: "/officesettings",
    component: OfficeSettings,
  },
  {
    path: "/businessaccount",
    component: BusinessAccount,
  },
  {
    path: "/useraccount",
    component: UserAccount,
  },
  {
    path: "/officeaccount",
    component: OfficeAccount,
  },
  {
    path: "/business",
    component: BusinessComponent,
  },
  {
    path: "/offices",
    component: OfficesComponent,
  },
  {
    path: "/users",
    component: UsersComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
