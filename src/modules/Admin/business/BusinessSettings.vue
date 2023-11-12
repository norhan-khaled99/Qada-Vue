<template>
    <div class="nada">
        <AdminHeader />
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
                    <li class="mx-5"><a>الملف الشخصي</a></li>
                    <li><a class="secondLink">الاعدادات</a></li>
                </ul>
            </div>
            <form @submit.prevent="login" class="p-5">
                <div class="">
                    <div class="row formContainer col-lg-10 m-auto py-5">
                        <div class="col-lg-7 m-auto ">
                            <svg class="mx-2 text" xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                viewBox="0 0 20 18" fill="none">
                                <path
                                    d="M16 12H14V14H16M16 8H14V10H16M18 16H10V14H12V12H10V10H12V8H10V6H18M8 4H6V2H8M8 8H6V6H8M8 12H6V10H8M8 16H6V14H8M4 4H2V2H4M4 8H2V6H4M4 12H2V10H4M4 16H2V14H4M10 4V0H0V18H20V4H10Z"
                                    fill="#9E5488" />
                            </svg>
                            <label class="text" for="email">اسم المؤسسة/الشركة</label>
                            <input class="form-control mt-2  " v-model.trim="name" />
                        </div>
                        <div class="col-lg-7 m-auto">
                            <svg class=" mx-2 text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 20C12 20 20 20 20 18C20 15.6 16.1 13 12 13C7.9 13 4 15.6 4 18C4 20 12 20 12 20Z"
                                    fill="#9E5488" />
                            </svg>
                            <label class="text" for="email">اسم المهندس المكلف بمتابعة المشاريع في المنصة</label>
                            <input class="form-control mt-2 " v-model.trim="name" />
                        </div>
                        <div class="col-lg-7 m-auto">
                            <i class="fa-solid fa-phone mx-2 text"></i>
                            <label class="text" for="email">رقم هاتف المهندس</label>
                            <input class="form-control mt-2 " v-model.trim="name" />
                        </div>
                        <div class="col-lg-7 m-auto">
                            <svg class=" mx-2 text" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_966_19619)">
                                    <path
                                        d="M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM10.884 6.6972C10.6619 6.6972 10.4488 6.78545 10.2917 6.94253C10.1346 7.09961 10.0464 7.31265 10.0464 7.5348V14.232C10.0464 14.6952 10.4208 15.0696 10.884 15.0696H17.5812C17.6938 15.0739 17.8061 15.0554 17.9113 15.0152C18.0166 14.9751 18.1127 14.9141 18.1939 14.836C18.275 14.7578 18.3396 14.6641 18.3837 14.5604C18.4278 14.4568 18.4505 14.3453 18.4505 14.2326C18.4505 14.1199 18.4278 14.0084 18.3837 13.9048C18.3396 13.8011 18.275 13.7074 18.1939 13.6292C18.1127 13.5511 18.0166 13.4901 17.9113 13.45C17.8061 13.4098 17.6938 13.3913 17.5812 13.3956H11.7204V7.5348C11.7204 7.31286 11.6323 7.1 11.4755 6.94295C11.3187 6.78591 11.1059 6.69752 10.884 6.6972Z"
                                        fill="#9E5488" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_966_19619">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <label class="text" for="date">تاريخ انتهاء السجل التجاري</label>
                            <input type="date" class="form-control mt-2 " v-model.trim="name" />
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

li {
    list-style-type: none;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
}

.secondLink {
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
}</style>