<template>
    <AdminHeader />
    <div class="container-fliud">
        <div class="row g-0">
            <div class="col-lg-3 sideCard">
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
            <div class="col-lg-9">
                <div class="row g-0">
                    <ul class="tabs d-flex">
                        <li class="me-5 "><router-link to="usersStats" class="tab">افراد</router-link></li>
                        <li class="mx-5 "><router-link to="businessState" class="tab">اعمال</router-link></li>
                        <li><router-link to="officeStats" class="tab">مكاتب هندسية</router-link></li>
                    </ul>
                </div>
                <div class="row g-0 justify-content-center  text-center mt-5">
                    <div class="col-lg-3 col-md-5 col-5 d-flex flex-column justify-content-center box me-4 mt-5">
                        <div class="d-flex align-items-center justify-content-center">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3" d="M15 17H9V16H5V19H19V16H15V17ZM4 14H9V11H15V14H20V9H4V14Z"
                                    fill="white" />
                                <path
                                    d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM19 19H5V16H9V17H15V16H19V19ZM11 15V13H13V15H11ZM20 14H15V11H9V14H4V9H20V14Z"
                                    fill="white" />
                            </svg>
                            <p class="text mt-3">عدد المشاريع بالمنصة</p>
                        </div>
                        <p class="number">12000</p>
                    </div>
                    <div class="col-lg-3 col-md-5 col-5 d-flex flex-column justify-content-center box me-4 mt-5">
                        <div class="d-flex align-items-center justify-content-center">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3" d="M15 17H9V16H5V19H19V16H15V17ZM4 14H9V11H15V14H20V9H4V14Z"
                                    fill="white" />
                                <path
                                    d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM19 19H5V16H9V17H15V16H19V19ZM11 15V13H13V15H11ZM20 14H15V11H9V14H4V9H20V14Z"
                                    fill="white" />
                            </svg>
                            <p class="text me-2 mt-3">مشاريع يتم مراجعتها</p>
                        </div>
                        <p class="number">12000</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6 d-flex flex-column justify-content-center box me-4 mt-5">
                        <div class="d-flex align-items-center justify-content-center">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3" d="M15 17H9V16H5V19H19V16H15V17ZM4 14H9V11H15V14H20V9H4V14Z"
                                    fill="white" />
                                <path
                                    d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM19 19H5V16H9V17H15V16H19V19ZM11 15V13H13V15H11ZM20 14H15V11H9V14H4V9H20V14Z"
                                    fill="white" />
                            </svg>
                            <p class="text me-2 mt-3">مشاريع قيد التنفيذ</p>
                        </div>
                        <p class="number">12000</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-0 justify-content-center text-center my-5 ">
            <div class="col-lg-3 col-md-5 col-5 d-flex flex-column justify-content-center box me-3 mt-2">
                <div class="d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M22.83 12.99L11.83 2H2V11.83L12.99 22.82L22.83 12.99ZM5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7Z"
                            fill="white" />
                    </svg>
                    <p class="text me-2 mt-3">عروض اسعار المكاتب الهندسية</p>
                </div>
                <p class="number">12000</p>
            </div>
            <div class="col-lg-2 col-md-5 col-5 d-flex flex-column justify-content-center box me-3 mt-2">
                <div class="d-flex align-items-center justify-content-center">
                    <p class="text me-2 mt-3"> X </p>
                    <p class="text me-2 mt-3">مشاريع ملغية</p>
                </div>
                <p class="number">12000</p>
            </div>
            <div class="col-lg-2 col-md-5 col-5 d-flex flex-column justify-content-center box me-3 mt-2">
                <div class="d-flex align-items-center justify-content-center">
                    <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M15 17H9V16H5V19H19V16H15V17ZM4 14H9V11H15V14H20V9H4V14Z" fill="white" />
                        <path
                            d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM19 19H5V16H9V17H15V16H19V19ZM11 15V13H13V15H11ZM20 14H15V11H9V14H4V9H20V14Z"
                            fill="white" />
                    </svg>
                    <p class="text me-2 mt-3 ">مشاريع مسودة</p>
                </div>
                <p class="number">12000</p>
            </div>
            <div class="col-lg-2 col-md-5 col-5 d-flex flex-column justify-content-center box me-3 mt-2">
                <div class="d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9.00039 16.2001L4.80039 12.0001L3.40039 13.4001L9.00039 19.0001L21.0004 7.0001L19.6004 5.6001L9.00039 16.2001Z"
                            fill="white" />
                    </svg>
                    <p class="text me-2 mt-3">مشاريع منتهية</p>
                </div>
                <p class="number">12000</p>
            </div>
            <div class="col-lg-2 col-md-5 col-5 d-flex flex-column justify-content-center box me-3 mt-lg-2 mt-5">
                <div class="d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V8C2 6.89 2.89 6 4 6H8V4C8 2.89 8.89 2 10 2ZM14 6V4H10V6H14Z"
                            fill="white" />
                    </svg>
                    <p class="text me-2 mt-3">طلباتء بدء الأعمال</p>
                </div>
                <p class="number">12000</p>
            </div>
        </div>
    </div>
</template>

<script>
import { usebackgroundStore } from "../../../stores/background"
import AdminHeader from "../pages/AdminHeader.vue"
export default {
    components: {
        AdminHeader
    },
    data: () => ({
        backgroundStore: usebackgroundStore()
    }),
    mounted() {
        this.backgroundStore.setBgColor(1)
    },
    unmounted() {
        this.backgroundStore.setBgColor(0)
    }
}
</script>

<style scoped>
* {
    direction: rtl;
}

.container {
    margin-left: 0px;
    margin-right: 0px;
}

.sideCard {
    background-color: #59467C;
    color: #fff;
    width: 170px;
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
.tabs {
    list-style-type: none;
}

.tabs .tab {
    text-decoration: none;
    color: #FFFFFFB2;
    font-size: 25px;
    font-weight: 600;
    line-height: 46.85px;
}

.box {
    height: 188px;
    border-radius: 10px;
    background: #259F5A;
}

.text {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
}

.number {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
}
</style>
