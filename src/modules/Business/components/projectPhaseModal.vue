<template>
  <div class="container">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" @click="showModal">
      test button
    </button>

    <!-- Modal -->
    <div class="modal fade " id="demoModal" tabindex="-1" aria-labelledby="demoModalLabel" aria-hidden="true">
      <div class="modal-dialog ">
        <div class="modal-content rounded-5 ">
          <h5 class="modal-title  text-center border-end">طلب تعديل</h5>

          <div class="modal-body d-flex flex-column align-items-center ">
            <div class="modal-text my-3">
              نأمل مراجعة المرفقات وفي حال وجود اي ملاحظات سنكون سعداء بتلبية طلبكم
            </div>
            <div class="card border border-dark rounded-3">
              <div class="row my-3">
                <div class="col-4 card-title">
                  اسم المرفق
                </div>
                <div class="col-4 card-title">
                  حجم الملف
                </div>
                <div class="col-4 card-title">
                  تاريخ اضافة المرفق
                </div>
              </div>

              <div class="row my-3">
                <div class="col-4 content-text">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.75 3.75C0.75 2.097 2.097 0.75 3.75 0.75H13.785C14.628 0.75 15.423 1.107 15.9825 1.6965L15.9915 1.707L22.4595 8.76C22.998 9.3345 23.25 10.086 23.25 10.8V26.25C23.25 27.903 21.903 29.25 20.25 29.25H3.75C2.097 29.25 0.75 27.903 0.75 26.25V3.75ZM13.7835 3.75H3.75V26.25H20.25V10.788L13.806 3.7605L13.8015 3.759C13.796 3.75503 13.79 3.75199 13.7835 3.75Z"
                        fill="#48847B" />
                    </svg>
                  </span>
                  عقد عمل .pdf
                </div>
                <div class="col-4 content-text">
                  30MB
                </div>
                <div class="col-4 content-text">
                  11/7/2023
                </div>
              </div>


            </div>

            <div class="text-center">
              اضافة تعديلات
            </div>

            <div class="form-floating col-12">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 6.5 rem"></textarea>
              <label for="floatingTextarea2 text-right">اكتب ملاحظاتك وتعديلات هنا</label>
            </div>
            <div>
              تنويه : مدة المراجعة لا تحتسب من ضمن الجدول الزمني للمشروع لحين
            </div>
            <div>
              قبول المرحلة نهائيًا أو إرسال طلب تعديل للمكتب الهندسي للمرحلة
            </div>
            <div class="fs-4 fw-bold">
              * سيتم إشعار المكتب الهندسي بإستلامكم للمرحلة بشكل آلي *
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-outline-dark">خروج</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { ref, onMounted } from "vue";
  
  const modal = ref(null);
  /* eslint-disable no-undef */
/* eslint-enable no-undef */

  onMounted(() => {
    // eslint-disable-next-line no-undef
    modal.value = new bootstrap.Modal(document.getElementById("demoModal"));
  });
  
  const showModal = () => {
    modal.value.show();
  };
  
//   const hideModal = () => {
//     modal.value.hide();
//   };
  
//   const saveChanges = () => {
//     console.log("Changes saved!");
//   };
  </script>


<style scoped>
.test-5 {
  background-color: #0F9678;
}

.modal-title {
  color: #0F9678;
}

.modal-text {
  color: #FFF;
  text-align: center;
  font-family: Cairo;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  padding-right: 20px;
  padding-left: 20px;
}

.content-text {
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  color: #2A665D;

}

.card-title {
  color: #000;
  text-align: right;
  font-family: Cairo;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  /* 84% */
}

.title {
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
}
</style>