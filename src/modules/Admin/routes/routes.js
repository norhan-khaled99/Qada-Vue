export default[
    {
        path:"/admin",
        component:()=> import ("../pages/indexPage.vue"),
        children: [
            {
            path:"",
            name:"admin",
            component:()=> import ("../pages/AdminLogin.vue"),
            },
              {
                path: "homepage",
                component: ()=> import ("../pages/MainHomepage.vue"),
              },
              {
                path: "adminSidBar",
                component: ()=> import ("../pages/AdminSideBar.vue")
              },
              {
                path: "addedProjects",
                component:()=> import ("../pages/AddedProjects.vue")
              },
              {
                path: "pendingProjects",
                component: ()=> import ("../pages/PendingProjects.vue")
              },
              {
                path: "usersettings",
                component: ()=> import ("../../Admin/users/UserSettings.vue"),
              },
              {
                path: "businesssettings",
                component: ()=> import ("../../Admin/business/BusinessSettings.vue"),
              },
              
        
              {
                path: "officesettings",
                component: ()=> import ("../../Admin/offices/OfficeSettings.vue"),
              },
              {
                path: "useraccount",
                component: ()=> import ("../../Admin/users/UserAccount.vue"),
              },
              {
                path: "businessaccount",
                component: ()=> import ("../../Admin/business/BusinessAccount.vue"),
              },
              {
                path: "officeaccount",
                component: () =>import ("../../Admin/offices/OfficeAccount.vue"),
              },
              {
                path: "business",
                component: ()=>import ("../../Admin/business/BusinessComponent.vue"),
              },
              {
                path: "offices",
                component: () =>import ("../../Admin/offices/OfficesComponent.vue"),
              },
              {
                path: "users",
                component: () =>import ("../../Admin/users/UsersComponent.vue"),
              },
              {
                path: "usersstats",
                component: () =>import ("../../Admin/users/UsersStats.vue"),
              },
              {
                path: "businessState",
                component: ()=> import ("../../Admin/business/BusinessStats.vue")
              },
              {
                path: "officeStats",
                component: ()=> import ("../../Admin/offices/OfficeStats.vue")
              }
    
        ],
    
    }
    ];