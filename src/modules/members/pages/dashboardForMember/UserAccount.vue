<template>
    <div class="header me-5">
        <div class="inf" style="display:inline">معلومات العميل</div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-9">
                    <i class="fa-solid fa-user mx-3 textcolor fs-5"></i>
                    <label class="text textsize" for="email">اسم العميل</label>
                <p class="textcolor me-5">احمد محمد</p>
            </div>
            <div class="col-9">
                <i class="fa-solid fa-envelope mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">البريد الإلكتروني</label>
                <p class="textcolor me-5">example@gmail.com</p>
            </div>
            <div class="col-9">
                <i class="fa-solid fa-phone mx-3 textcolor fs-5"></i>
                <label class="text textsize" for="email">رقم هاتف</label>
                <p class="textcolor me-5">+20 102 375 3410</p>
            </div>
        </div>
    </div>
    <div class="header me-5 ">
        <div class="inf" style="display:inline">اخر المشاريع لهذا العميل</div>
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
    color: #48847B;
}

.textsize {
    font-size: 1rem;
    font-weight: 600;
}
</style>