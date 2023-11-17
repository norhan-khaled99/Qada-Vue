<template>
    <div>
        <AdminHeader />
        <div class="row">
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
            <div class="col-lg-9 ">
                <div class="row g-0 ">
                    <ul class="col-lg- 4 tabs d-flex">
                        <li class="me-5 "><router-link to="usersStats" class="tab">افراد</router-link></li>
                        <li class="mx-5 "><router-link to="businessState" class="tab">اعمال</router-link></li>
                        <li><router-link to="officeStats" class="tab">مكاتب هندسية</router-link></li>
                    </ul>
                    <div class="col-lg-12">
                        <div class="row justify-content-between w-75 p-3 m-auto my-3 cardd">
                            <div class="col-lg-3 col-sm-12 text-center">
                                <p>المكتب الهندسي</p>
                                <h5>شركة المهندسين</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>المدينة</p>
                                <h5>الطائف</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>التصنيف</p>
                                <h5 class="number">1</h5>
                            </div>
                        </div>
                        <div class="row justify-content-between w-75 p-3 m-auto my-3 cardd">
                            <div class="col-lg-3 text-center">
                                <p>المكتب الهندسي</p>
                                <h5>شركة المهندسين</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>المدينة</p>
                                <h5>الطائف</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>التصنيف</p>
                                <h5 class="number">1</h5>
                            </div>
                        </div>
                        <div class="row justify-content-between w-75 p-3 m-auto my-3 cardd">
                            <div class="col-lg-3 text-center">
                                <p>المكتب الهندسي</p>
                                <h5>شركة المهندسين</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>المدينة</p>
                                <h5>الطائف</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>التصنيف</p>
                                <h5 class="number">1</h5>
                            </div>
                        </div>
                        <div class="row justify-content-between w-75 p-3 m-auto my-3 cardd">
                            <div class="col-lg-3 text-center">
                                <p>المكتب الهندسي</p>
                                <h5>شركة المهندسين</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>المدينة</p>
                                <h5>الطائف</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>التصنيف</p>
                                <h5 class="number">1</h5>
                            </div>
                        </div>
                        <div class="row justify-content-between w-75 p-3 m-auto my-3 cardd">
                            <div class="col-lg-3 text-center">
                                <p>المكتب الهندسي</p>
                                <h5>شركة المهندسين</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>المدينة</p>
                                <h5>الطائف</h5>
                            </div>
                            <div class="col-lg-3 text-center">
                                <p>التصنيف</p>
                                <h5 class="number">1</h5>
                            </div>
                        </div>
                    </div>
                </div>
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

.filter-projects {
    border-radius: 10px;
    background: #eefffb;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.cardd {
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid#48847B;
    box-shadow: 0px 4px 4px 0px rgba(0.25, 0.25, 0.25, 0.25);
}

.cardd p {
    color: #575757;
}

.cardd h5 {
    font-weight: 700;
}

.number {
    color: #B18718;
}
</style>