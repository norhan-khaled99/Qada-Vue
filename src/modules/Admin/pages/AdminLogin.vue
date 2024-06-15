<template>
    <div>
        <Main_Header/>
        <div class="container m-auto my-5">
            <div class="header">
                <p>تسجيل دخول الادمن</p>
            </div>
            <form @submit.prevent="login()" class="w-50 m-auto mt-5">
                <div class="mb-2">
                    <i class="fa-solid fa-lock mx-2"></i>
                    <label class="text_color" for="name">اسم المستخدم</label>
                </div>
                <input type="text" class="form-control" v-model="form.email" />
                <div class="mb-2">
                    <i class="fa-solid fa-lock mx-2"></i>
                    <label class="my-3 text_color" for="password mx-2">كلمة السر</label>
                </div>
                <input type="password" class="form-control" v-model="form.password" />
                <div class="text-center">
                    <button type="submit" class="btn mt-4">دخول</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
import Main_Header from "../../../components/Main_Header.vue"
import adminService from "../services/adminService";
import router from "@/router";

export default {
    components: {
    Main_Header
},
    setup() {
        const form = ref({
            email: "",
            password: "",
        });
        const loginSuccess = ref(false);
        const login = () => {
            adminService
                .login(form.value)
                .then((response) => {
                    console.log(response.data);
                    loginSuccess.value = true;
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("name", response.data.data.name);
                    router.push("/admin/homepage");
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        return {
            form,
            loginSuccess,
            login,
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
p {
    color: #59467C;
    font-weight: 700;
    font-size: 3rem;
}
.text_color{
    color: #59467C;
}
form span {
    color: #000000;
    font-size: 2rem;
    margin: 0;
    padding: 0;
}
input {
    height: 55px;
    border-radius: 20px;
    text-align: center;
    background-color: #eaeaea;
}
.fa-solid {
    color: #59467C;
    font-size: 25px;
}
.btn {
    width: 200px;
    height: 55px;
    color: #ffffff;
    border-radius: 20px;
    background-color: #59467C;
}

.link {
    text-decoration: none;
    color: #6a6868;
}
hr {
    border: 1px solid rgba(53, 53, 53, 0.7);
}
</style>
