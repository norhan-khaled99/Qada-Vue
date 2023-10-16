<template>
    <div class="container-fluid">
        
        <div class="row align-items-center">
            <div class="col-lg-2 card officeCard">
                <h4 class="expert-name office">مكتب هندسي</h4>
                <p class="bio">خدمات اعمالك الهندسية بين يديك</p>
                <button class='btn bg-main text-white w-100 my-3 login'>تسجيل دخول</button>
                <button class='btn bg-main text-white w-100 my-3 register'>إنشاء حساب</button>
            </div>
            <div class="col-lg-2 card bussinseCard">
                <h4 class="expert-name bussinse">أعمال</h4>
                <p class="bio">دعم هندسي الكتروني متكامل</p>
                <button class='btn bg-main text-white w-100 my-3 login'>تسجيل دخول</button>
                <button class='btn bg-main text-white w-100 my-3 register'>إنشاء حساب</button>
            </div>
            <div class="col-lg-2 card memberCard">
                <h3 class="expert-name member">أفراد</h3>
                <p class="bio">خدمات هندسية الكترونية متكاملة</p>
                <button class='btn bg-main text-white w-100 my-3 login'>تسجيل دخول</button>
                <button class='btn bg-main text-white w-100 my-3 register'>إنشاء حساب</button>
            </div>
            <div class="col-lg-3 offset-lg-1  align-items-center">
                <h1>منصة قد<span>ة</span></h1>
                <p>ساهمت منصة قدة في تقليل عمر القضية بنسبة %79</p>
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
.container-fluid{
    background-color: #F5FFFC;
    height: 100vh;
}
.card {
    /* transition: transform 1s,height 300px; */
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
}

.officeCard:hover {
    /* box-shadow: 5px 15px 25px #eeeeee; */
    box-shadow: rgba(145, 158, 171, .2) 0px 2px 4px -1px, rgba(145, 158, 171, .14) 0px 4px 5px 0px, rgba(145, 158, 171, .12) 0px 1px 10px 0px;
    cursor: pointer;
    border: solid 1px #2A665D; 
    height: 400px;
} 
.bussinseCard:hover {
    /* box-shadow: 5px 15px 25px #eeeeee; */
    box-shadow: rgba(145, 158, 171, .2) 0px 2px 4px -1px, rgba(145, 158, 171, .14) 0px 4px 5px 0px, rgba(145, 158, 171, .12) 0px 1px 10px 0px;
    cursor: pointer;
    border: solid 1px #2A665D; 
    height: 400px;
} 
.memberCard:hover {
    /* box-shadow: 5px 15px 25px #eeeeee; */
    box-shadow: rgba(145, 158, 171, .2) 0px 2px 4px -1px, rgba(145, 158, 171, .14) 0px 4px 5px 0px, rgba(145, 158, 171, .12) 0px 1px 10px 0px;
    cursor: pointer;
    border: solid 1px #2A665D; 
    height: 400px;
} 
.card .btn {
    transition: transform 2s, opacity 1s;
    transform: translateY(100%);
    opacity: 0;
}
.card:hover .btn {
    opacity: 1;
    /* transform: translateY(0%); */
}
.card .bio {
    transition: transform 2s, opacity 1s;
    transform: translateY(100%);
    color: #000000;
    font-size: 18px;
}
.card:hover .bio {
    transform: translateY(0%);
}



.card .login{
    background-color: #2B83CD;
}
.card .register{
    background-color: #2A665D;
}
.member{
    color: #2B83CD;
    font-size: 2rem;
    font-weight: 600;
}
.bussinse{
    color: #098661;
    font-size: 2rem;
    font-weight: 600;
}
.office{
    color:#616567;
    font-size: 2rem;
    font-weight: 600;
}
span{
    color: #098661;
}
</style>



