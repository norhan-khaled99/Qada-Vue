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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-baseline ">
            <li class="nav-item mx-lg-2">
              <a class="nav-link qada" href="#">قد<span>ة</span></a>
            </li>
            <li class="nav-item mx-lg-2">
              <a class="nav-link ra2esia" href="#"> الرئيسية</a>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/aboutus">
              <a class="nav-link">من نحن؟</a>
              </router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <a class="nav-link" router-link to="/member/addproject">لوحة التحكم</a>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/faq">
              <a class="nav-link" >الاسئلة المتكررة</a>
            </router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/termsandconditions">
              <a class="nav-link">الشروط والاحكام</a>
            </router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="">
              <a class="nav-link">شركاء النجاح</a>
            </router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/contactus">
              <a class="nav-link">إتصل بنا</a>
            </router-link>
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
      <h3>الرئيسية</h3>
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
  /* background: linear-gradient(95.07deg, rgba(42, 102, 93, 0.8) 56.22%, rgba(48, 255, 81, 0.48) 157.23%);
  margin-bottom: 20px;
  height: 380px; */
  ;
}
.nav-link:hover{
  color: #fff;

}

.content {
  height: 50vh;
  width: 100%;
  background: linear-gradient(95.07deg, rgba(42, 102, 93, 0.8) 56.22%, rgba(48, 255, 81, 0.48) 157.23%);
}

/* .artcl {
  position: absolute;
  top: 25%;
  left: 8%;
} */

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
  color: #fff;
  font-weight: 500;
  font-size: 18px;
}

li .qada {
  font-size: 35px;
}

.fa-bell {
  font-size: 2rem;
  color: #fff;
}

.create {
  background-color: #fff;
  color: #2A665D;
  border-color: #2A665D;
  border-radius: 1rem;
  width: 150px;
  height: 40px;
}

.login {
  background-color: #fff;
  color: #2A665D;
  width: 150px;
  height: 40px;
  border-radius: 1rem;
  border-color: #2A665D;
}

li .ra2esia {
  color: #2A665D;
  text-decoration-line: underline;
}

li span {
  color: #2A665D;
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
}
</style>
