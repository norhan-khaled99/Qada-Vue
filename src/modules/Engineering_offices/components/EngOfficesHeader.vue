<template>
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
              <router-link class="nav-link qada" to="/EngineeringOffices">قد<span>ة</span></router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link class="nav-link ra2esia" to="/EngineeringOffices"> الرئيسية</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/EngineeringOffices/aboutus" class="nav-link">من نحن؟</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link class="nav-link" router-link to="/EngineeringOffices/addproject">لوحة التحكم</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/EngineeringOffices/faq" class="nav-link">الاسئلة المتكررة</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/EngineeringOffices/termsandconditions" class="nav-link">الشروط والاحكام</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/EngineeringOffices/successPartners" class="nav-link">شركاء النجاح</router-link>
            </li>
            <li class="nav-item mx-lg-2">
              <router-link to="/EngineeringOffices/contactus" class="nav-link">إتصل بنا</router-link>
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
  /* background: linear-gradient(95.07deg, rgba(42, 102, 93, 0.8) 56.22%, rgba(48, 255, 81, 0.48) 157.23%);
  margin-bottom: 20px;
  height: 380px; */
  ;
}

.nav-link:hover {
  color: #fff;
}

.content {
  height: 50vh;
  width: 100%;
  background: linear-gradient(95.07deg, rgba(74, 78, 83, 1) , rgba(0, 0, 0, 1) );
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
  color: #fff;
  /* color: rgba(0, 0, 0, 0.80); */
  font-weight: 500;
  font-size: 18px;
}

li .qada {
  font-size: 35px;
}

.fa-bell {
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.80);
  color: #fff;
}

.create {
  background-color: #fff;
  color: #4A4E53;
  border-color: #4A4E53;
  border-radius: 1rem;
  width: 150px;
  height: 40px;
  color: linear-gradient(121.09deg, #59467C 30.12%, #000000 173.77%);
}

.login {
  /* background-color: #2A665D; */
  color: #4A4E53;
  /* color: linear-gradient(121.09deg, #59467C 30.12%, #000000 173.77%); */
  background-color: #fff;
  width: 150px;
  height: 40px;
  border-radius: 1rem;
  border-color: #4A4E53;
}

a {
  text-decoration: none;
}

li .ra2esia {
  color: #FFFFFF;
  text-decoration-line: underline;
}

li span {
  color: #4A4E53;
}

@media (max-width: 576px) {
  .artcl {
    left: 0;
  }
}
</style>
