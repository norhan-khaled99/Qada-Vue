<template>
    <div class="container-fluid ">

        <div class="row">
            <div class="col-lg-2 card officeCard mx-lg-4 my-5">
                <div class="card-body">
                    <h4 class="card-title office">مكتب هندسي</h4>
                    <p class="card-text">خدمات اعمالك الهندسية بين يديك</p>
                    <a href="#" class="btn btn-secondary my-2">تسجيل دخول</a>
                    <a href="#" class="btn createBtn">إنشاء حساب</a>
                </div>
            </div>
            <div class="col-lg-2 card bussinseCard mx-lg-4 my-5">
                <div class="card-body">
                    <h5 class="card-title bussinse">أعمال</h5>
                    <p class="card-text">دعم هندسي الكتروني متكامل</p>
                    <a href="#" class="btn btn-success my-2">تسجيل دخول</a>
                    <a href="#" class="btn createBtn">إنشاء حساب</a>
                </div>
            </div>
            <div class="col-lg-2 card memberCard  mx-lg-4 my-5">
                <div class="card-body">
                    <h5 class="card-title member">أفراد</h5>
                    <p class="card-text">خدمات هندسية الكترونية متكاملة</p>
                    <a href="#" class="btn btn-primary my-2">تسجيل دخول</a>
                    <div >
                        <a href="#" class="btn createBtn">إنشاء حساب</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 offset-lg-1 ">
                <h1>منصة قد<span>ة</span></h1>
                <p>ساهمت منصة قدة في تقليل عمر القضية بنسبة %79</p>
            </div>
            <!-- <div class="col-lg-2 card officeCard ">
                <h4 class="expert-name office">مكتب هندسي</h4>
                <p class="bio">خدمات اعمالك الهندسية بين يديك</p>
                <button class='btn bg-main text-white w-100 my-3 login'>تسجيل دخول</button>
                <button class='btn bg-main text-white w-100 my-3 register'>إنشاء حساب</button>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPanal",
};
</script>

<style scoped>
.container-fluid {
    background-color: #F5FFFC;
    height: 100vh;
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
}*/</style>



