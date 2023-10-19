<template>
    <form @submit.prevent="login" class="w-75 mx-auto ">
        <div class="container justify-content-center ">
            <div class="row justify-content-center">
                <div class="col-9">
                    <i class="fa-solid fa-building mx-2 text"></i>
                    <label class="text" for="email">اسم المؤسسة / الشركة</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
                <div class="col-9">
                    <i class="fa-solid fa-user mx-2 text"></i>
                    <label class="text" for="email">اسم المهندس المكلف بمتابعة المشاريع في المنصة</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
                <div class="col-9">
                    <i class="fa-solid fa-phone mx-2 text"></i>
                    <label class="text" for="email">رقم هاتف المهندس</label>
                    <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                </div>
                <div class="col-9">
                    <i class="fa-solid fa-clock mx-2 text"></i>
                    <label class="text" for="email">تاريخ انتهاء السجل التجاري</label>
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
export default {

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
    margin-bottom:3rem;
    border-radius: 0.6rem;
    border:none;
}
</style>