<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          
          <button type="button" class="btn  mx-4 create">إنشاء حساب</button>
          <button type="button" class="btn  login">تسجيل دخول</button>
          <li class="nav-item">
            <a class="nav-link" href="#">إتصل بنا</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">شركاء النجاح</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">الشروط والاحكام</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">الاسئلة المتكررة</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">لوحة التحكم</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">من نحن؟</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active page_active" aria-current="page" href="#"> الرئيسية</a>
          </li>
          <li class="nav-item">
          <h1 class="navbar-brand" href="#">قدة</h1>
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
@import url("https://fonts.googleapis.com/css2?family=Cairo&display=swap");
nav{
  font-family: "Cairo", sans-serif;
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
.page_active{
  color: #fff;
}
</style>
