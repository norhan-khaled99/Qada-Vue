import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginPanal from "../components/LoginPanal.vue";
import SuccessPartners from "../components/SuccessPartners.vue";
import HomeFormeMebers from "../modules/members/pages/HomeFormeMebers.vue";
import Addproject from "../modules/members/pages/addProjectMember.vue";
import PersonRegister from "../modules/members/pages/PersonRegister.vue";
import AboutUs from "../components/AboutUs.vue";
import TermsAndConditions from "../components/TermsAndConditions.vue";
import FAQComponent from "../components/FAQComponent.vue";
import ContactUs from "../components/ContactUs.vue";
import maintabs from "../modules/members/pages/Tabs/mainTabs.vue";
import ProjectListforMember from "../modules/members/pages/dashboardForMember/MyProjects.vue";
// import BusinessPanner from "../modules/Business/pages/BusinessPanner.vue";
import PersonLogin from "../modules/members/pages/PersonLogin.vue";
import Engineering_officesRegister from "../modules/Engineering_offices/Pages/Engineering_officesRegister.vue";
import Engineering_officesLogin from "../modules/Engineering_offices/Pages/Engineering_officesLogin.vue";
import CheckLine from "../modules/members/pages/dashboardForMember/CheckLine.vue";
import chatMember from "@/modules/members/pages/dashboardForMember/chatMember";
import testModal from "../modules/members/pages/Tabs/testModal.vue";
import testModal2 from "@/modules/members/pages/Tabs/testModal2.vue";
//  routes for tabs for member
import electronicContract from "../modules/members/pages/Tabs/ElectronicContract.vue";
import projectDetails from "../modules/members/pages/Tabs/projectDetails.vue";
import projectPhases from "../modules/members/pages/Tabs/projectPhases.vue";
import Prices_offers from "../modules/members/pages/Tabs/Prices_offers.vue";
import projectTransactions from "../modules/members/pages/Tabs/projectTransactions.vue";
import projectFiles from "../modules/members/pages/Tabs/projectsFile.vue";
import projectQuereries from "../modules/members/pages/Tabs/projectQuereries";
import AcceptedProject from "../modules/members/pages/dashboardForMember/AcceptedProject.vue";
import DashboardCard from "../modules/members/pages/dashboardForMember/DashboardCard.vue";
import PendingProject from "../modules/members/pages/dashboardForMember/PendingProject.vue";

//------Users--Dashboard----admin-----
import UserSettings from "../modules/Admin/pages/UserSettings.vue";
import UserAccount from "../modules/Admin/pages/UserAccount.vue";
import UsersComponent from "../modules/Admin/pages/UsersComponent.vue";

//------Offices--Dashboard----admin-----
import OfficesComponent from "../modules/members/pages/dashboardForMember/OfficesComponent.vue";
import OfficeAccount from "../modules/members/pages/dashboardForMember/OfficeAccount.vue";
import OfficeSettings from "../modules/members/pages/dashboardForMember/OfficeSettings.vue";

//--------Business--Dashboard----admin------
import BusinessSettings from "../modules/members/pages/dashboardForMember/BusinessSettings.vue";
import BusinessAccount from "../modules/members/pages/dashboardForMember/BusinessAccount.vue";
import BusinessComponent from "../modules/members/pages/dashboardForMember/BusinessComponent.vue";

//--------Business------------
import BusinessRegister from "../modules/Business/pages/BusinessRegister.vue";
import BusinessLogin from "../modules/Business/pages/BusinessLogin.vue";
//---routes for components for Business
import BAboutUs from "../modules/Business/components/AboutUs.vue";
import BContactUs from "../modules/Business/components/ContactUs.vue";
import BFAQComponent from "../modules/Business/components/FAQComponent.vue";
import BSuccessPartners from "../modules/Business/components/SuccessPartners.vue";
import BTermsAndConditions from "../modules/Business/components/TermsAndConditions.vue";



// import DashboardAccount from "../modules/members/pages/dashboardForMember/DashboardAccount.vue"
import UsersStats from "../modules/Admin/pages/UsersStats.vue";
//-----------------
// import TriangleDesign from "../modules/members/pages/Tabs/TriangleDesign.vue"


// import UsersComponent from "../modules/modules/Admin/pages/UsersComponent.vue";
import DashboardAccount from "../modules/members/pages/dashboardForMember/DashboardAccount.vue";
// import UsersStats from "../modules/Admin/pages//UsersStats.vue";
import  UserAccountDashboard from "../modules/Admin/pages/UserAccountDashboard.vue";
// import UsersStats from "../modules/Admin/pages//UsersStats.vue";
//-----------------
import TriangleDesign from "../modules/members/pages/Tabs/TriangleDesign.vue";

import DashboardTest from "../modules/members/pages/dashboardForMember/DashboardTest.vue";
import MainHomepage from "../modules/Admin/pages/MainHomepage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeFormeMebers,
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
        component: DashboardCard,
      },
      {
        path: "pendingProject",
        component: PendingProject,
      },
      {
        path: "dashboardCard",
        component: DashboardCard,
      },
      {
        path: "maintabs",
        component: maintabs,
      },
      {
        path: "testModal",
        component: testModal,
      },
      {
        path: "testModal2",
        component: testModal2,
      },
      {
        path: "chatMember",
        component: chatMember,
      },
      {
        path: "dashboardAccount",
        component: DashboardAccount,
      },
      {
        path: "triangle",
        component: TriangleDesign,
      },
      {
        path: "dashboardTest",
        component: DashboardTest,
      },
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
        path: "aboutus",
        component: BAboutUs,
      },
      {
        path: "ContactUs",
        component: BContactUs,
      },
      {
        path: "FAQ",
        component: BFAQComponent,
      },
      {
        path: "SuccessPartners",
        component: BSuccessPartners,
      },
      {
        path: "TermsAndConditions",
        component: BTermsAndConditions,
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
  {
    path: "/usersstats",
    component: UsersStats,
  },
  {
    path: "/admin/homepage",
    component: MainHomepage,
  },
  {
    path: "/UserAccountDashboard",
    component: UserAccountDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
