<template>
  <div class="container m-auto my-5">
    <div class="header">
      <p>تسجيل الدخول للأفراد</p>
    </div>
    <form @submit.prevent="postData()" class="w-50 m-auto mt-5">
      <div class="mb-2">
        <img src="../../../assets/Vector.png" class="mx-2" alt="" />
        <label for="name">اسم المستخدم</label>
      </div>
      <input type="text" class="form-control" v-model="email" />
      <div class="mb-2">
        <img src="../../../assets/passwd.png" class="mx-2" alt="" />
        <label class="my-3" for="password mx-2">كلمة السر</label>
      </div>
      <input type="text" class="form-control" v-model="password" />
      <div class="text-center">
        <button type="submit" class="btn mt-4">دخول</button>
      </div>
    </form>
    <div class="text-center">
      <button type="button" class="register mt-4">
        <img src="../../../assets/Vector2.png" class="mx-2" alt="" />
        <router-link class="link" to="register"> حساب جديد </router-link>
      </button>
    </div>
  </div>
</template>

<script>
// import authService from '@/services/AuthService';
import axios from "axios";

export default {
  data() {
    return {
      email: '',
      password: '',
      loginSuccess: false,

    };
  }, methods: {
    async postData() {
      const credentials = {
        email: this.email,
         password: this.password,
      };
      let {data}  = await axios.post("https://finalqada.000webhostapp.com/person/login", credentials)
        // setMovies(data.results);
        console.log(data)
      // await fetch("https://finalqada.000webhostapp.com/api/terms", {
      //   method: "GET",
      //   // headers: {
      //   //   "Content-Type": "application/json",
      //   // },
      //   // body: credentials
      // }).then(function (response) {
      //   // Handle the successful response here.
      //   console.log('Response data:', response.data);
      // })
      //   .catch(function (error) {
      //     // Handle any errors here.
      //     console.error(`Error:${error}`);

      //   });
    },




    // postData() {
    //   // Define the data you want to send in the request body.
    //   const postData = {
    //      email: this.email,
    //      password: this.password,
    //   };

    //   // Define the URL for your POST request.
    //   const url = 'https://finalqada.000webhostapp.com/person/login';
    //   // const authKey='36|ZqV5AtW00mYbmZMb6jtJjd0awOvuyhxmKARc0UrV'
    //   // Define custom headers.
    //   const headers = {
    //     // 'Authorization': 'Bearer ', // Example: Authorization header with a bearer token
    //     // 'Authorization': "Bearer " + authKey,
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json', // Example: Content-Type header
    //   };

    //   // Make the POST request with custom headers.
    //   axios
    //     .post(url, postData, {
    //       headers: headers,
    //     })
    //     .then(response => {
    //       // Handle the successful response here.
    //       console.log('Response data:', response);
    //     })
    //     .catch(error => {
    //       // Handle any errors here.
    //       // console.error('Error:', error);
    //       if (error.response) {
    //                     console.log("error.response.data");
    //         // The request was made, but the server responded with a status code
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //       } else if (error.request) {
    //         console.log("error.request");
    //         // The request was made, but no response was received
    //         console.log(error.request);
    //       } else {
    //         // Something happened in setting up the request
    //         console.error('Error:', error.message);
    //       }
    //     });
    // },
    // login() {

    //   // const credentials = {
    //   //   email: this.email,
    //   //   password: this.password,
    //   // };
    //   //       //  console.log('Response data:', credentials);
    //   // axios.post('https://finalqada.000webhostapp.com/person/login', credentials)
    //   //   .then(function (response) {
    //   //     // Handle the successful response here.
    //   //     console.log('Response data:', response);
    //   //   })
    //   //   .catch(function (error) {
    //   //     // Handle any errors here.
    //   //     console.error('Error:', error);
    //   //   });

    //   // authService
    //   //   .login(credentials)
    //   //   .then(response => {
    //   //     console.log(response);
    //   //     this.loginSuccess = true;
    //   //     // const token = response.data.token;
    //   //     // const name = response.data.name;
    //   //     // const phone = response.data.phone;
    //   //     // const email = response.data.email;
    //   //     // const id = response.data.id;

    //   //     // localStorage.setItem('token', token);
    //   //     // localStorage.setItem('name', name);
    //   //     // localStorage.setItem('id', id);
    //   //     // localStorage.setItem('phone', phone);
    //   //     // localStorage.setItem('email', email);
    //   //     this.$router.push('/');
    //   //   })
    //   //   .catch(error => {
    //   //     console.log(error);
    //   //   });
    // },
  },

};
</script> 
<!-- <script>
import { ref } from "vue";
import authService from "@/services/AuthService";
import router from "@/router";

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
</script> -->


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
  width: 200px;
  height: 55px;
  border-radius: 20px;
  background-color: #0378ae;
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

</style>
