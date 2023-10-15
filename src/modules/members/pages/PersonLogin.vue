<template>
  <div class="container w-50 m-auto my-5">
    
    <div class="header">
      <p>تسجيل الدخول للأفراد </p>
    </div>
    <form >
        <img src="../../../assets/Vector.png" alt="">
        <label  for="name">اسم المستخدم</label>
        <input type="text" class="form-control w-75" />
        <img src="../../../assets/passwd.png" alt="">
        <label class="my-3 " for="password">كلمة السر</label>
        <input type="text" class="form-control w-75" />
    </form>
    <!-- <br><br>               
        <button type="button" class="btn"> 
        <img src="../../../assets/Vector2.png" alt="">
          حساب جديد
        </button> -->
  </div>
</template>

<script>
export default {};
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
