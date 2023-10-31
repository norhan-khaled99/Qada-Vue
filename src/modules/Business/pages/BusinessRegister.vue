<template>
    <div class="container">
        <div class="row my-3">
            <div class="header mb-5">
                <h1>إنشاء حساب </h1>
            </div>
        </div>
        <form @submit.prevent="register" class="w-75 m-auto">
            <div class="container">
                <div class="row ">
                    <div class="col-md-6 mb-4">
                        <i class="fa-solid fa-user mx-2"></i>
                        <label for="name">اسم المستخدم</label>
                        <input type="text" class="form-control mt-2" v-model.trim="name" />
                    </div>
                    <div class="col-md-6 mb-4">
                        <i class="fa-solid fa-phone mx-2 mb-1"></i>
                        <label for="phone">رقم الهاتف</label>
                        <input type="text" class="form-control mt-2" v-model.trim="phone" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <i class="fa-solid fa-lock mx-2"></i>
                        <label for="password">كلمة السر</label>
                        <input type="text" class="form-control mt-2" v-model.trim="password" />
                    </div>
                    <div class="col-md-6 mb-4">
                        <i class="fa-solid fa-lock mx-2"></i>
                        <label for="password">تأكيد كلمة السر</label>
                        <input type="text" class="form-control mt-2" v-model.trim="confirmPassword" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-4">
                        <label for="email">البريد اللإلكتروني</label>
                        <input type="text" class="form-control mt-2" />
                    </div>
                </div>

                <div class="row text-center">
                    <span> قراءة الاحكام والشروط </span>
                    <div class="border"></div>
                    <div class="form-check">
                        <label class="checkbox-label">الموافقة علي الشروط والاحكام
                            <input type="checkbox" name="mycheckbox" class="mycheckbox">
                        </label>
                    </div>
                    <router-link to="/business">
                        <button type="submit" class="btn btn-primary mt-3">إنشاء</button>
                    </router-link>
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
import authService from '@/services/AuthService';


export default {
    name: 'App',
    components: {
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            phone: '',
            confirmPassword: '',
            registrationSuccess: false,
        }
    },
    methods: {
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

h1 {
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
    /* width: 450px;*/
    height: 55px;
    border-radius: 20px;
}

label {
    /* background-color: #000000; */
    text-align: left;
    color: #259F5A;
}

.fa-solid {
    color: #259F5A;
    font-size: 25px;
    font-weight: 700;
}

.accept {
    color: #303030;
}

.btn {
    width: 200px;
    background-color: #259F5A;
    height: 55px;
    border-radius: 20px;
    border: #259F5A;
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
    color: #259F5A;
}

.border {
    width: 25%;
    height: 5px;
    background-color: #259F5A;
    margin: 15px auto;
}

.checkbox-label {
    display: inline-flex;
    align-items: center;
}
.checkbox-label .mycheckbox{
    background-color: #259F5A;
}
</style>
