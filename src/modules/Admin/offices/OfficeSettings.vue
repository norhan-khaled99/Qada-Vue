<template>
    <AdminHeader/>
    <form @submit.prevent="login" class="w-75 mx-auto ">
        <div class="container justify-content-center ">
            <div class="row justify-content-center">
                <div class="col-9">
                    <i class="fa-solid fa-user-gear mx-2 text"></i>
                    <label class="text" for="email">اسم المكتب الهندسي</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
                <div class="col-9">
                    <i class="fa-solid fa-envelope mx-2 text"></i>
                    <label class="text" for="email">البريد الإلكتروني</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
                <div class="col-9">
                    <i class="fa-solid fa-phone mx-2 text"></i>
                    <label class="text" for="email">رقم هاتف</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
                <div class="col-9">
                    <i class="fa-solid fa-plane mx-2 text"></i>
                    <label class="text" for="email">رقم السجل التجاري</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
                <div class="col-9 ">
                    <i class="fa-solid fa-lock mx-2 text"></i>
                    <label class="text" for="email">كلمة المرور الجديدة</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
                <div class="col-9">
                    <i class="fa-solid fa-lock mx-2 text"></i>
                    <label class="text" for="email">تأكيد كلمة المرور</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
            </div>
            <div class="text-center ">
                <button type="submit" class="btnn">حفظ التغييرات</button>
            </div>
        </div>
    </form>
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
    border: 0.1rem solid #9E5488;
    border-radius: 0.5rem;

}

.text {
    color: #9E5488;
}

.input {
    border: 0.1rem solid #9E5488;
    border-radius: 0.6rem;
    margin-bottom: 3rem
}

.btnn {
    color: #FFFFFF;
    background-color: #9E5488;
    width: 10rem;
    height: 5rem;
    margin-bottom: 3rem;
    border-radius: 0.6rem;
    border: none;
}
</style>