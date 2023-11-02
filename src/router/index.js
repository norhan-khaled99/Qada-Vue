import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
//---components
import LoginPanal from "../components/LoginPanal.vue";
import SuccessPartners from "../modules/members/components/SuccessPartners.vue";
import AboutUs from "../modules/members/components/AboutUs.vue";
import TermsAndConditions from "../modules/members/components/TermsAndConditions.vue";
import ContactUs from "../modules/members/components/ContactUs.vue";
import FAQComponent from "../modules/members/components/FAQComponent.vue";
//--modules
//--------members------------
import HomePageForMembers from "../modules/members/pages/HomeFormeMebers.vue";
import Addproject from "../modules/members/pages/addProjectMember.vue";
import PersonRegister from "../modules/members/pages/PersonRegister.vue";

import CheckLine from "../modules/members/pages/dashboardForMember/CheckLine.vue";
import chatMember from "@/modules/members/pages/dashboardForMember/chatMember";
import ProjectListforMember from "../modules/members/pages/dashboardForMember/MyProjects.vue";

import maintabsForMember from "../modules/members/pages/Tabs/mainTabs.vue";
import PersonLogin from "../modules/members/pages/PersonLogin.vue";

//--Engineering_offices
import Engineering_officesRegister from "../modules/Engineering_offices/Pages/Engineering_officesRegister.vue";
import Engineering_officesLogin from "../modules/Engineering_offices/Pages/Engineering_officesLogin.vue";

//--routes for tabs for Engineering_offices


//  routes for tabs for member
import electronicContract from "../modules/members/pages/Tabs/ElectronicContract.vue";
import projectDetails from "../modules/members/pages/Tabs/projectDetails.vue";
import projectPhases from "../modules/members/pages/Tabs/projectPhases.vue";
import Prices_offers from "../modules/members/pages/Tabs/Prices_offers.vue";
import projectTransactions from "../modules/members/pages/Tabs/projectTransactions.vue";
import projectFiles from "../modules/members/pages/Tabs/projectsFile.vue";
import projectQuereries from "../modules/members/pages/Tabs/projectQuereries";
import testModal from "../modules/members/pages/Tabs/testModal.vue";
import testModal2 from "@/modules/members/pages/Tabs/testModal2.vue";
// import requestToEdit from "../modules/members/components/requestToEdit.vue"
import AcceptedProject from "../modules/members/pages/dashboardForMember/AcceptedProject.vue";
import DashboardCard from "../modules/members/pages/dashboardForMember/DashboardCard.vue";
import PendingProject from "../modules/members/pages/dashboardForMember/PendingProject.vue";
import acceptedProjectModal from '@/modules/members/components/acceptedProjectModal.vue'

//--------Business------------
import BusinessRegister from "../modules/Business/pages/BusinessRegister.vue";
import BusinessLogin from "../modules/Business/pages/BusinessLogin.vue";
import BusinessHomePage from "../modules/Business/pages/bussinessHomePage.vue";
import addProjectBussiness from '@/modules/Business/pages/addProjectBussiness'
//---routes for Tabs for Business
import BprojectDetails from "../modules/Business/pages/Tabs/projectDetails.vue";
import BPrices_offers from "../modules/Business/pages/Tabs/Prices_offers.vue";
import BelectronicContract from "../modules/Business/pages/Tabs/ElectronicContract.vue";
import BprojectQuereries from "../modules/Business/pages/Tabs/projectQuereries";
import Bprojectphases from "../modules/Business/pages/Tabs/projectPhases.vue";
import BprojectFiles from "../modules/Business/pages/Tabs/projectsFile.vue";
import BprojectTransactions from "../modules/Business/pages/Tabs/projectTransactions.vue";
import maintabsForBussiness from "../modules/Business/pages/Tabs/mainTabs.vue";

//---routes for components for Business
import BAboutUs from "../modules/Business/components/AboutUs.vue";
import BContactUs from "../modules/Business/components/ContactUs.vue";
import BFAQComponent from "../modules/Business/components/FAQComponent.vue";
import BSuccessPartners from "../modules/Business/components/SuccessPartners.vue";
import BTermsAndConditions from "../modules/Business/components/TermsAndConditions.vue";

///////////////////////////////////////////////////////////



// import DashboardAccount from "../modules/members/pages/dashboardForMember/DashboardAccount.vue"
import UsersStats from "../modules/Admin/users/UsersStats.vue";
//-----------------
// import TriangleDesign from "../modules/members/pages/Tabs/TriangleDesign.vue"


// import UsersComponent from "../modules/modules/Admin/pages/UsersComponent.vue";
import DashboardAccount from "../modules/members/pages/dashboardForMember/DashboardAccount.vue";
// import UsersStats from "../modules/Admin/pages//UsersStats.vue";
import  UserAccountDashboard from "../modules/members/pages/dashboardForMember/UserAccountDashboard.vue";
// import UsersStats from "../modules/Admin/pages//UsersStats.vue";
//-----------------
import TriangleDesign from "../modules/members/pages/Tabs/TriangleDesign.vue";

import DashboardTest from "../modules/members/pages/dashboardForMember/DashboardTest.vue";
import MainHomepage from "../modules/Admin/pages/MainHomepage.vue";
//-----------------------------admin-------------------------------------------------
//------Users--Dashboard----admin-----
import UserSettings from "../modules/Admin/users/UserSettings.vue";
import UserAccount from "../modules/Admin/users/UserAccount.vue";
import UsersComponent from "../modules/Admin/users/UsersComponent.vue";

//------Offices--Dashboard----admin-----
import OfficesComponent from "../modules/Admin/offices/OfficesComponent.vue";
import OfficeAccount from "../modules/Admin/offices/OfficeAccount.vue";
import OfficeSettings from "../modules/Admin/offices/OfficeSettings.vue";

//--------Business--Dashboard----admin------
import BusinessSettings from "../modules/Admin/business/BusinessSettings.vue";
import BusinessAccount from "../modules/Admin/business/BusinessAccount.vue";
import BusinessComponent from "../modules/Admin/business/BusinessComponent.vue";

import chatOffice from "../modules/Engineering_offices/Pages/chatOffice.vue"
import HomePageforOffice from '@/modules/Engineering_offices/Pages/HomePageforOffice'




const routes = [
  {
    path: "/",
    name: "home",
    component: HomePageForMembers,
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
    path: "/admin",
    children: [
      {
        path: "homepage",
        component: MainHomepage,
      },
      {
        path: "usersettings",
        component: UserSettings,
      },
      {
        path: "businesssettings",
        component: BusinessSettings,
      },
      {
        path: "/officesettings",
        component: OfficeSettings,
      },
      {
        path: "businessaccount",
        component: BusinessAccount,
      },
      {
        path: "useraccount",
        component: UserAccount,
      },
      {
        path: "officeaccount",
        component: OfficeAccount,
      },
      {
        path: "business",
        component: BusinessComponent,
      },
      {
        path: "offices",
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
      
    ]
  },
  {
    path: "/member",
    children: [
      {
        path: "",
        component: HomePageForMembers,
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
        path: "maintabsForMember",
        component: maintabsForMember,
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
      {
        path:"acceptedProjectModal",
        component:acceptedProjectModal
      }
      // {
      //   path:"requestToEdit",
      //   component:requestToEdit
      // }
    ],
  },

  {
    path: "/business",
    children: [
      {
        path: "",
        component: BusinessHomePage,
      },
      {
        path:"addProjectBussiness",
        component:addProjectBussiness
      },
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
      {
        path: "BprojectDetails",
        component: BprojectDetails,
      },
      {
        path: "BprojectQuereries",
        component: BprojectQuereries,
      },
      {
        path: "BprojectFiles",
        component: BprojectFiles,
      },
      {
        path: "BPrices_offers",
        component: BPrices_offers,
      },
      {
        path: "BelectronicContract",
        component: BelectronicContract,
      },
      {
        path: "projectPhases",
        component: Bprojectphases,
      },
      {
        path: "projectTransactions",
        component: BprojectTransactions,
      },
      {
        path:"maintabsForBussiness",
        component:maintabsForBussiness
      }
    ],
  },

  {
    path: "/EngineeringOffices",
    children: [
      {
        path: "",
        component: HomePageforOffice,
      },
      {
        path: "Engineering_officesRegister",
        component: Engineering_officesRegister,
      },
      {
        path: "Engineering_officesLogin",
        component: Engineering_officesLogin,
      },
      {
        path: "chatOffice",
        component: chatOffice,
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
    path: "/UserAccountDashboard",
    component: UserAccountDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
