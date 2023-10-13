export default[
  {
    path:"intereset",
    name:"",
    component:() => import("../pages/indexPage.vue"),
    children:[
      {
      path: "",
      name: "intereset",
      component: () => import("../pages/interestList.vue"),
      meta: {
       name:"interest",
        breadcrumb: {
        label: "Interests",
        parent: "Interest",
        parentPath: "/interest",
        cildren: false,
        notAdd: false,
      },
      },
      },
      {
        path: "add-interest",
        name: "add-interest",
        component: () => import("../pages/addEditinterest.vue"),
        meta: {
        name: "add-interest",
        breadcrumb: {
        label: "Add interest",
        parent: "Interest",
        parentPath: "/intereset",
        cildren: true,
        notAdd: false,
        },
        },
      },
      {
        path: "edit-interest/:id/:name",
        name: "edit-interest",
        component: () => import("../pages/addEditinterest.vue"),
        meta: {
          name: "edit-interest",
          breadcrumb: {
            label: "Edit interest",
            parent: "Interest",
            parentPath: "/intereset",
            cildren: true,
            notAdd: true,
          },
        },
      },
    ],
  },
  ];
