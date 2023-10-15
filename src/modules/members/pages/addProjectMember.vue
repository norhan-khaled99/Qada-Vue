<template>
  <div class="container">
    <p class="projecttitle">تفاصيل المشروع</p>
    <form action="" class="add-project">
      <div class="row">
        <input
          type="text"
          class="form-control project-details"
          placeholder="المشروع عبارة عن مسودة يجب إرساله للمراجعة بعد الانتهاء."
        />
      </div>
      <div class="row">
        <p>اسم المشروع</p>
        <input type="text" class="form-control" />
      </div>
      <div class="row col-12">
        <p>وصف المشروع (مثال: عدد غرف النوم، والفراغات، ومكونات المشروع )</p>
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          style="height: 100px"
        ></textarea>
        <!-- <label for="floatingTextarea2">Comments</label> -->
        <p class="descriptionfortextarea">عدد الحروف لا يقل عن 150 (95/150)</p>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>مساحة المشروع</p>
          <input type="number" class="form-control" min="0" />
        </div>
        <div class="col-md-6 col-sm-12">
          <p>تصنيف المشروع</p>
          <select class="form-select" id="floatingSelect">
            <option selected></option>
            <option value="1">تجاري</option>
            <option value="2">سكني</option>
            <option value="3">صناعي</option>
          </select>
          <!-- <label for="floatingSelect">Works with selects</label> -->
        </div>
      </div>
      <div class="row">
        <p>الخدمة الإلكترونية المطلوبة</p>
        <select class="form-select" id="floatingSelect">
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
        <select class="form-select" id="floatingSelect">
          <option selected></option>
          <option value="1">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
          <option value="2">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
        </select>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>المنطقة</p>
          <select class="form-select" id="floatingSelect">
            <option selected>Open this select menu</option>
            <option value="1">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
            <option value="2">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
          </select>
        </div>
        <div class="col-md-6 col-sm-12">
          <p>المدة المقترحة لأنهاء الاعمال المطلوبة</p>
          <input type="number" class="form-control" min="0" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>المنطقة</p>
          <select class="form-select" id="floatingSelect">
            <option selected></option>
            <option value="1">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
            <option value="2">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
          </select>
        </div>
        <div class="col-md-6 col-sm-12">
          <p>المدة المقترحة لأنهاء الاعمال المطلوبة</p>
          <input type="number" class="form-control" min="0" />
        </div>
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
.row {
  margin: 10px 0px;
}
.add-project p {
  text-align: right;
}
</style>
