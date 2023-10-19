<template>
    <div class="container">
        <div class="row justify-content-center">
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
    <div class="container m-auto w-75 justify-content-center form ">
        <p>املئ البيانات وسيقوم فريقنا بالتواصل معك في اقرب وقت</p>
        <p class="text">نحن نحب ان نستمع منك !</p>

        <div class="row justify-content-center">
            <div class="col-4 mx-5">
                <i class="fa-solid fa-user mx-2"></i>
                <label class="text" for="name">اسم المستخدم</label>
                <input type="text" class="form-control mt-2" v-model.trim="name" />
            </div>
            <div class="col-4 mx-5">
                <i class="fa-solid fa-envelope mx-2"></i>
                <label class="text" for="email">البريد اللإلكتروني</label>
                <input type="text" class="form-control mt-2" />
            </div>
            <div class="col-9 mx-5">
                <i class="fa-solid fa-message mx-2"></i>
                <label class="text" for="email">محتوي الرسالة</label>
                <textarea placeholder="لا يزيد عن 250 كلمة" class="form-control mt-2"></textarea>
            </div>

            <div class="text-center">
                <button type="submit" class="btn mt-4 ">إرسال</button>
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
    text-align: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
    width: 25%;
    color: rgba(49, 131, 143, 0.85);
}

.image {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.form {
    background-color: rgba(49, 131, 143, 1);
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 0.4rem;
    /* width: 70%; */
}

.text {
    font-size: 1.6rem;
    font-weight: 600;
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
</style>