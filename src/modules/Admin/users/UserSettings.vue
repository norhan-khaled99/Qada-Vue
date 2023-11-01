<template >
    <div class="nada">
        <AdminHeader/>
        <!-- <div class="sideCard">
            <p >مرحبا</p>
            <h4>عبدالعزيز</h4>
            <p >الرئيسية</p>
            <p >الاحصائيات</p>
            <p >الفريق</p>
            <p> المشاريع</p>
            <p >تسجيل خروج</p>
        </div> -->
        <div class="container">
            <div class="col-lg-5 me-5">
                <ul class="d-flex ">
                    <li class="mx-5 "><router-link to="useraccount">الملف الشخصي</router-link></li>
                    <li><router-link to="usersettings" class="secondLink">الاعدادات</router-link></li>
                </ul>
            </div>
            <form @submit.prevent="login"  class="p-5" >
                <div class="">
                    <div class="row formContainer col-lg-10 m-auto py-5">
                        <div class="col-lg-7 m-auto ">
                            <i class="fa-solid fa-user mx-2 text"></i>
                            <label class="text" for="email">اسم العميل</label>
                            <input class="form-control mt-2  " v-model.trim="name" />
                        </div>
                        <div class="col-lg-7 m-auto">
                            <i class="fa-solid fa-envelope mx-2 text"></i>
                            <label class="text" for="email">البريد الإلكتروني</label>
                            <input class="form-control mt-2 " v-model.trim="name" />
                        </div>
                        <div class="col-lg-7 m-auto">
                            <i class="fa-solid fa-phone mx-2 text"></i>
                            <label class="text" for="email">رقم الهاتف</label>
                            <input class="form-control mt-2 " v-model.trim="name" />
                        </div>
                        <div class="col-lg-7 m-auto ">
                            <i class="fa-solid fa-lock mx-2 text"></i>
                            <label class="text" for="email">كلمة المرور الجديدة</label>
                            <input class="form-control mt-2 " v-model.trim="name" />
                        </div>
                        <div class="col-lg-7 m-auto">
                            <i class="fa-solid fa-lock mx-2 text"></i>
                            <label class="text" for="email">تأكيد كلمة المرور</label>
                            <input class="form-control mt-2 " v-model.trim="name" />
                        </div>
                        <div class="text-center my-2">
                            <button type="submit" class="btnn">حفظ التغييرات</button>
                        </div>
                    </div>
                </div>
            </form>
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
        backgroundStore :usebackgroundStore()
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
/* .nada {
    background: #59467C;
} */
/* .sideCard {
    position: absolute;
    top: 45%;
    background: linear-gradient(301.09deg, #59467C 30.12%, #000000 173.77%);
    color: #fff;
    width: 150px;
    text-align: center;
    border-radius: 18px 0 0 18px;
} */
li{
    list-style-type: none;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
}
.secondLink{
    color: #fff;
    text-decoration-line: underline;
}
.formContainer {
    background-color: #fff;
    border-radius: 10px;
}
.text {
    color: #9E5488;
}
input {
    border: 0.1rem solid #9E5488;
    border-radius: 20px;
    margin-bottom: 3rem;
    height: 50px;
}
.btnn {
    color: #FFFFFF;
    background-color: #9E5488;
    width: 10rem;
    height: 3rem;
    margin-bottom: 3rem;
    border-radius: 0.6rem;
    border: none;
}
</style>