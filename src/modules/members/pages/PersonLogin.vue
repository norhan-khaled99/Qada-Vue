<template>
  <div class="container m-auto my-5">
    <div class="header">
      <p>تسجيل الدخول للأفراد </p>
    </div>
    <form @submit.prevent="login" class="w-50 m-auto mt-5">
      <div class="mb-2">
        <img src="../../../assets/Vector.png" class="mx-2" alt="">
        <label for="name">اسم المستخدم</label>
      </div>
      <input type="text" class="form-control " v-model="name" />
      <div class="mb-2">
        <img src="../../../assets/passwd.png" class="mx-2" alt="">
        <label class="my-3 " for="password mx-2">كلمة السر</label>
      </div>
      <input type="text" class="form-control " v-model="password" />
      <div class=" text-center">
        <button type="submit" class="btn btn-primary mt-4 ">دخول</button>
      </div>
    </form>
    <div class=" text-center">
    <button type="button" class="register mt-4">
      <img src="../../../assets/Vector2.png" class="mx-2" alt="">
      <router-link class="link" to="register"> حساب جديد </router-link>
    </button>
    </div>
  </div>
</template>

<script>
import authService from '@/services/AuthService';

export default {
  data() {
    return {
      email: '',
      password: '',
      loginSuccess: false,
    };
  }, methods: {
    login() {
      const credentials = {
        email: this.email,
        password: this.password,
      };
      authService
        .login(credentials)
        .then(response => {

          console.log(response.data);
          this.loginSuccess = true;
          const token = response.data.token;
          const name = response.data.name;
          const phone = response.data.phone;
          const email = response.data.email;
          const id = response.data.id;

          localStorage.setItem('token', token);
          localStorage.setItem('name', name);
          localStorage.setItem('id', id);
          localStorage.setItem('phone', phone);
          localStorage.setItem('email', email);
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error);
        });
    },
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
  height: 55px;
  border-radius: 20px;
  text-align: center;
  background-color: #EAEAEA;
}
.btn {
  width: 200px;
  height: 55px;
  border-radius: 20px
}
.register{
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
}</style>
