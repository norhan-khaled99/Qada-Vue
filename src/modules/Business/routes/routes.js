export default[
    {
    path:"/business",
    component:()=> import ("../pages/indexPage.vue"),
    children: [
          {
            path: "",
            component: ()=> import ("../pages/bussinessHomePage.vue"),
          },
          {
            path: "addProjectBussiness",
            component: ()=>import("../pages/addProjectBussiness.vue"),
          },
          {
            name:'bussnessRegister',
            path: "register",
            component: ()=>import("../pages/BusinessRegister.vue"),
          },
          {
            path: "login",
            component: ()=>import("../pages/BusinessLogin.vue"),
          },
          {
            path: "aboutus",
            component:  ()=>import("../components/AboutUs.vue"),
          },
          {
            path: "ContactUs",
            component: ()=>import("../components/ContactUs.vue"),
          },
          {
            path: "FAQ",
            component: ()=>import("../components/FAQComponent.vue"),
          },
          {
            path: "SuccessPartners",
            component:  ()=>import("../components/SuccessPartners.vue"),
          },
          {
            path: "TermsAndConditions",
            component: ()=>import("../components/TermsAndConditions.vue"),
          },
          {
            name:'maintabsForBussiness',
            path: "maintabsForBussiness/:id",
            component: ()=>import("../pages/Tabs/mainTabs.vue"),
          },
    ],
    }
];