<template>
    <BHeader/>
    <div class="container m-auto my-5">
        <div class="header">
            <p>تسجيل الدخول للأعمال</p>
        </div>
        <form @submit.prevent="login()" class="w-50 m-auto mt-5">
            <div class="mb-2">
                <img src="../../../assets/login_business.png" class="mx-2" alt="">
                <label for="name">اسم المستخدم</label>
            </div>
            <input type="text" class="form-control " v-model="form.email" />
            <div class="mb-2">
                <img src="../../../assets/login_business2.png" class="mx-2" alt="">
                <label class="my-3 mx-2" for="password">كلمة السر</label>
            </div>
            <input type="text" class="form-control " v-model="form.password" />
            <div class=" text-center">
            <router-link to="/business" class=" text-center">
                <button type="submit" class="btn y mt-4 ">دخول</button>
            </router-link>
            </div>
        </form>
        <div class=" text-center">
            <button type="button" class="register mt-4">
                <img src="../../../assets/Vector2.png" class="mx-2" alt="">
                <router-link class="link" to="businessRegister"> حساب جديد </router-link>
            </button>
        </div>
    </div>
</template>

<script>
import BHeader from "../components/BHeader.vue";
import { ref } from "vue";
import authService from "../services/AuthService";
import router from "@/router";

export default {
     components: {
        BHeader,
    },
    setup() {
        const form = ref({
            email: "",
            password: "",
        });

        const loginSuccess = ref(false);

        const login = () => {
            authService
                .login(form.value)
                .then((response) => {
                    console.log(response.data);
                    loginSuccess.value = true;
                    const { token, name, phone, email, id } = response.data;

                    localStorage.setItem("token", token);
                    localStorage.setItem("name", name);
                    localStorage.setItem("id", id);
                    localStorage.setItem("phone", phone);
                    localStorage.setItem("email", email);
                    router.push("/");
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        const goToRegister = () => {
            router.push("/register");
        };

        return {
            form,
            loginSuccess,
            login,
            goToRegister,
        };
    },
};
</script>


<style scoped>
* {
    direction: rtl;
}

.header {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 700px;
}
.header p{
    color: #259F5A;
}

p {
    color: #259F5A;
    font-weight: 700;
    font-size: 3rem;
}

form span {
    color: #000000;
    font-size: 2.0rem;
    margin: 0;
    padding: 0;
}

input {
    height: 55px;
    border-radius: 20px;
    text-align: center;
    background-color: #EAEAEA;
}

label {
    color: #259F5A;
}

.btn {

    color: #fff;
    height: 55px;
    width: 200px;
    background-color: #259F5A;
    border-radius: 20px
}

.register {
    border-color: #616567;
    width: 180px;
    height: 30px;
    border-radius: 20px
}
.link{
    text-decoration: none;
    color: #6a6868 ;
}

hr {
    border: 1px solid rgba(53, 53, 53, 0.7);
}
</style>
