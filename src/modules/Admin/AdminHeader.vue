<template>
  <!-- <img class="navBg-img" src="../assets/bg-color.png" alt="navBg-img"> -->
  <div class="content">
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0 align-items-lg-baseline ">
            <li class="nav-item mx-lg-2">
              <router-link class="nav-link ra2esia " to="/member"> الرئيسية</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/aboutus" class="nav-link">من نحن؟</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link class="nav-link" router-link to="/member/addproject">لوحة التحكم</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/faq" class="nav-link">الاسئلة المتكررة</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/termsandconditions" class="nav-link">الشروط والاحكام</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/successPartners" class="nav-link">شركاء النجاح</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/contactus" class="nav-link">إتصل بنا</router-link>
            </li>
            <button type="button" class="btn  login mx-lg-4">تسجيل دخول</button>
            <button type="button" class="btn   create">إنشاء حساب</button>
            <li class="nav-item mx-lg-5 position-relative">
              <i class="fa-regular fa-bell"></i>
              <span class="position-absolute top-0 start-lg-100  badge rounded-pill bg-danger text-light">
                10
                <span class="visually-hidden">unread messages</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container artcl">
      <p class="text-light">لوحة التحكم</p>
      <h3>الفريق</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  direction: rtl;
}

@import url("https://fonts.googleapis.com/css2?family=Cairo&display=swap");

nav {
  font-family: "Cairo", sans-serif;
  padding: 20px;
  
}

.nav-link:hover {
  color: #fff;
}

.content {
  height: 50vh;
  width: 100%;
  /* background-color: #59467C; */
}

.artcl {
  position: absolute;
  top: 25%;
  left: 8%;
}

.artcl h3 {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
}

p {
  font-size: 20px;
}

.navBg-img {
  width: 100vw;
  object-fit: cover;
}

li a {
  color: #FFFFFFCC;
  /* color: rgba(0, 0, 0, 0.80); */
  font-weight: 500;
  font-size: 18px;
}

li .qada {
  font-size: 35px;
}

.fa-bell {
  /* font-size: 2rem; */
  color: rgba(0, 0, 0, 0.80);
  color: #fff;
}

.create {
  background-color: #fff;
  color: #59467C;
  border-color: #59467C;
  border-radius: 1rem;
  width: 150px;
  height: 40px;
  color: linear-gradient(121.09deg, #59467C 30.12%, #000000 173.77%);
}

.login {
  /* background-color: #2A665D; */
  color: #59467C;
  /* color: linear-gradient(121.09deg, #59467C 30.12%, #000000 173.77%); */
  background-color: #fff;
  width: 150px;
  height: 40px;
  border-radius: 1rem;
  border-color: #59467C;
}

a {
  text-decoration: none;
}

li .ra2esia {
  text-decoration-line: underline;
}

li span {
  color: #48ac9d;
}

/* section{
    width: 100%;
    height: 50vh;
    background: url(../assets/bg-color.png);
    background-size: cover;
    background-position: center;
    top: 0;
  } */
/* .rounded-pill{
  background-color: #FF4B4B;
  color: #fff;
  } */
@media (max-width: 576px) {
  .artcl {
    left: 0;
  }
}</style>
