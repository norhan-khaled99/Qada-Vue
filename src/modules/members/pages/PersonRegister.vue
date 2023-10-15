<template>
  <div class="container">
    <div class="row">
      <div class="header">
        <div> إنشاء حساب </div>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="col-md-6 mb-4">
          <img src="../../../assets/Vector.png" alt="">
          <label  for="name">اسم المستخدم</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col-md-6 mb-4">
          <img src="../../../assets/bxs_phone.png" alt="">
          <label for="phone">رقم الهاتف</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <img src="../../../assets/passwd.png" alt="">
          <label for="password">كلمة السر</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col-md-6 mb-4">
          <img src="../../../assets/passwd.png" alt="">
          <label for="password">تأكيد كلمة السر</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <label for="email">البريد اللإلكتروني</label>
          <input type="text" class="form-control" />
        </div>

      </div>
      <div class="row">
        <span> قراءة الاحكام والشروط </span>
        <div class="form-check">
          <!-- <input class="form-check-input" type="checkbox"> -->
          <label class="form-check-label">الموافقة علي الشروط والأحكام</label>
        </div>
      </div>
              <button type="button" class="btn btn-primary">إنشاء</button>
    </form>
    <hr>
    <p class="p1" > لديك حساب بالفعل ؟</p>
    <p class="p2"> سجل دخولك من هنا </p>
  </div>
</template>

<script>
export default {};
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
