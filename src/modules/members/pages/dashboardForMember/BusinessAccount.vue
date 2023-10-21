<template>
    <div class="header me-5">
        <div class="inf" style="display:inline">معلومات العميل</div>
        <span class="header textcolor" style="font-size: 1.5rem;font-weight: 600;">(أعمال)</span>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-9">
                <i class="fa-solid fa-building mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">اسم المؤسسة / الشركة</label>
                <p class="textcolor me-5" >احمد محمد</p>
            </div>
            <div class="col-9">
                <i class="fa-solid fa-user mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">اسم المهندس المكلف بمتابعة المشاريع في المنصة</label>
                <p class="textcolor me-5">محمود احمد</p>
            </div>
            <div class="col-9">
                <i class="fa-solid fa-phone mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">رقم هاتف المهندس</label>
                <p class="textcolor me-5">+20 102 375 3410</p>
            </div>
            <div class="col-9">
                <i class="fa-solid fa-clock mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">تاريخ انتهاء السجل التجاري</label>
                <p class="textcolor me-5">2/2/2022</p>
            </div>
            <div class="col-9 ">
                <i class="fa-solid fa-lock mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">كلمة المرور</label>
                <p class="textcolor me-5">******************</p>
            </div>
        </div>
    </div>
    <div class="header me-5 ">
            <div class="inf" style="display:inline">اخر المشاريع  لهذا العميل</div>
            <span class="header textcolor" style="font-size: 1.5rem;font-weight: 600;">(أعمال)</span>
        </div>
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
    width: 50%;
}

.inf {
    /* color: #FFFFFF; */
    font-size: 2rem;
    font-weight: 600;
}

.textcolor {
    color: #239856;
}
.textsize{
    font-size: 1rem;
    font-weight: 600;
}
</style>