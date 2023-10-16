<template>
  <div class="container">
    <div class="row">
      <div class="header">
        <div> إنشاء حساب </div>
      </div>
    </div>
    <form @submit.prevent="register">
      <div class="row">
        <div class="col-md-6 mb-4">
          <img src="../../../assets/Vector.png" class="mx-2" alt="">
          <label  for="name">اسم المستخدم</label>
          <input type="text" class="form-control mt-2" v-model.trim="name" />
        </div>
        <div class="col-md-6 mb-4">
          <img src="../../../assets/bxs_phone.png" class="mx-2" alt="">
          <label for="phone">رقم الهاتف</label>
          <input type="text" class="form-control mt-2" v-model.trim="phone" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <img src="../../../assets/passwd.png " class="mx-2" alt="">
          <label for="password">كلمة السر</label>
          <input type="text" class="form-control mt-2" v-model.trim="password" />
        </div>
        <div class="col-md-6 mb-4">
          <img src="../../../assets/passwd.png" class="mx-2" alt="">
          <label for="password">تأكيد كلمة السر</label>
          <input type="text" class="form-control" v-model.trim="confirmPassword"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <label for="email">البريد اللإلكتروني</label>
          <input type="text" class="form-control mt-2" />
        </div>

      </div>
      <div class="row">
        <span> قراءة الاحكام والشروط </span>
        <div class="form-check">
          <!-- <input class="form-check-input" type="checkbox"> -->
          <label class="form-check-label">الموافقة علي الشروط والأحكام</label>
        </div>
      </div>
              <button type="submit" class="btn btn-primary">إنشاء</button>
    </form>
    <hr>
    <p class="p1" > لديك حساب بالفعل ؟</p>
    <p class="p2"> سجل دخولك من هنا </p>
  </div>
</template>

<script>
import authService from '@/services/AuthService';


export default {
  name: 'App',
  components: { 
  },
  data(){
    return {
      name: '',
      email: '',
      password: '',
      phone:'',
      confirmPassword: '',
      registrationSuccess: false,
    }
  },
  methods:{
     register() {
      const personData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
      };

      authService
        .register(personData)
        .then(response => {
          this.registrationSuccess = true;
          const token = response.data.token;
          const name = response.data.name;
          const id = response.data.id;
          const email = response.data.email;
          const phone = response.data.phone;
          localStorage.setItem('token', token);
          localStorage.setItem('name', name);
          localStorage.setItem('id', id);
          localStorage.setItem('phone', phone);
          localStorage.setItem('email', email);
          this.$router.push('/');
        }).catch(error => {
          console.log(error);
        });
    }
  }

}
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

form span {
  color: #000000;
  font-size: 2.0rem;
  margin: 0;
  padding: 0;
}
input{
  width: 450px;
  height: 55px;
  border-radius: 20px;
}
label{
  /* background-color: #000000; */
  text-align: left;
}
.btn{
     width: 200px;
  
}
hr{
  border: 1px solid rgba(53, 53, 53, 0.7);
}
.container p{
 display:inline ;
}
.p1{
  color: rgba(0, 0, 0, 0.7);
}
.p2{
  color: rgba(3, 120, 174, 1);
}
</style>
