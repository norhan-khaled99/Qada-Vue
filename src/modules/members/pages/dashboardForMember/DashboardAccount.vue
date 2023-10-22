<template>
    
    <div class="container-fliud">
        <!-- <div class="sideCard">
            <p>مرحبا</p>
            <h4>عبدالعزيز</h4>
            <p>الرئيسية</p>
            <p>حسابي</p>
            <p>المراسلات</p>
            <p>تسجيل خروج</p>
        </div> -->
        <form @submit.prevent="login" class="m-auto mt-5 ">
            <div class="container w-50">
                <div class="col-9 m-auto">
                    <i class="fa-solid fa-user mx-2 text"></i>
                    <label class="text" for="email">الاسم بالكامل</label>
                    <input class="form-control mt-2 input"  />
                </div>
                <div class="col-9 m-auto">
                    <i class="fa-solid fa-envelope mx-2 text"></i>
                    <label class="text" for="email">البريدالإلكتروني</label>
                    <input type="email" class="form-control mt-2 input" v-model.trim="name" id="email" />
                </div>
                <div class="col-9 m-auto">
                    <i class="fa-solid fa-phone-flip mx-2 text"></i>
                    <label class="text" for="phon">رقم الهاتف </label>
                    <input class="form-control mt-2 input" v-model.trim="name" id="phone" />
                </div>
                <div class="col-9 m-auto">
                    <i class="fa-solid fa-lock mx-2 text"></i>
                    <label class="text" for="email">كلمة المرور </label>
                    <input class="form-control mt-2 input" v-model.trim="name" />
                </div>
                <div class="text-center ">
                    <button type="submit" class="btnn">حفظ التغييرات</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'DashboardAccount'
}
</script>

<style scoped>
* {
    direction: rtl;
}
/* .container{
    position: relative;
}
.sideCard {
    position: absolute;
    top: 45%;
    background-color: #54847D;
    color: #fff;
    width: 150px;
    text-align: center;
    border-radius: 18px 0 0 18px;
} */

.text {
    color: #1A1313;
}

.input {
    border: 1px solid #1A1313;
    border-radius: 20px;
    margin-bottom: 3rem;
    height: 55px;
}

.btnn {
    color: #FFFFFF;
    background-color: #0C483F;
    width: 180px;
    height: 60px;
    margin-bottom: 3rem;
    border-radius: 15px;
    border: none;
}

@media(max-width: 576px) {
    .container {
        width: 100%;
    }
}</style>