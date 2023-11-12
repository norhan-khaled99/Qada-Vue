<template>
  <div>
    <FHeader />
    <div class="container m-auto my-5">
      <div class="header">
        <p>تسجيل الدخول للمكاتب الهندسية</p>
      </div>
      <form @submit.prevent="login()" class="w-50 m-auto mt-5">
        <div class="mb-2">
          <i class="fa-solid fa-user mx-2"></i>
          <label for="name">اسم المستخدم</label>
        </div>
        <input type="text" class="form-control" v-model="form.email" />
        <div class="mb-2">
          <i class="fa-solid fa-lock mx-2"></i>
          <label class="my-3" for="password mx-2">كلمة السر</label>
        </div>
        <input type="text" class="form-control" v-model="form.password" />
        <div class="text-center">
          <button type="submit" class="btn btn-primary mt-4">دخول</button>
        </div>
      </form>
      <div class="text-center">
        <button type="button" class="register mt-4">
          <img src="../../../assets/Vector2.png" class="mx-2" alt="" />
          <router-link class="link" to="Engineering_officesRegister">
            حساب جديد
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import authService from "../services/AuthService";
import router from "@/router";
import FHeader from "../components/FHeader.vue";

export default {
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
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("id", response.data.data.id);
          localStorage.setItem("phone", response.data.data.phone);
          localStorage.setItem("email", response.data.data.email);
          router.push("/EngineeringOffices");
        })
        .catch((error) => {
          console.log(error);
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
  components: { FHeader },
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
  color: #626466;
  font-weight: 700;
  font-size: 3rem;
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

.btn {
  width: 200px;
  height: 55px;
  border-radius: 20px;
  background-color: #626466;
  border: #626466;
}

.register {
  border-color: #616567;
  width: 180px;
  height: 30px;
  border-radius: 20px;
}

.link {
  text-decoration: none;
  color: #6a6868;
}

hr {
  border: 1px solid rgba(53, 53, 53, 0.7);
}
.fa-solid {
  color: #626466;
  font-size: 25px;
  font-weight: 700;
}
</style>
