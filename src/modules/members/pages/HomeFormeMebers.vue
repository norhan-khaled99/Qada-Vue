<template>
  <div>
    <MainHeader />
    <div class="container w-100 mt-5">
      <div class="row">
        <div class="header mt-5">
          <div>جميع مشاريعك الهندسية تحت</div>
          <div class="mensa mt-3">منصة واحدة</div>
          <div class="col-lg-4 m-auto mt-5 text-center">
            <p>
              انشئ مشروعك. قارن عروض الاسعار. تعاقد اونلاين تابع واستلم مخططاتك
              وقيم الخدمة !
            </p>
          </div>
        </div>
      </div>

      <div class="row-col-6 my-5 add-project">
        <router-link class="linkk" to="/member/addproject">
          <button class="btn add-project-text">اطرح مشروعك الآن</button>
        </router-link>
      </div>
    </div>
    <div class="my-5 mosls">
      <TriangleDesign />
    </div>

    <div class="container">
      <div class="row my-5">
        <p class="seconed-subtitle">كيف تعمل منصتنا؟</p>
      </div>
      <div class="row align-items-baseline">
        <div class="col test">
          <img src="../../../assets/uploadproject.png" />
          <div class="first-step">
            <div>1 . اطرح مشروعك</div>
            <div>استقبل عروضك</div>
          </div>
        </div>
        <div class="col test">
          <img src="../../../assets/contract.png" />

          <div class="second-step">
            <div>2 . تعاقد وتابع</div>
            <div>مشروعك أونلاين</div>
          </div>
        </div>
        <div class="col test">
          <img src="../../../assets/Stars.png" />
          <div class="third-step">
            <div>3 . إستلم مشروعك وقيم</div>
            <div>مقدم الخدمة أونلاين</div>
          </div>
        </div>
      </div>
      <div class="row my-5"></div>
      <div class="row d-flex justify-content-between my-5">
        <div class="col-8 subtitle_text">
          <p class="text-end">اخر المشاريع المضافة</p>
        </div>
        <div class="col-4 add-new-project">
          <router-link to="/member/addproject">
            <button class="border-none">اضف مشروعك</button>
          </router-link>
        </div>
      </div>

      <!-- comment part search -->
      <!-- <div
        class="row m-auto justify-content-between p-3 w-50 filter-projects my-5"
      >
        <div class="col-md-3">
          <p>المنطقة</p>
          <select class="form-select my-3" aria-label="Default select example">
            <option selected>الكل</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-md-3">
          <p>المدينة</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>الكل</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-md-3">
          <p>التصنيف</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>سكني</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-md-1 my-auto mb-2 ms-3">
          <img src="../../../assets/magnifier.png" />
        </div>
      </div> -->

      <!-- startCard -->

      <div v-for="project in filteredProjects" :key="project.id">
        <router-link :to="{ name: 'maintabsForMember', params: { id: project.id } }" class="card-link">
          <div class="row justify-content-center my-3 text-decoration-none">
            <div class="col-lg-11 col-md-8 col-sm-12">
              <div class="card">
                <div class="row align-items-baseline justify-content-between">
                  <div class="col-8">
                    <div class="card-body">{{ project.project_title }}</div>
                  </div>
                  <div class="col-4 d-flex justify-content-end px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                      <path
                        d="M18.561 4.27922L16.8678 2.65092V5V10.1993C11.1713 10.3661 7.3313 11.9802 4.92479 14.8528C2.41212 17.852 1.64722 22.0129 1.64722 26.6471L3.61539 26.8974C4.35801 24.0248 5.76578 21.9134 7.64351 20.5141C9.52539 19.1117 11.9532 18.3697 14.8237 18.3697H16.8678V23.5546V26.0893L18.5984 24.2374L27.7308 14.4653L28.4039 13.7451L27.6933 13.0617L18.561 4.27922Z"
                        stroke="#9F9F9F" stroke-width="2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-4" width="32" height="28" viewBox="0 0 32 28"
                      fill="none">
                      <path
                        d="M3.29929 3.27199L3.29922 3.27192L3.28952 3.28159C1.89938 4.66765 1 6.56922 1 8.74487C1 10.8914 1.90259 12.787 3.27989 14.1984L3.27982 14.1985L3.28952 14.2081L14.8233 25.7081L15.5294 26.4121L16.2355 25.7081L27.7693 14.2081C29.1594 12.8221 30.0588 10.9205 30.0588 8.74487C30.0588 6.59835 29.1562 4.70273 27.7789 3.29133L27.779 3.29126L27.7693 3.28159C26.3792 1.89554 24.4734 1 22.2941 1C20.1441 1 18.2442 1.89874 16.8287 3.27199L16.8286 3.27192L16.8189 3.28159C16.3163 3.78278 15.8778 4.35136 15.5228 4.97594C15.1717 4.35985 14.7408 3.79478 14.2495 3.29133L14.2496 3.29126L14.2399 3.28159C12.8498 1.89554 10.9439 1 8.76471 1C6.61468 1 4.71483 1.89874 3.29929 3.27199Z"
                        fill="white" stroke="#9F9F9F" stroke-width="2" />
                    </svg>
                  </div>
                </div>
                <div class="row my-3">
                  <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path
                          d="M13 23.9375C6.96875 23.9375 2.0625 19.0312 2.0625 13C2.0625 6.96875 6.96875 2.0625 13 2.0625C19.0312 2.0625 23.9375 6.96875 23.9375 13C23.9375 19.0312 19.0312 23.9375 13 23.9375ZM13 3.625C7.82812 3.625 3.625 7.82812 3.625 13C3.625 18.1719 7.82812 22.375 13 22.375C18.1719 22.375 22.375 18.1719 22.375 13C22.375 7.82812 18.1719 3.625 13 3.625Z"
                          fill="#48847B" />
                        <path
                          d="M16.125 16.9062C15.9844 16.9062 15.8437 16.875 15.7187 16.7969L11.8125 14.4531C11.6968 14.3836 11.6013 14.285 11.5355 14.1671C11.4697 14.0493 11.4359 13.9162 11.4375 13.7812V7.53125C11.4375 7.09375 11.7812 6.75 12.2187 6.75C12.6562 6.75 13 7.09375 13 7.53125V13.3438L16.5312 15.4531C16.6767 15.5423 16.7891 15.6764 16.8515 15.8352C16.9138 15.994 16.9227 16.1688 16.8768 16.3331C16.8308 16.4974 16.7326 16.6422 16.5969 16.7456C16.4613 16.8491 16.2956 16.9055 16.125 16.9062Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text">تاريخ الطرح</span>
                    </div>
                    <div>
                      <span>{{ project.offer_choosing_date }}</span>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M18.157 5.80402C15.033 2.73102 9.968 2.73102 6.844 5.80402C6.10229 6.52865 5.51291 7.39425 5.11052 8.34993C4.70813 9.3056 4.50084 10.3321 4.50084 11.369C4.50084 12.406 4.70813 13.4324 5.11052 14.3881C5.51291 15.3438 6.10229 16.2094 6.844 16.934L12.5 22.499L18.157 16.934C18.8987 16.2094 19.4881 15.3438 19.8905 14.3881C20.2929 13.4324 20.5002 12.406 20.5002 11.369C20.5002 10.3321 20.2929 9.3056 19.8905 8.34993C19.4881 7.39425 18.8987 6.52865 18.157 5.80402ZM12.5 13.999C11.832 13.999 11.205 13.739 10.732 13.267C10.2638 12.7978 10.0008 12.1619 10.0008 11.499C10.0008 10.8361 10.2638 10.2003 10.732 9.73102C11.204 9.25902 11.832 8.99902 12.5 8.99902C13.168 8.99902 13.796 9.25902 14.268 9.73102C14.7363 10.2003 14.9992 10.8361 14.9992 11.499C14.9992 12.1619 14.7363 12.7978 14.268 13.267C13.796 13.739 13.168 13.999 12.5 13.999Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text">الموقع</span>
                    </div>
                    <div>
                      <span>{{ project.city }} - {{ project.area }}</span>
                    </div>
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M5.5 4.5V10.525V10.5V20.5V4.5ZM7.5 14.5H11C11.15 14.1167 11.3333 13.7583 11.55 13.425C11.7667 13.0917 12.0167 12.7833 12.3 12.5H7.5V14.5ZM7.5 18.5H10.675C10.5917 18.1667 10.5373 17.8333 10.512 17.5C10.4867 17.1667 10.491 16.8333 10.525 16.5H7.5V18.5ZM3.5 22.5V2.5H13.5L19.5 8.5V11C19.1833 10.8667 18.8583 10.7623 18.525 10.687C18.1917 10.6117 17.85 10.5577 17.5 10.525V9.5H12.5V4.5H5.5V20.5H11.525C11.7917 20.9 12.0917 21.271 12.425 21.613C12.7583 21.955 13.125 22.2507 13.525 22.5H3.5ZM17 19.5C17.7 19.5 18.2917 19.2583 18.775 18.775C19.2583 18.2917 19.5 17.7 19.5 17C19.5 16.3 19.2583 15.7083 18.775 15.225C18.2917 14.7417 17.7 14.5 17 14.5C16.3 14.5 15.7083 14.7417 15.225 15.225C14.7417 15.7083 14.5 16.3 14.5 17C14.5 17.7 14.7417 18.2917 15.225 18.775C15.7083 19.2583 16.3 19.5 17 19.5ZM22.1 23.5L19.4 20.8C19.05 21.0333 18.671 21.2083 18.263 21.325C17.855 21.4417 17.434 21.5 17 21.5C15.75 21.5 14.6877 21.0623 13.813 20.187C12.9383 19.3117 12.5007 18.2493 12.5 17C12.5 15.75 12.9377 14.6873 13.813 13.812C14.6883 12.9367 15.7507 12.4993 17 12.5C18.25 12.5 19.3127 12.9377 20.188 13.813C21.0633 14.6883 21.5007 15.7507 21.5 17C21.5 17.4333 21.4417 17.8543 21.325 18.263C21.2083 18.6717 21.0333 19.0507 20.8 19.4L23.5 22.1L22.1 23.5Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text">الرقم المرجعي</span>
                    </div>
                    <div>
                      <span>{{ project.id }}</span>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M18.157 5.80402C15.033 2.73102 9.968 2.73102 6.844 5.80402C6.10229 6.52865 5.51291 7.39425 5.11052 8.34993C4.70813 9.3056 4.50084 10.3321 4.50084 11.369C4.50084 12.406 4.70813 13.4324 5.11052 14.3881C5.51291 15.3438 6.10229 16.2094 6.844 16.934L12.5 22.499L18.157 16.934C18.8987 16.2094 19.4881 15.3438 19.8905 14.3881C20.2929 13.4324 20.5002 12.406 20.5002 11.369C20.5002 10.3321 20.2929 9.3056 19.8905 8.34993C19.4881 7.39425 18.8987 6.52865 18.157 5.80402ZM12.5 13.999C11.832 13.999 11.205 13.739 10.732 13.267C10.2638 12.7978 10.0008 12.1619 10.0008 11.499C10.0008 10.8361 10.2638 10.2003 10.732 9.73102C11.204 9.25902 11.832 8.99902 12.5 8.99902C13.168 8.99902 13.796 9.25902 14.268 9.73102C14.7363 10.2003 14.9992 10.8361 14.9992 11.499C14.9992 12.1619 14.7363 12.7978 14.268 13.267C13.796 13.739 13.168 13.999 12.5 13.999Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text">المدة المقترحة لنهاية المشروع</span>
                    </div>
                    <div>
                      <span>{{ project.project_days_limit }}</span>
                    </div>
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5.5 7C5.10218 7 4.72064 6.84196 4.43934 6.56066C4.15804 6.27936 4 5.89782 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.89 2 2 2.89 2 4V11C2 11.55 2.22 12.05 2.59 12.41L11.58 21.41C11.95 21.77 12.45 22 13 22C13.55 22 14.05 21.77 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.44 21.77 11.94 21.41 11.58Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text">العروض المستلمة</span>
                    </div>
                    <div>
                      <span v-if="project.offers.length === 0">ليس هناك عروض</span>
                      <span v-else>{{ project.offers }}</span>

                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M4.29399 12.53C4.83099 9.842 5.09999 8.5 5.98699 7.634C6.15092 7.47444 6.32824 7.32924 6.51699 7.2C7.53999 6.5 8.90999 6.5 11.65 6.5H13.353C16.092 6.5 17.461 6.5 18.483 7.2C18.673 7.33 18.85 7.476 19.013 7.635C19.901 8.5 20.17 9.843 20.707 12.529C21.478 16.385 21.864 18.313 20.976 19.679C20.816 19.927 20.628 20.156 20.416 20.362C19.25 21.5 17.285 21.5 13.353 21.5H11.65C7.71699 21.5 5.75099 21.5 4.58499 20.362C4.37402 20.1557 4.18655 19.9266 4.02599 19.679C3.13799 18.313 3.52399 16.385 4.29599 12.529L4.29399 12.53Z"
                          stroke="#48847B" stroke-width="1.5" />
                        <path
                          d="M15.5 10.5C16.0523 10.5 16.5 10.0523 16.5 9.5C16.5 8.94772 16.0523 8.5 15.5 8.5C14.9477 8.5 14.5 8.94772 14.5 9.5C14.5 10.0523 14.9477 10.5 15.5 10.5Z"
                          fill="#48847B" />
                        <path
                          d="M9.5 10.5C10.0523 10.5 10.5 10.0523 10.5 9.5C10.5 8.94772 10.0523 8.5 9.5 8.5C8.94772 8.5 8.5 8.94772 8.5 9.5C8.5 10.0523 8.94772 10.5 9.5 10.5Z"
                          fill="#48847B" />
                        <path
                          d="M9.5 6.5V5.5C9.5 4.70435 9.81607 3.94129 10.3787 3.37868C10.9413 2.81607 11.7044 2.5 12.5 2.5C13.2956 2.5 14.0587 2.81607 14.6213 3.37868C15.1839 3.94129 15.5 4.70435 15.5 5.5V6.5"
                          stroke="#48847B" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                      <span class="card-content-text">الخدمة المطلوبة</span>
                    </div>
                    <div>
                      <span>
                        {{ Object.values(JSON.parse(project.Electronic_service))[0] }}
                      </span>

                    </div>
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                        <path
                          d="M13 23.4375C6.96875 23.4375 2.0625 18.5312 2.0625 12.5C2.0625 6.46875 6.96875 1.5625 13 1.5625C19.0312 1.5625 23.9375 6.46875 23.9375 12.5C23.9375 18.5312 19.0312 23.4375 13 23.4375ZM13 3.125C7.82812 3.125 3.625 7.32812 3.625 12.5C3.625 17.6719 7.82812 21.875 13 21.875C18.1719 21.875 22.375 17.6719 22.375 12.5C22.375 7.32812 18.1719 3.125 13 3.125Z"
                          fill="#48847B" />
                        <path
                          d="M16.125 16.4062C15.9844 16.4062 15.8437 16.375 15.7187 16.2969L11.8125 13.9531C11.6968 13.8836 11.6013 13.785 11.5355 13.6671C11.4697 13.5493 11.4359 13.4162 11.4375 13.2812V7.03125C11.4375 6.59375 11.7812 6.25 12.2187 6.25C12.6562 6.25 13 6.59375 13 7.03125V12.8438L16.5312 14.9531C16.6767 15.0423 16.7891 15.1764 16.8515 15.3352C16.9138 15.494 16.9227 15.6688 16.8768 15.8331C16.8308 15.9974 16.7326 16.1422 16.5969 16.2456C16.4613 16.3491 16.2956 16.4055 16.125 16.4062Z"
                          fill="#48847B" />
                      </svg>

                      <span class="card-content-text">آخر موعد لأستلام عروض الاسعار</span>
                    </div>
                    <div>
                      <span>2024-5-25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>




    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import TriangleDesign from "./Tabs/TriangleDesign.vue";
import MainHeader from "../../../components/Main_Header.vue";
import globalService from '../../../services/globalservice';

export default {
  components: {
    TriangleDesign,
    MainHeader,
  },
  setup() {
    const allProjects = ref([]);

    const getAllProjects = () => {
      globalService.getAllProjectForlandingpage()
        .then((res) => {
          allProjects.value = res.data.data;
          console.log((allProjects.value));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    onMounted(() => {
      getAllProjects();
    });
    const filteredProjects = computed(() => {
      return allProjects.value.filter(project => project.state === 1);
    });
    return {
      allProjects,
      getAllProjects,
      filteredProjects
    };
  },
};
</script>



<style scoped>
* {
  direction: rtl;
}

.header {
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600px;
}

.header .mensa {
  color: #48847b;
  margin: 0;
  padding: 0;
}

.test {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.test img {
  margin-bottom: 20px;
}

.add-project button {
  display: flex;
  margin: auto;
  justify-content: center;
  border-radius: 20px;
  border: 3px solid #48847b;
  padding: 10px 50px;
  color: #48847b;
  font-weight: 600;
}

.linkk {
  text-decoration: none;
}

.add-project button :hover {
  transition: all 300ms ease-out;
  border-radius: 20px;
  border: 3px solid #272627;
  padding: 10px 50px;
  background-color: white;
}

.add-project-text {
  color: #272627;
  font-size: 20px;
  text-align: center;
}

.header p {
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: center;
}

.mosls {
  height: 370px;
}

.subtitle_text {
  color: #000;
  font-size: 35px;
  font-weight: 600;
}

.steps col {
  background-color: #7159a5;
}

.seconed-subtitle {
  color: #259f5a;
  font-size: 2.2rem;
  font-weight: 900;
  text-decoration: underline;
  text-decoration-color: #ffb800;
}

.first-step {
  padding: 10px;
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #0c483f;
  background: #fff;
  box-shadow: 6px 8px #0c483f;
  text-align: center;
}

.second-step {
  padding: 10px;
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #ffb800;
  background: #fff;
  box-shadow: 6px 8px #ffb800;
  text-align: center;
}

.third-step {
  padding: 10px;
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #7159a5;
  background: #fff;
  box-shadow: 6px 8px #7159a5;
  text-align: center;
}

.add-new-project button {
  border-radius: 20px;
  background: #48847b;
  flex-shrink: 0;
  padding: 10px 20px;
  color: #fff;
  font-size: 1.25rem;
  border: none;
}

.filter-projects {
  border-radius: 10px;
  background: #eefffb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.card-body {
  color: #48847b;
  text-align: right;
  font-size: 24px;
  font-weight: 600;
}

.card-content {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.card-content-text {
  color: rgba(0, 0, 0, 0.5);
}

.card:hover {
  border: 5px solid #48847b;
}

.card-link {
  text-decoration: none;
  /* Removes underline */
  color: inherit;
}

@media (max-width: 576px) {
  .subtitle_text {
    color: #000;
    font-size: 20px;
    font-weight: 400;
    margin-top: 0.75rem;
  }

  .add-new-project button {
    border-radius: 20px;
    background: #48847b;
    padding: 10px 20px;
    color: #fff;
    font-size: 1.25rem;
    border: none;
    margin-bottom: 0.5rem;
  }

  .card-body {
    color: #48847b;
    text-align: right;
    font-size: 18px;
    font-weight: 400;
    white-space: nowrap;
  }
}
</style>
