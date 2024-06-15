<template>
  <div>
    <BHeader />
    <div class="container m-auto my-5">
      <div class="header">
        <p>تسجيل الدخول للأعمال</p>
      </div>
      <div class="row">
        <form @submit.prevent="login()" class="mt-5">
          <div class="col-md-4 col-sm-8 mx-auto">
        <div class="mb-2">
          <img src="../../../assets/login_business.png" class="mx-2" alt="" />
          <label for="name">اسم المستخدم</label>
        </div>
        <input type="text" class="form-control" v-model="form.email" />
        <div class="mb-2">
          <img src="../../../assets/login_business2.png" class="mx-2" alt="" />
          <label class="my-3 mx-2" for="password">كلمة السر</label>
        </div>
        <input type="password" class="form-control" v-model="form.password" />
        <div class="text-center">
          
            <button type="submit" class="btn y mt-4">دخول</button>
         
        </div>
        </div>
      </form>
      </div>
      <div class="text-center">
        <button type="button" class="register mt-4">
          <img src="../../../assets/Vector2.png" class="mx-2" alt="" />
          <router-link class="link" to="businessRegister">
            حساب جديد
          </router-link>
        </button>
      </div>
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
          console.log("response.data");
          loginSuccess.value = true;
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("id", response.data.data.id);
          localStorage.setItem("phone", response.data.data.phone);
          localStorage.setItem("email", response.data.data.email);

          router.push("/business");
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
.header p {
  color: #259f5a;
}

p {
  color: #259f5a;
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

label {
  color: #259f5a;
}

.btn {
  color: #fff;
  padding: 10px 55px;
  background-color: #259f5a;
  border-radius: 20px;
}

.register {
  border-color: #616567;
  padding: 5px 20px;
  border-radius: 20px;
}
.link {
  text-decoration: none;
  color: #6a6868;
}

hr {
  border: 1px solid rgba(53, 53, 53, 0.7);
}
</style>
