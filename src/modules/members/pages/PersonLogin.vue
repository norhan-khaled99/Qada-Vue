<template>
  <div>
    <PHeader/>
    <div class="container mx-auto my-5">
      <div class="header">
        <p>تسجيل الدخول للأفراد</p>
      </div>
      <div class="row">
        <form @submit.prevent="login" class="mt-5">
          <div class="col-md-4 col-sm-8 mx-auto">
            <div class="mb-2">
              <img src="../../../assets/Vector.png" class="mx-2" alt="" />
              <label for="name">اسم المستخدم</label>
            </div>
            <input 
              type="text" 
              class="form-control" 
              v-model="form.email" 
              @blur="v$.email.$touch()" 
              :class="{'is-invalid': v$.email.$error}"
            />
            <div v-if="v$.email.$error" class="text-danger">
              <span v-if="v$.email.email">اسم المستخدم يجب أن يكون بريد إلكتروني صالح  </span>
          </div>
          
            <div class="mb-2">
              <img src="../../../assets/passwd.png" class="mx-2" alt="" />
              <label class="my-3" for="password mx-2">كلمة السر</label>
            </div>
            <input 
              type="password" 
              class="form-control" 
              v-model="form.password" 
              @blur="v$.password.$touch()" 
              :class="{'is-invalid': v$.password.$error}"
            />
            <div v-if="v$.password.$error" class="text-danger">
              <span v-if="v$.password.required">كلمة السر مطلوبة</span>
            </div>
            <div class="text-center">
              <button type="submit" class="btn mt-4" :disabled="v$.$invalid">دخول</button>
            </div>
          </div>
        </form>
      </div>
      <div class="text-center">
        <button type="button" class="register mt-4">
          <img src="../../../assets/Vector2.png" class="mx-2" alt="" />
          <router-link class="link" to="/register"> حساب جديد </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PHeader from "../components/PHeader.vue";
import { reactive, ref } from "vue";
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import authService from "../services/AuthService";
import router from "@/router";

export default {
  components: {
    PHeader,
  },
  setup() {
    const form = reactive({
      email: "",
      password: "",
    });

    const rules = {
      email: { required, email },
      password: { required },
    };

    const v$ = useVuelidate(rules, form);

    const loginSuccess = ref(false);

    const login = () => {
      v$.value.email.$touch();
      v$.value.password.$touch();

      if (v$.value.email.$error || v$.value.password.$error) {
        return;
      }

      authService
        .login(form)
        .then((response) => {
          console.log(response.data);
          loginSuccess.value = true;
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.msg.name);
          localStorage.setItem("id", response.data.msg.id);
          localStorage.setItem("phone", response.data.msg.phone);
          localStorage.setItem("email", response.data.msg.email);
          router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      form,
      loginSuccess,
      login,
      v$,
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
  color: #0378ae;
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
  padding: 10px 55px;
  border-radius: 20px;
  background-color: #0378ae;
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

.is-invalid {
  border-color: red;
}
.text-danger span{
  color: red;
  font-size: 20px;
}
</style>
