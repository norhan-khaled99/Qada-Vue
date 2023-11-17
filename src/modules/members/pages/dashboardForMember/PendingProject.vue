<template>
    <MemberHeader />
    <div class="containe">
        <div class="sideCard">
            <p>مرحبا</p>
            <h4>عبدالعزيز</h4>
            <p>الرئيسية</p>
            <p>حسابي</p>
            <p>المراسلات</p>
            <p>تسجيل خروج</p>
        </div>
        <div class="">
            <CheckLine />
        </div>
        <div class="container ">
            <div class="col-lg-8 m-lg-auto">
                <div class="row align-items-baseline conten">
                    <div class="col-4">
                        <h5>رقم المرجعي للمشروع</h5>
                    </div>
                    <div class="col-4  text-center">
                        <p>156137</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <h5>اسم المشروع </h5>
                    </div>
                    <div class="col-4 text-center">
                        <p>فيلا 5 اوض 3حمامات</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <h5>حالة المشروع</h5>
                    </div>
                    <div class="col-4 text-center">
                        <p>مشروع مضاف</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <h5>المساحة</h5>
                    </div>
                    <div class="col-4 text-center">
                        <p>450م<sup>2</sup></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <h5>تصنيف المشروع</h5>
                    </div>
                    <div class="col-4 text-center">
                        <p>سكني</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10">
                        <h5>وصف المشروع</h5>
                        <p class="descripe my-2">هذا وصف عشوائي لتجربة المنطقة النصيه الخاصة بوصف المشروع، في هذا المكان
                            وبهذه
                            الطريقة سيتم عرض وصف
                            المشروع</p>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="my-5">
                    <button class="btn contract mb-5">عقد الكتروني</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import CheckLine from './CheckLine.vue';
import MemberHeader from "../../components/MemberHeader.vue";
export default {
    name: 'PendingProject',
    components: {
        CheckLine,
        MemberHeader
    }
}
</script>

<style scoped>
* {
    direction: rtl;
}

.containe {
    position: relative;
}

h5 {
    color: #575757;
    font-size: 17px;
}

p {
    color: #000000;
    font-weight: 600;
    font-size: 18px
}

.descripe {
    color: #1C1C1C;
    font-size: 18px;
    font-weight: 500;
}

.contract {
    border-radius: 20px;
    background: #6ab38a;
    color: #fff;
    padding: 0.625rem 3.125rem;
    margin-left: 1.25rem;
    white-space: nowrap;
    width: 300px;
}

.sideCard {
    position: absolute;
    top: -15%;
    background-color: #54847D;
    color: #fff;
    width: 150px;
    text-align: center;
    border-radius: 18px 0 0 18px;
}

.sideCard p {
    color: #fff;
    font-weight: 400;
    margin-top: 20px;
}

table {
        border-collapse: collapse;
        width: 300px;
        border: 2px solid #000;
        border-radius: 10px;
    }

    th, td {
        border: 1px solid #000;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:first-child {
        border-radius: 10px 10px 0 0;
    }

    tr:last-child {
        border-radius: 0 0 10px 10px;
    }
@media(max-width: 576px) {}
</style>






