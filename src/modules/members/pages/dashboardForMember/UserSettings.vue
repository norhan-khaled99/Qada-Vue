<template>
    <div class="nada">
        <div class="container">
            <form @submit.prevent="login"   class="p-5" >
                <div class="">
                    <div class="row formContainer w-75 m-auto py-5">
                        <div class="col-9 m-auto">
                            <i class="fa-solid fa-user mx-2 text"></i>
                            <label class="text" for="email">اسم العميل</label>
                            <input class="form-control mt-2 input w-75" v-model.trim="name" />
                        </div>
                        <div class="col-9 m-auto">
                            <i class="fa-solid fa-envelope mx-2 text"></i>
                            <label class="text" for="email">البريد الإلكتروني</label>
                            <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                        </div>
                        <div class="col-9 m-auto">
                            <i class="fa-solid fa-phone mx-2 text"></i>
                            <label class="text" for="email">رقم الهاتف</label>
                            <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                        </div>
                        <div class="col-9 m-auto ">
                            <i class="fa-solid fa-lock mx-2 text"></i>
                            <label class="text" for="email">كلمة المرور الجديدة</label>
                            <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                        </div>
                        <div class="col-9 m-auto">
                            <i class="fa-solid fa-lock mx-2 text"></i>
                            <label class="text" for="email">تأكيد كلمة المرور</label>
                            <input class="form-control mt-2 w-75 input" v-model.trim="name" />
                        </div>

                        <div class="text-center my-2">
                            <button type="submit" class="btnn">حفظ التغييرات</button>
                        </div>

                    </div>
                
                </div>
            </form>
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

.nada {
    background: linear-gradient(121.09deg, #59467C 30.12%, #000000 173.77%);
}

.formContainer {
    border: 0.1rem solid #9E5488;
    background-color: #fff;
}

.text {
    color: #9E5488;
}

.input {
    border: 0.1rem solid #9E5488;
    border-radius: 0.6rem;
    margin-bottom: 3rem
}

.btnn {
    color: #FFFFFF;
    background-color: #9E5488;
    width: 10rem;
    height: 5rem;
    margin-bottom: 3rem;
    border-radius: 0.6rem;
    border: none;
}</style>