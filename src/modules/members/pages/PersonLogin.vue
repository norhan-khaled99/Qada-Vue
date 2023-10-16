<template>
  <div class="container w-50 m-auto my-5">
    
    <div class="header">
      <p>تسجيل الدخول للأفراد </p>
    </div>
    <form @submit.prevent="login">
        <img src="../../../assets/Vector.png" alt="">
        <label  for="name">اسم المستخدم</label>
        <input type="text" class="form-control w-75" v-model="name"/>
        <img src="../../../assets/passwd.png" alt="">
        <label class="my-3 " for="password">كلمة السر</label>
        <input type="text" class="form-control w-75" v-model="password" />
        <button type="submit" class="btn btn-primary">دخول</button>
    </form>
    <br><br>               
        <button type="button" class="btn"> 
        <img src="../../../assets/Vector2.png" alt="">
          حساب جديد
        </button>
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
/* * {
  direction: rtl;
} */

.header {
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700px;
}
/* form{
  justify-content: center;
  text-align: center;
} */
form span {
  color: #000000;
  font-size: 2.0rem;
  margin: 0;
  padding: 0;
}

input {
  /* width: 450px; */
  height: 55px; 
  border-radius: 20px;
  text-align: center;
}

label {
  /* background-color: #000000; */
  text-align: left;
}

.btn {
  width: 200px;
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
  color: rgba(3, 120, 174, 1);
}</style>
