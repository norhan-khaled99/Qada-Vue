<template>
    <div class="">
        <AdminHeader />
        <div class="row g-0 ">
            <div class="col-lg-2 sideCard">
                <p>مرحبا</p>
                <h4>عبدالعزيز</h4>
                <p>الرئيسية</p>
                <p>الاحصائيات</p>
                <p>الفريق</p>
                <p> المشاريع</p>
                <p>تسجيل خروج</p>
            </div>
            <div class="col-lg-9 ">
                <div class="row align-items-center">
                    <ul class="d-flex me-5">
                        <li class=""><router-link class="text-decoration-none text-light" to="useraccount">الملف
                                الشخصي</router-link></li>
                        <li><router-link to="usersettings" class="secondLink  me-3">الاعدادات</router-link></li>
                    </ul>
                    <div class="header me-5">
                        <div class="">
                            <p class="inf">معلومات العميل </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 m-auto card1 ">
                <div class="col-lg-3 m-auto mt-5">
                    <i class="fa-solid fa-user  textcolor fs-5"></i>
                    <label class="text textsize me-2" for="email">اسم العميل</label>
                    <p class="textcolor mt-3 me-4">احمد</p>
                </div>
                <div class="col-lg-3 m-auto mt-5">
                    <i class="fa-solid fa-envelope textcolor fs-5"></i>
                    <label class="text textsize me-2" for="email">البريد الإلكتروني</label>
                    <p class="textcolor mt-3 me-4">example@gmail.com</p>
                </div>
                <div class="col-lg-3 m-auto mt-5">
                    <i class="fa-solid fa-phone textcolor fs-5"></i>
                    <label class="text textsize me-2" for="email">رقم هاتف</label>
                    <p class="textcolor mt-3 me-4">+20 102 375 3410</p>
                </div>
            </div>
            <div class="col-lg-10 m-auto header mt-5">
                <div class="inf me-3" >اخر المشاريع لهذا العميل</div>
            </div>
        </div>
    </div>
</template>

<script>
import { usebackgroundStore } from "../../../stores/background"
import AdminHeader from "../AdminHeader.vue"
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
    /* position: absolute;
    top: 45%; */
    background: #59467C;
    color: #fff;
    width: 150px;
    text-align: center;
    border-radius: 18px 0 0 18px;
}

li {
    list-style-type: none;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
}

.card1 {
    border: 1px solid #FFFFFF;
    border-radius: 0.5rem;
    background: #FFFFFF;
}

.secondLink {
    color: #fff;
    text-decoration-line: underline;
}

.inf {
    color: #FFFFFF;
    font-size: 3rem;
    font-weight: 600;
}

.textcolor {
    color: #48847B;
    font-weight: 700;
}

.textsize {
    font-size: 1rem;
    font-weight: 600;
}
</style>