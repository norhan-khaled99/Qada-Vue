<template>
    <div class="container">
        <div class="row justify-content-center text-center ">
            <div class="col-lg-2 card">
                <div><img class="image" src="../assets/bi_telephone-fill.png" alt=""></div>
                <p>0000 0000 0100+</p>
            </div>
            <div class="col-lg-2 card">
                <div><img class="image" src="../assets/mdi_email.png" alt=""></div>
                <p>lorem@email.com</p>
            </div>
            <div class="col-lg-2 card">
                <div><img class="image" src="../assets/zondicons_location.png" alt=""></div>
                <p>102 الرياض</p>
            </div>
        </div>
    </div>

    <div class="container m-auto w-lg-75 justify-content-center form my-3">
        <div class="row m-auto text-center">
            <p class="pt-5 firstPragraph">املئ البيانات وسيقوم فريقنا بالتواصل معك في اقرب وقت</p>
            <p class="text">نحن نحب ان نستمع منك !</p>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-lg-4 mx-5">
                <i class="fa-solid fa-user"></i>
                <label class="text mx-3" for="name">الاسم</label>
                <input type="text" class="form-control mt-2" v-model.trim="name" />
            </div>
            <div class="col-lg-4 mx-5">
                <i class="fa-solid fa-envelope "></i>
                <label class="text mx-3" for="email">البريد اللإلكتروني</label>
                <input type="text" class="form-control mt-2" />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 mt-5 m-auto">
                <i class="fa-solid fa-message "></i>
                <label class="text mx-3" for="email">محتوي الرسالة</label>
                <textarea placeholder="لا يزيد عن 250 كلمة" class="form-control mt-2 " rows="6"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="text-center">
                <button type="submit" class="btn my-5 ">إرسال</button>
            </div>
        </div>
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
.card {
    border: 0.1rem solid rgba(49, 131, 143, 1);
    border-radius: 0.4rem;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 25%;
    height: 150px;
    color: rgba(49, 131, 143, 0.85);
}
.card p{
    color: #31838FD9;
}
.firstPragraph {
    font-weight: 600;
}
.image {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.form {
    background-color: #31838F;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border-radius: 1rem;
}
input {
    background-color: #DDDDDD;
    width: 100%;
    height: 50px;
}
textarea {
    background-color: #DDDDDD;
}

p {
    color: #000D11;
}

.text {
    font-size: 1.6rem;
    font-weight: 500;
    color: #000D11;
}

.fa-solid {
    color: #DDDDDD;
    font-size: 25px;
    font-weight: 700;
}

.btn {
    background-color: #000D11;
    color: #FFFFFF;
    width: 8rem;
    height: 4rem;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 0.4rem;

}
@media(max-width: 576px){
    .form{
        width: 90%;
    }
}
</style>