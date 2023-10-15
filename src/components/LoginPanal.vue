<template>
    <div class="container-fluid">
        <div class="row">
        <div class="col-lg-2 expert">
            <div class="expert-info">
            <h4 class="expert-name">مكتب هندسي</h4>
            <p class="bio">حدمات اعمالك الهندسية بين يديك</p>
            </div>
        </div>
        <div class="col-lg-2 expert">
            <div class="expert-info">
            <h4 class="expert-name">اعمال</h4>
            <p class="bio">دعم هندسي متكامل</p>
            </div>
        </div>
        <div class="col-lg-2 expert">
            <div class="expert-info">
            <h3 class="expert-name member">أفراد</h3>
            <p class="bio">خدمات هندسية الكترونية متكاملة</p>
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
.container-fluid{
    background-color: #d9d9d9;
}
.expert {
    overflow: hidden;
    background: #ffffff;
    color: #21201e;
    text-align: center;
    height: 340px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly ;
    border-radius: 1.2rem;
    margin: 2rem;
}
.expert:hover img {
    scale: 1.1;
}
.expert:hover {
    box-shadow: 5px 15px 25px #eeeeee;
}
/* .product:hover {
    box-shadow: var(--shadow);
    cursor: pointer;
    border: solid 1px var(--main-color); 
}
.product .btn {
    transition: transform 1s, opacity 1s;
    transform: translateY(100%);
    opacity: 0;
}
.product:hover .btn {
    opacity: 1;
    transform: translateY(0%);
} */

.member{
    color: #2B83CD;
    font-size: 2rem;
    font-weight: 600;
}
</style>



