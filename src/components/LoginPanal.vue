<template>
   
    <div class="container">
        <div class="row">
        <div class="col-lg-3 expert">
            <div class="expert-info">
                <h4 class="expert-name">افراد</h4>
                <p class="bio"> خدمات هندسية الكترونية متكاملة</p>
            </div>
        </div>
        <div class="col-lg-3 expert">
            <div class="expert-info">
                <h4 class="expert-name">اعمال</h4>
                <p class="bio"> دعم هندسي متكامل</p>
            </div>
        </div>
        <div class="col-lg-3 expert">
            <div class="expert-info">
                <h4 class="expert-name">مكتب هندسي</h4>
                <p class="bio"> حدمات اعمالك الهندسية بين يديك</p>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'LoginPanal',
};
</script>

<style scoped>
/* :root {
    --main-color: #0aad0a;
    --light-color: #f0f3f2;
    --shadow: rgba(145, 158, 171, .2) 0px 2px 4px -1px, rgba(145, 158, 171, .14) 0px 4px 5px 0px, rgba(145, 158, 171, .12) 0px 1px 10px 0px;
    --font-family: 'Encode Sans Expanded', sans-serif;
    --rating-color: #ffc908;
} */
.container{
    background-color: #D9D9D9;
}
.expert{
    overflow: hidden;
    background: #ffffff;
    color: #21201e;
    text-align: center;
    width: 240px;
    height: 340px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1.2rem;
    margin: 2rem;
}
    .expert:hover img{
        scale: 1.1;
    }
    .expert:hover{
        box-shadow: 5px 15px 25px #eeeeee;
    }

</style>