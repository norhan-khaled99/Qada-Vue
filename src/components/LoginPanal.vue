<template>
    <div class="container-fluid row align-items-center">

        <div class="row view align-items-center">
            <div class="col-lg-3 offset-lg-1 qdas ">
                <h1 class="mb-">منصة قد<span>ة</span></h1>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <p>ساهمت منصة قدة في تقليل عمر القضية بنسبة %79</p>
                        </div>
                        <div class="carousel-item">
                            <p>ساهمت منصة قدة بإتاحة التقاضي إلكترونيًا لأكثر من 6 ملايين جلسة عن بعد، وإصدار 2 مليون حكم
                                قضائي إلكتروني</p>
                        </div>
                        <div class="carousel-item">
                            <p>ساهمت منصة قدة في إصدار أكثر من مليون طلب تنفيذ، وأكثر من 1,6 مليون قرار تنفيذ إلكتروني</p>
                        </div>
                        <div class="carousel-item">
                            <p>وفرت منصة ناجز على المستفيدين خلال سنة 2022 أكثر من 47 مليون زيارة للمقرات العدلية</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row  ">
                    <div class="col-lg-3 card memberCard  mx-lg-4 my-5">
                        <div class="card-body">
                            <h5 class="card-title member">أفراد</h5>
                            <p class="card-text">خدمات هندسية الكترونية متكاملة</p>
                            <router-link to="/person/login" class="btn btn-primary my-2">تسجيل دخول</router-link>
                            <div>
                                <router-link to="/person/register" class="btn createBtn">إنشاء حساب</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 card bussinseCard mx-lg-4 my-5">
                        <div class="card-body">
                            <h5 class="card-title bussinse">أعمال</h5>
                            <p class="card-text">دعم هندسي الكتروني متكامل</p>
                            <router-link to="/business/businessLogin" class="btn btn-success my-2">تسجيل دخول</router-link>
                            <div class="">
                                <router-link to="business/businessRegister" class="btn createBtn">إنشاء حساب</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 card officeCard mx-lg-4 my-5">
                        <div class="card-body">
                            <h4 class="card-title office">مكتب هندسي</h4>
                            <p class="card-text">خدمات اعمالك الهندسية بين يديك</p>
                            <router-link to="/EngineeringOffices/Engineering_officesLogin" class="btn btn-secondary my-2">تسجيل دخول</router-link>
                            <div class="">
                                <router-link to="/EngineeringOffices/Engineering_officesRegister" class="btn createBtn">إنشاء حساب</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPanal",
};
</script>

<style scoped>
*{
    direction: rtl;
}
.container-fluid {
    background-color: #F5FFFC;
    background-image: url(../assets/graph.png);
    background-size: 100% 100%;
    height: 100vh;
}
.member {
    color: #2B83CD;
}
.bussinse {
    color: #098661;
}
.office {
    color: #616567;
}
.card {
    transition: height 1s, ;
    padding: 1.5em .5em .5em;
    text-align: center;
    border-radius: 1em;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    height: 300px;
}

.card-title {
    font-size: 1.9rem;
    font-weight: 600;
}

.card-text {
    transition: transform 1s;
    transform: translateY(100%);
    color: #000000;
    font-size: 18px;
}

.card:hover .card-text {
    transform: translateY(50%);
}

.createBtn {
    color: #fff;
    background-color: #0C483F;
}

.card .btn {
    transition: transform 1s, opacity 1s;
    opacity: 0;
}

.card:hover .btn {
    opacity: 1;
    transform: translateY(100%);
}

.officeCard:hover {
    /* box-shadow: 5px 15px 25px #eeeeee;  */
    /* box-shadow: rgba(145, 158, 171, .2) 0px 2px 4px -1px, rgba(145, 158, 171, .14) 0px 4px 5px 0px, rgba(145, 158, 171, .12) 0px 1px 10px 0px; */
    cursor: pointer;
    border: solid 2px #616567;
    height: 350px;
}

.bussinseCard:hover {
    /* box-shadow: 5px 15px 25px #eeeeee; */
    box-shadow: rgba(145, 158, 171, .2) 0px 2px 4px -1px, rgba(145, 158, 171, .14) 0px 4px 5px 0px, rgba(145, 158, 171, .12) 0px 1px 10px 0px;
    cursor: pointer;
    border: solid 2px #2A665D;
    height: 350px;
}

.memberCard:hover {
    /* box-shadow: 5px 15px 25px #eeeeee; */
    box-shadow: rgba(145, 158, 171, .2) 0px 2px 4px -1px, rgba(145, 158, 171, .14) 0px 4px 5px 0px, rgba(145, 158, 171, .12) 0px 1px 10px 0px;
    cursor: pointer;
    border: solid 2px #2B83CD;
    height: 350px;
}

span {
    color: #098661;
}

/*.card {
    transition: height 1s,;
    height: 300px;
    overflow: hidden;
    background: #ffffff;
    color: #21201e;
    text-align: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly ;
    border-radius: 1.2rem;
    margin: 2rem;
}*/
</style>



