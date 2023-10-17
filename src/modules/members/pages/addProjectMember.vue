<template>
  <div class="container">
    <div class="row d-flex justify-content-between align-items-center mt-5">
      <div class="col-md-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#48847B"/>
        <path d="M31.5 54.5L46.2122 65L65 35" stroke="white" stroke-width="5"/>
      </svg>
      <p>مسودة المشروع</p>
      </div>

      <hr class="col-md-7  my-4 custom-hr">

       <div class="col-md-2">
       <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#656565"/>
      </svg>
      <p > إرسال للمراجعة</p>
      </div>
    </div>

    <p class="projecttitle">تفاصيل المشروع</p>

    <form action="" class="add-project">
      <div class="row">
        <input
          type="text"
          class="form-control  project-details"
          placeholder="المشروع عبارة عن مسودة يجب إرساله للمراجعة بعد الانتهاء."
        />
      </div>
      <div class="row">
        <p>اسم المشروع</p>
        <input type="text" class="form-control" />
      </div>
      <div class="row ">
        <p>وصف المشروع (مثال: عدد غرف النوم، والفراغات، ومكونات المشروع )</p>
        <textarea
          class="form-control"
          style="height: 100px"
          placeholder="ارغب في تصميم فيلا دوبليكس مكونه من 4 غرف نوم و 5 حمامات والمرافق الخدمية لها..."
        ></textarea>
        <p class="descriptionfortextarea">عدد الحروف لا يقل عن 150 (95/150)</p>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>مساحة المشروع</p>
          <input type="number" class="form-control text-start" min="0" placeholder="م^2"  />
        </div>
        <div class="col-md-6 col-sm-12">
          <p>تصنيف المشروع</p>
          <select class="form-control custom-select" id="floatingSelect">
            <option selected></option>
            <option value="1">تجاري</option>
            <option value="2">سكني</option>
            <option value="3">صناعي</option>
          </select>
        </div>
      </div>
      <div class="row">
        <p>الخدمة الإلكترونية المطلوبة</p>
        <select class="form-control" id="floatingSelect">
          <option selected></option>
          <option value="1">مراجعة و إعتماد المخططات لإصدار التراخيص</option>
          <option value="2">تصميم هندسي بغرض إستخراج رخصة بناء</option>
          <option value="3">تصميم داخلي</option>
          <option value="4">تصميم حدائق</option>
          <option value="5">
            تصميم هندسي بغرض إستخراج رخصة تصحيح وضع مبني قائم
          </option>
          <option value="6">تصميم هندسي بغرض إستخراج رخصة ترميم</option>
        </select>
      </div>
      <div class="row">
        <p>تاريخ نهاية طرح المشروع</p>
        <select class="form-control" id="floatingSelect">
          <option selected></option>
          <option value="1">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
          <option value="2">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
        </select>
        <p class="descriptionfortextarea">لن يتم استقبال عروض  اسعار جديدة ولن يظهر المشروع  في منصة  المشاريع  بعد انتهاء طرح المشروع </p>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>المنطقة</p>
          <select class="form-control" id="floatingSelect">
            <option selected></option>
            <option value="1">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
            <option value="2">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
          </select>
        </div>
        <div class="col-md-6 col-sm-12">
          <p>المدة المقترحة لأنهاء الاعمال المطلوبة</p>
          <input type="number" placeholder="عدد الايام" class="form-control" min="0" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>اختيار تصنيف المكاتب الهندسية</p>
          <select class="form-control" id="floatingSelect">
            <option selected></option>
            <option value="1">تصنيف درجة 1 الي 3 </option>
            <option value="2">تصنيف درجة 3 الي 6 </option>
          </select>
          <p class="descriptionfortextarea">تختلف الاسعار نسبيا مع اختيار التصنيف (حيث انه التصنيف خو الاعلي سعرا) </p>
        </div>
        <div class="col-md-6 col-sm-12">
          <p>المدينة</p>
          <select class="form-control" id="floatingSelect">
            <option selected></option>
            <option value="1">الرياض</option>
            <option value="2">مكة المكرمة</option>
            <option value="3">المدينة المنورة</option>
            <option value="4">جدة</option>
            <option value="5">الطائف</option>
            <option value="6">الدمام</option>
          </select>
        </div>
      </div>
      <div class="row my-5 justify-content-center  text-center">
         <div class="col-3">
          <p class="text-center">صورة من صك الملكية</p>
          <img src="../../../assets/3322766-2001.png" >
         </div> 
         <div class="col-3"> 
          <p class="text-center"> صورة من هوية المالك <span class="text-danger">*</span></p>
          <img src="../../../assets/3322766-2001.png">
         </div> 
         <div class="col-3">
          <p class="text-center">مستندات اخري داعمة </p>
          <img src="../../../assets/3322766-2001.png">
         </div> 
      </div>

      <div class="row d-flex justify-content-between">
        <div class="col-6">
        <span >طلب جداول الكميات</span>
       </div>
       <div class="col-6">
        <input class="form-check-input " type="checkbox" value="" >
      </div>
      </div>

      <div class="row">
        <button class="btn btn-success">طرح المشروع </button>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  direction: rtl;
}
.custom-hr {
  margin-left: 1.25rem;
  border: none;
  height:5px; /* Adjust thickness as needed */
  background-color: #656565; /* Change color to the desired background color */
}


/* Style the selected option */
/* Style the selected option */
select#floatingSelect option:checked {
  background-color: #0C483F;
  color: #fff;
}


/* Style the options on hover */
.custom-select:hover option:hover {
  background-color: #0C483F;
  color: #fff;
}

/* Style the dropdown arrow (optional) */
select#floatingSelect {
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 30px; /* Adjust based on your arrow icon width */
}


.projecttitle {
  color: #000;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
}
.form-control {
  border: 1.5px solid #656565;
  background: #fff;
}
.form-control.project-details::placeholder {
  color: rgba(84, 132, 125, 0.7);
}


.descriptionfortextarea {
  color: #259f5a;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
}

.form-control::-webkit-selection {
  background-color: #0C483F;
  color: white;
}

/* For Firefox */
.form-control::selection {
  background-color: #0C483F;
  color: white;
}

/* For Internet Explorer */
.form-control::-ms-value {
  background-color: #0C483F;
  color: white;
}
.row {
  margin: 10px 0px;
}

.add-project p {
  text-align: right;
}

.form-check-input {
  background-color: #0C483F;
}
.form-check-input:checked {
  border-color: #0C483F;
  background-color: #0C483F;

}
</style>
