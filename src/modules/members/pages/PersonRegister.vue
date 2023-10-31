<template>
  <MainHeader/>
  <div class="container">
    <div class="row my-3">
      <div class="header mb-5">
        <h1>إنشاء حساب </h1>
      </div>
    </div>
    <form @submit.prevent="register()" class="w-75 m-auto">
      <div class="container">
        <div class="row ">
          <div class="col-md-6 mb-4">
            <i class="fa-solid fa-user mx-2"></i>
            <label for="name">اسم المستخدم</label>
            <input type="text" class="form-control mt-2" v-model="form.name" />
          </div>
          <div class="col-md-6 mb-4">
            <i class="fa-solid fa-phone mx-2 mb-1"></i>
            <label for="phone">رقم الهاتف</label>
            <input type="text" class="form-control mt-2" v-model="form.phone" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <i class="fa-solid fa-lock mx-2"></i>
            <label for="password">كلمة السر</label>
            <input type="text" class="form-control mt-2" v-model="form.password" />
          </div>
          <div class="col-md-6 mb-4">
            <i class="fa-solid fa-lock mx-2"></i>
            <label for="password">تأكيد كلمة السر</label>
            <input type="text" class="form-control mt-2" v-model="form.confirmPassword" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <label for="email">البريد اللإلكتروني</label>
            <input type="text" class="form-control mt-2"  v-model="form.email"/>
          </div>
        </div>

        <div class="row text-center">
          <span> قراءة الاحكام والشروط </span>
          <div class="border"></div>
          <div class="form-check">
            <label class="checkbox-label">الموافقة علي الشروط والاحكام
              <input required type="checkbox" name="mycheckbox" class="mycheckbox">
            </label>
          </div>
          <div class="">
            <button type="submit" class="btn btn-primary mt-3">إنشاء</button>
          </div>
        </div>
      </div>
    </form>
    <div class="my-5 text-center">
      <p class="p1"> لديك حساب بالفعل ؟</p>
      <p class="p2 "> <router-link to="login"> سجل دخولك من هنا </router-link> </p>
    </div>
  </div>
</template>

<script>
import MainHeader from "../../../components/Main_Header.vue";
import { ref } from 'vue';
import authService from '../services/AuthService';
import router from '@/router';
export default {
  components: {
    MainHeader,
  },
  name: 'App',
  setup() {
    const form = ref({
      name: '',
      email: '',
      password: '',
      phone: '',
      confirmPassword: '',
    });

    const registrationSuccess = ref(false);

    const register = () => {
      console.log(form.value);
      authService
        .register(form.value)
        .then(response => {
          registrationSuccess.value = true;
          const { token, name, id, email, phone } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('name', name);
          localStorage.setItem('id', id);
          localStorage.setItem('phone', phone);
          localStorage.setItem('email', email);
          router.push('/');
        })   
    };
    return {
      form,
      registrationSuccess,
      register,
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

h1 {
  color: #0378AE;
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
  /* width: 450px;*/
  height: 55px;
  border-radius: 20px;
}

label {
  /* background-color: #000000; */
  text-align: left;
  color: #0378AE;
}

.fa-solid {
  color: #0378AE;
  font-size: 25px;
  font-weight: 700;
}

.accept {
  color: #303030;
}

.btn {
  width: 200px;
  background-color: #0378AE;
  height: 55px;
  border-radius: 20px;
  border: #0378AE;
}

hr {
  border: 1px solid rgba(53, 53, 53, 0.7);
}

.container p {
  display: inline;
}

.p1 {
  color: rgba(0, 0, 0, 0.7);
}

.p2 {
  color: #0378AE;
}

.border {
  width: 25%;
  height: 5px;
  background-color: #0378AE;
  margin: 15px auto;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
}

.checkbox-label .mycheckbox {
  background-color: #0378AE;
}
</style>
