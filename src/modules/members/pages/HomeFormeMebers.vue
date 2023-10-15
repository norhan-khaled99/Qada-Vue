<template>
  <div class="container">
    <h1>home for member</h1>
    <div class="row">
      <div class="header">
        <div>جميع مشاريعك الهندسية تحت</div>
        <span class="header"> منصة واحدة</span>
      </div>
    </div>
    <div class="row"></div>
    <div class="row-col-6 my-5 add-project">
      <button class="btn  add-project-text">
        اطرح مشروعك الآن
      </button>
    </div>
    <div class="row my-5">
      <p class="seconed-subtitle">كيف تعمل منصتنا؟</p>
    </div>
    <div class="row steps">
      <div class="col">
        <img src="../../../assets/uploadproject.png" />
        <div class="first-step">
          <div>1 . اطرح مشروعك</div>
          <div>استقبل عروضك</div>
        </div>
      </div>
      <div class="col">
        <img src="../../../assets/contract.png"  />

        <div class="second-step">
          <div>2 . تعاقد وتابع</div>
          <div>مشروعك أونلاين</div>
        </div>
      </div>
      <div class="col">
        <img src="../../../assets/Stars.png"  />
        <div class="third-step">
          <div>3 . إستلم مشروعك وقيم</div>
          <div>مقدم الخدمة أونلاين</div>
        </div>
      </div>

      <div class="row d-flex justify-content-between my-5 ">
        <div class="col-10">
          <p class="text-end">اخر المشاريع المضافة</p>
        </div>
        <div class="col-2 add-new-project">
          <button class="btn ">اضف مشروعك</button>
        </div>
      </div>

      <div class="row">
        <div class="card">
          <div class="card-body">
            This is some text within a card body.
          </div>
        </div>
      </div>
      
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
.header {
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600px;
}
.header span {
  color: #259f5a;
  margin: 0;
  padding: 0;
}
.add-project button {
  border-radius: 20px;
  border: 3px solid #272627;
  padding: 10px 50px;
}
.add-project button :hover {
  transition: all 300ms ease-out;
  border-radius: 20px;
  border: 3px solid #272627;
  padding: 10px 50px;
  background-color: white;
}
.add-project-text {
  color: #272627;
  font-size: 20px;
  text-align: center;
}

.seconed-subtitle {
  color: #259f5a;
  font-size: 2.2rem;
  font-weight: 900;
  text-decoration: underline;
  text-decoration-color: #ffb800;
}
.steps img{

}
.first-step {
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #0c483f;
  background: #fff;
  box-shadow: 6px 8px #0c483f;
}

.second-step {
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #FFB800;
  background: #fff;
  box-shadow: 6px 8px #FFB800;
}

.third-step{
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #7159A5;
  background: #fff;
  box-shadow: 6px 8px #7159A5;
}

.add-new-project{
  border-radius: 20px;
background: #259F5A;
}
.add-new-project button{
  color: #FFF;
  font-size: 1.25rem;
}

</style>
