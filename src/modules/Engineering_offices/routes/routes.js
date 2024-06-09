export default[
    {
    path:"/EngineeringOffices",
    component:()=>import("../Pages/indexPage.vue"),
    children:[
        {
            path: "",
            component: ()=>import("../Pages/HomePageforOffice.vue"),
          },
          {
            name:'officeRegister',
            path: "register",
            component: ()=>import("../Pages/Engineering_officesRegister.vue"),
          },
          {
            path: "login",
            component: ()=>import("../Pages/Engineering_officesLogin.vue"),
          },
          {
            path: "chatOffice",
            component: ()=>import("../Pages/chatOffice.vue"),
          },
          {
            path: "aboutus",
            component: ()=>import("../components/AboutUs.vue"),
          },
          {
            path: "TermsAndConditions",
            component: ()=>import("../components/TermsAndConditions.vue"),
          },
          {
            path: "SuccessPartners",
            component: ()=>import("../components/SuccessPartners.vue"),
    
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
              path: "mainTabsForOffice/:id",
              name: 'mainTabsForOffice',
              component: ()=>import("../Pages/Tabs/mainTabs.vue"),
              props:true
          }
    ]
    }
    ];