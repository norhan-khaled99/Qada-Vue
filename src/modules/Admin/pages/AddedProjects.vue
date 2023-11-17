<template>
    <div>
        <AdminHeader />
        <div class="container ">
            <div class="row">
                <div class="col-lg-2 sideCard">
                    <ul>
                        <li class="text-light">مرحبا</li>
                        <li class="authName">عبدالعزيز</li>
                        <li class="mt-4"><router-link class="sidbarLink" to="homepage">الرئيسية</router-link></li>
                        <li class="mt-4"><router-link class="sidbarLink" to="usersStats">الاحصائيات</router-link></li>
                        <li class="mt-4"><router-link class="sidbarLink" to="useraccount">الفريق</router-link></li>
                        <li class="mt-4"><router-link class="sidbarLink" to="addedProjects">المشاريع</router-link></li>
                        <li class="mt-4"><router-link class="sidbarLink" to="">تسجيل خروج</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-10  ">
                    <div class=" mb-3">
                        <ul class="d-flex ">
                            <li><router-link to="/admin/addedProjects" class="tab ">اخر المشاريع المضافة علي
                                    المنصة</router-link></li>
                            <li class=""><router-link to="/admin/pendingProjects" class="tab mx-5">طلبات
                                    المشاريع</router-link></li>
                        </ul>
                    </div>
                    <div v-for="project in addedprojects" :key="project.id">
                        <div class="row justify-content-center my-5">
                            <div class="col-lg-12 col-md-8  col-sm-12">
                                <div class="card">
                                    <div class="row align-items-baseline justify-content-between">
                                        <div class="col-md-6">
                                            <div class="card-body">{{ project.project_title }}</div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                                            <div class="card-content">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                    viewBox="0 0 26 26" fill="none">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                    viewBox="0 0 25 25" fill="none">
                                                    <path
                                                        d="M18.157 5.80402C15.033 2.73102 9.968 2.73102 6.844 5.80402C6.10229 6.52865 5.51291 7.39425 5.11052 8.34993C4.70813 9.3056 4.50084 10.3321 4.50084 11.369C4.50084 12.406 4.70813 13.4324 5.11052 14.3881C5.51291 15.3438 6.10229 16.2094 6.844 16.934L12.5 22.499L18.157 16.934C18.8987 16.2094 19.4881 15.3438 19.8905 14.3881C20.2929 13.4324 20.5002 12.406 20.5002 11.369C20.5002 10.3321 20.2929 9.3056 19.8905 8.34993C19.4881 7.39425 18.8987 6.52865 18.157 5.80402ZM12.5 13.999C11.832 13.999 11.205 13.739 10.732 13.267C10.2638 12.7978 10.0008 12.1619 10.0008 11.499C10.0008 10.8361 10.2638 10.2003 10.732 9.73102C11.204 9.25902 11.832 8.99902 12.5 8.99902C13.168 8.99902 13.796 9.25902 14.268 9.73102C14.7363 10.2003 14.9992 10.8361 14.9992 11.499C14.9992 12.1619 14.7363 12.7978 14.268 13.267C13.796 13.739 13.168 13.999 12.5 13.999Z"
                                                        fill="#48847B" />
                                                </svg>
                                                <span class="card-content-text">الموقع</span>
                                            </div>
                                            <div>
                                                <span>{{ project.city }} - {{ project.area }}</span>
                                            </div>
                                            <div class="card-content mt-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                    viewBox="0 0 25 25" fill="none">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                    viewBox="0 0 25 25" fill="none">
                                                    <path
                                                        d="M18.157 5.80402C15.033 2.73102 9.968 2.73102 6.844 5.80402C6.10229 6.52865 5.51291 7.39425 5.11052 8.34993C4.70813 9.3056 4.50084 10.3321 4.50084 11.369C4.50084 12.406 4.70813 13.4324 5.11052 14.3881C5.51291 15.3438 6.10229 16.2094 6.844 16.934L12.5 22.499L18.157 16.934C18.8987 16.2094 19.4881 15.3438 19.8905 14.3881C20.2929 13.4324 20.5002 12.406 20.5002 11.369C20.5002 10.3321 20.2929 9.3056 19.8905 8.34993C19.4881 7.39425 18.8987 6.52865 18.157 5.80402ZM12.5 13.999C11.832 13.999 11.205 13.739 10.732 13.267C10.2638 12.7978 10.0008 12.1619 10.0008 11.499C10.0008 10.8361 10.2638 10.2003 10.732 9.73102C11.204 9.25902 11.832 8.99902 12.5 8.99902C13.168 8.99902 13.796 9.25902 14.268 9.73102C14.7363 10.2003 14.9992 10.8361 14.9992 11.499C14.9992 12.1619 14.7363 12.7978 14.268 13.267C13.796 13.739 13.168 13.999 12.5 13.999Z"
                                                        fill="#48847B" />
                                                </svg>
                                                <span class="card-content-text">المدة المقترحة لنهاية المشروع</span>
                                            </div>
                                            <div>
                                                <span>{{ project.project_days_limit }} يوم عمل</span>
                                            </div>
                                            <div class="card-content">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M5.5 7C5.10218 7 4.72064 6.84196 4.43934 6.56066C4.15804 6.27936 4 5.89782 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.89 2 2 2.89 2 4V11C2 11.55 2.22 12.05 2.59 12.41L11.58 21.41C11.95 21.77 12.45 22 13 22C13.55 22 14.05 21.77 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.44 21.77 11.94 21.41 11.58Z"
                                                        fill="#48847B" />
                                                </svg>
                                                <span class="card-content-text mt-4">العروض المستلمة</span>
                                            </div>
                                            <div>
                                                <span v-if="project.offers.length === 0">ليس هناك عروض</span>
                                                <span v-else>{{ project.offers }}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                                            <div class="card-content">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                    viewBox="0 0 25 25" fill="none">
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
                                                <span>{{ Object.values(JSON.parse(project.Electronic_service))[0] }}</span>
                                            </div>
                                            <div class="card-content">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25"
                                                    viewBox="0 0 26 25" fill="none">
                                                    <path
                                                        d="M13 23.4375C6.96875 23.4375 2.0625 18.5312 2.0625 12.5C2.0625 6.46875 6.96875 1.5625 13 1.5625C19.0312 1.5625 23.9375 6.46875 23.9375 12.5C23.9375 18.5312 19.0312 23.4375 13 23.4375ZM13 3.125C7.82812 3.125 3.625 7.32812 3.625 12.5C3.625 17.6719 7.82812 21.875 13 21.875C18.1719 21.875 22.375 17.6719 22.375 12.5C22.375 7.32812 18.1719 3.125 13 3.125Z"
                                                        fill="#48847B" />
                                                    <path
                                                        d="M16.125 16.4062C15.9844 16.4062 15.8437 16.375 15.7187 16.2969L11.8125 13.9531C11.6968 13.8836 11.6013 13.785 11.5355 13.6671C11.4697 13.5493 11.4359 13.4162 11.4375 13.2812V7.03125C11.4375 6.59375 11.7812 6.25 12.2187 6.25C12.6562 6.25 13 6.59375 13 7.03125V12.8438L16.5312 14.9531C16.6767 15.0423 16.7891 15.1764 16.8515 15.3352C16.9138 15.494 16.9227 15.6688 16.8768 15.8331C16.8308 15.9974 16.7326 16.1422 16.5969 16.2456C16.4613 16.3491 16.2956 16.4055 16.125 16.4062Z"
                                                        fill="#48847B" />
                                                </svg>
                                                <span class="card-content-text mt-4">آخر موعد لأستلام عروض الاسعار</span>
                                            </div>
                                            <div>
                                                <span>2024-5-25</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center my-3">
                                            <button class="edit-button">تعديل</button>
                                            <button class="delete-button">حذف</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { usebackgroundStore } from "../../../stores/background"
import AdminHeader from "./AdminHeader.vue"
import globalService from '../../../services/globalservice';
export default {
    components: {
        AdminHeader
    },
    setup() {
        const backgroundStore = usebackgroundStore()
        const allProjects = ref([]);
        let addedprojects = ref([])
        const getAllProjects = () => {
            globalService.getAllProjectForlandingpage()
                .then((res) => {
                    allProjects.value = res.data.data;
                    // console.log((allProjects.value[1]));
                })
                .catch((error) => {
                    console.error(error);
                });
            allProjects.value.forEach((element) => {
                if (element.state == 1) {
                    addedprojects.value.push(element)
                }
            });
            // console.log(addedprojects)
        };
        onMounted(() => {
            getAllProjects();
        });
        const filteredProjects = computed(() => {
            return allProjects.value.filter(project => project.state === 1);
        });
        onMounted(() => {
            backgroundStore.setBgColor(1)
        })
        onUnmounted(() => {
            backgroundStore.setBgColor(0)
        })
        return {
            backgroundStore,
            allProjects,
            addedprojects,
            getAllProjects,
            filteredProjects
        };
    }
}
</script>

<style scoped>
* {
    direction: rtl;
}

.container {
    margin: 0;
}

.sideCard {
    background-color: #59467C;
    color: #fff;
    width: 170px;
    height: 461px;
    text-align: center;
    border-radius: 18px 0 0 18px;
}

.sideCard li {
    list-style-type: none;
}

.sidbarLink {
    text-decoration: none;
    color: #FFFFFFB2;
    font-size: 18px;
    line-height: 33.73px;
}

.sideCard .authName {
    color: #ffffff;
    font-weight: 700;
    font-size: 25px;
    line-height: 46.85px;
}

.tab {
    text-decoration: none;
    color: #ffffff;
    font-size: 2rem;
    font-weight: 600;
}

.header {
    color: #fff;
    text-align: right;
    font-family: Cairo;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.first-card {
    border-radius: 10px;
    background: #fff;
}

.card-title {
    color: #000;
    text-align: center;
    font-family: Cairo;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.card-body {
    color: #9E5488;
    ;
    text-align: right;
    font-size: 24px;
    font-weight: 600;
}

/* .card:hover {
    border: 5px solid #48847b;
} */
.card-subtitle {
    color: #48847b;
    text-align: center;
    font-family: Cairo;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.card-content {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.card-content-text {
    color: rgba(0, 0, 0, 0.5);
}

.edit-button {
    border-radius: 20px;
    background: #6ab38a;
    border: none;
    padding: 10px 20px;
    margin: 0rem 0.25rem;
}

.delete-button {
    border-radius: 20px;
    background: #d02525;
    border: none;
    padding: 10px 20px;
}
</style>
