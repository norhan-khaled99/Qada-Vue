<!-- eslint-disable no-undef -->
<template>
  <div class="container">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" @click="showModal">
      test button
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="demoModal"
      tabindex="-1"
      aria-labelledby="demoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width:800px;">
        <div class="modal-content" >
          <div class="modal-header">
            <h5 class="modal-title">اضافة تعديل</h5>
            <button
              type="button"
              class="btn-close custom-close-button"
              style="color: #48847b"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
                <div class="form-floating ">
                    <textarea class="form-control" placeholder="" id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2"></label>
                  </div>
            </div>
           </div>
          <div class="modal-footer d-flex justify-content-around">
            <button type="button" class="footer-button">اضف تعديل</button>
            <button type="button" class="footer-button">اضافة مرفقات</button>
            <button type="button" class="footer-button">
              استعراض المرفقات
            </button>
            <span>
            <button type="button" class="cancel-button">الغاء</button>
            <span class="footer-text">عدد التعديلات للمرحلة: 2/5</span>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const modal = ref(null);

onMounted(() => {
  // eslint-disable-next-line no-undef
  modal.value = new bootstrap.Modal(document.getElementById("demoModal"));
});

const showModal = () => {
  modal.value.show();
  setTimeout(() => {
    modal.value.hide();
  }, 10000);
};
</script>

<style scoped>
* {
  direction: rtl;
}
.modal-header {
  border-bottom: 1px solid #48847b;
}

.modal-dialog {
  border-radius: 6px;
  border: 3px solid #0c483f;
  background: #f2f2f2;
  box-shadow: 5px 4px 15px 0px rgba(0, 0, 0, 0.1);
}
.blur-background {
  filter: blur(5px);
  /* You can adjust the blur intensity as needed */
}

.test-5 {
  background-color: #0f9678;
}

.modal-text {
  color: var(--BLUE20, #69708d);
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.accepted-btn {
  padding: 10px 30px;
  background-color: #48847b;
  border: none;
  border-radius: 5px;
}
.custom-close-button {
  color: #48847b;
}

.footer-button {
  border-radius: 5px;
  background: #48847b;
}

.cancel-button {
  border-radius: 5px;
  border: 2px solid #48847b;
}
.footer-text{
color: #0C483F;
text-align: right;
font-family: Cairo;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
</style>
