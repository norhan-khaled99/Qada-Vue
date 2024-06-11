<template>
  <MemberHeader />
  <div class="mt-5">
    <ul class="nav" id="myTab" role="tablist">
      <li class="nav-item" role="presentation" @click="changeTab('1', $event)">
        <a class="nav-link" :class="{ active: activeTab === '1' }"  role="tab" aria-controls="header-i"
          aria-selected="true">
          تفاصيل المشروع
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="changeTab('2', $event)">
        <a class="nav-link" :class="{ active: activeTab === '2' }"  role="tab" aria-controls="header-ii"
          aria-selected="false">
          الإستفسارات
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="changeTab('3', $event)">
        <a class="nav-link" :class="{ active: activeTab === '3' }"  role="tab"
          aria-controls="header-iii" aria-selected="false">
          ملفات المشروع
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="changeTab('4', $event)">
        <a class="nav-link" :class="{ active: activeTab === '4' }"  role="tab" aria-controls="header-iv"
          aria-selected="false">
          عروض الاسعار
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="changeTab('5', $event)">
        <a class="nav-link" :class="{ active: activeTab === '5' }"  role="tab" aria-controls="header-v"
          aria-selected="false">
          تعاقد إلكتروني
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="changeTab('6', $event)">
        <a class="nav-link" :class="{ active: activeTab === '6' }"  role="tab" aria-controls="header-vi"
          aria-selected="false">
          مراحل المشروع
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="changeTab('7', $event)">
        <a class="nav-link" :class="{ active: activeTab === '7' }"  role="tab"
          aria-controls="header-vii" aria-selected="false">
          سجل حركات المشروع
        </a>
      </li>
    </ul>

    <!-- Content panes for each tab -->
    <div class="tab-content mt-2" id="myTabContent">
      <!-- Content for tab 1 goes here -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === '1' }" id="header-i" role="tabpanel"
        aria-labelledby="header-i-tab">
        <ProjectDetails></ProjectDetails>
      </div>
      <!-- Content for tab 2 goes here -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === '2' }" id="header-ii" role="tabpanel"
        aria-labelledby="header-ii-tab">
        <ProjectQuereries></ProjectQuereries>
      </div>
      <!-- Content for tab 3 goes here -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === '3' }" id="header-iii" role="tabpanel"
        aria-labelledby="header-iii-tab">
        <projectsFile></projectsFile>
      </div>
      <!-- Content for tab 4 goes here -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === '4' }" id="header-iv" role="tabpanel"
        aria-labelledby="header-iv-tab">
        <Prices_offers></Prices_offers>
      </div>
      <!-- Content for tab 5 goes here -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === '5' }" id="header-v" role="tabpanel"
        aria-labelledby="header-v-tab">
        <ElectronicContract></ElectronicContract>
      </div>
      <!-- Content for tab 6 goes here -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === '6' }" id="header-vi" role="tabpanel"
        aria-labelledby="header-vi-tab">
        <ProjectPhases></ProjectPhases>
      </div>
      <!-- Content for tab 7 goes here -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === '7' }" id="header-vii" role="tabpanel"
        aria-labelledby="header-vii-tab">
        <project-transactions></project-transactions>
      </div>
    </div>
  </div>
</template>



<script>
import ProjectDetails from "./projectDetails";
import ProjectPhases from "./projectPhases";
import ElectronicContract from "./ElectronicContract.vue";
import ProjectQuereries from "./projectQuereries.vue";
import projectTransactions from "./projectTransactions.vue";
import projectsFile from "./projectsFile.vue";
import Prices_offers from "./Prices_offers.vue";
import MemberHeader from "../../components/MemberHeader.vue";
import { ref } from "vue";

export default {
  components: {
    ProjectDetails,
    Prices_offers,
    ProjectPhases,
    ElectronicContract,
    projectsFile,
    projectTransactions,
    ProjectQuereries,
    MemberHeader,
  },
  setup() {
    const activeTab = ref("1");

    const changeTab = (tabNumber, event) => {
  activeTab.value = tabNumber;
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  event.preventDefault(); // Prevent default scrolling behavior
};

    return {
      activeTab,
      changeTab,
    };
  },
};
</script>

<style scoped>
* {
  direction: rtl;
}

.nav-link {
  color: rgba(85, 85, 85, 0.9);
  font-family: Cairo;
  font-size: 25px;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
}

.nav-link:hover {
  color: rgba(85, 85, 85, 0.9);
  cursor:pointer;
}

.nav-link.active {
  color: #0f9678;

  /*  
  border-bottom:2px solid #0F9678  ;
  */
}
</style>
