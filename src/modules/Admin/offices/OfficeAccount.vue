<template>
    <AdminHeader />
    <div class="header me-5">
        <div class="inf" style="display:inline">معلومات المكتب الهندسي</div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-9">
                <i class="fa-solid fa-user-gear mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">اسم المكتب الهندسي</label>
                <p class="textcolor me-5">شركة المهندسين المحدودة</p>
            </div>
            <div class="col-9">
                <i class="fa-solid fa-envelope mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">البريد الإلكتروني</label>
                <p class="textcolor me-5">example@gmail.com</p>
            </div>
            <div class="col-9">
                <i class="fa-solid fa-phone mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">رقم هاتف المهندس</label>
                <p class="textcolor me-5">+20 102 375 3410</p>
            </div>
            <div class="col-9">
                <i class="fa-solid fa-plane mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">رقم السجل التجاري</label>
                <p class="textcolor me-5">5777789153647564</p>
            </div>
        </div>
    </div>
    <div class="header me-5 ">
        <div class="inf" style="display:inline">اخر المشاريع لهذا المكتب</div>
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

.container {
    border: 0.1rem solid #9E5488;
    border-radius: 0.5rem;
    width: 50%;
}

.inf {
    /* color: #FFFFFF; */
    font-size: 2rem;
    font-weight: 600;
}

.textcolor {
    color: #B18718;
}

.textsize {
    font-size: 1rem;
    font-weight: 600;
}
</style>