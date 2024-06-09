export default[
    {
     path:"/member",
     component:()=>import("../pages/indexPage.vue"),
     children:[
        {
          path:"",
          component:()=>import("../pages/HomeFormeMebers.vue")
        },
        {
          path: "addproject",
          component: ()=> import ("../pages/addProjectMember.vue"),
        },
        {
          path: "acceptedProject",
          component: ()=> import ("../components/acceptedProjectModal.vue"),
        },
        {
          path: "DashboardCard",
          component: ()=> import ("../pages/dashboardForMember/DashboardCard.vue"),
        },
        {
          path: "pendingProject",
          component: ()=> import ("../pages/dashboardForMember/PendingProject.vue"),
        },
        {
          path: "maintabsForMember",
          name: 'maintabsForMember',
          component: ()=> import ("../pages/Tabs/mainTabs.vue"),
          props:true
        },
        {
          path: "testModal",
          component: ()=> import("../pages/Tabs/testModal.vue"),
        },
        {
          path: "testModal2",
          component:()=> import("../pages/Tabs/testModal2.vue"),
        },
        {
          name:'chatMember',
          path: "chatMember",
          component: ()=> import("../pages/dashboardForMember/chatMember.vue"),
        },
        {
          path: "dashboardAccount",
          component: ()=> import("../pages/dashboardForMember/DashboardAccount.vue"),
        },
        {
          path: "dashboardTest",
          component: ()=> import("../pages/dashboardForMember/DashboardTest.vue"),
        },
        {
          path:"acceptedProjectModal",
          component:()=> import("../components/acceptedProjectModal.vue"),
        },
        {
          path:"electronicContractpopup",
          component:()=> import("../components/electronicContractpopup.vue"),
        },
        {
          path:"editprojectModal",
          component:()=> import("../components/editprojectModal.vue"),
        }
    
     ]
    
    }
    ];