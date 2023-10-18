<template>
  <!-- <img class="navBg-img" src="../assets/bg-color.png" alt="navBg-img"> -->
  <nav class="navbar navbar-expand-lg  ">
    <div class="container-fluid ">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-baseline">
          
          
          <li class="nav-item mx-lg-2">
            <a class="nav-link qada" href="#">قد<span>ة</span></a>
          </li>
          <li class="nav-item mx-lg-2">
            <a class="nav-link ra2esia" href="#"> الرئيسية</a>
          </li>
          <li class="nav-item mx-lg-2">
            <a class="nav-link" href="#">من نحن؟</a>
          </li>
          <li class="nav-item mx-lg-2">
            <a class="nav-link" href="#">لوحة التحكم</a>
          </li>
          <li class="nav-item mx-lg-2">
            <a class="nav-link" href="#">الاسئلة المتكررة</a>
          </li>
          <li class="nav-item mx-lg-2">
            <a class="nav-link" href="#">الشروط والاحكام</a>
          </li>
          <li class="nav-item mx-lg-2">
            <a class="nav-link" href="#">شركاء النجاح</a>
          </li>
          <li class="nav-item mx-lg-2">
            <a class="nav-link" href="#">إتصل بنا</a>
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

</template>

<script>
export default {};
</script>

<style scoped>
* {
  direction: rtl;
}
@import url("https://fonts.googleapis.com/css2?family=Cairo&display=swap");
  nav{
    font-family: "Cairo", sans-serif;
  }
  .navBg-img{
    width: 100vw;
    object-fit: cover;
  }
  li a{
    color: #000000CC;
    font-weight: 500;
    font-size: 18px;
  }
  li .qada{
      font-size: 35px;
  }
  .fa-bell{
    font-size: 2rem;
  }
  .create{
    background-color: #fff;
    color: #2A665D;
    border-color: #2A665D;
    border-radius: 1rem;
    width: 150px;
    height: 40px;
  }
  .login{
    background-color: #2A665D;
    color: #fff;
    width: 150px;
    height: 40px;
    border-radius: 1rem;
    border-color: #2A665D;
  }
  li .ra2esia{
    color: #2A665D;
    text-decoration-line:underline;
  }
  li span{
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
</style>
