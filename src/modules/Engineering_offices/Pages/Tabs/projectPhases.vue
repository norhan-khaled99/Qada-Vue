<template>
  <div class="container">
    <div class="my-5">
      <div class="card col-md-7 col-sm-12 text-center">
        <div class="card-body">
          <span class="card-content ">تنويه</span>: حفاظًا علي الجدول الزمني لمشروعك يلزم إرسال طلب بدء أعمال للمكتب
          الهندسي.
        </div>
      </div>

      <div class="header">
        المراحل المستلمة
      </div>

      <div class="card col-lg-6 col-sm-12 my-5 ">
        <div class="d-flex justify-content-between align-items-baseline mt-2 ">
          <span class="first-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
              <circle cx="15" cy="15.7217" r="15" fill="#FF5555" />
              <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="white">5</text>
            </svg>
          </span>
          <div class=" ">
            <p class="me-3 first-stage-text">المرحلةالاولي</p>
          </div>
          <div class=" ">
            <button class="first-stage mx-2" @click="showModal">طلب تعديل</button>
            <modal-component v-if="isModalVisible" @close="closeModal"></modal-component>

            <button class="recieve-stage mx-2">استلام المرحلة</button>
          </div>
        </div>
        <div class="seperator"></div>
        <div class="d-flex justify-content-between align-items-baseline my-2 lastCard">
          <div class="span-stage">
            <span>عدد التعديلات: <span class="numbers"> 2/5 </span></span>
            <span class="fasel"> | </span>
            <span>عدد ايام المرحلة: <span class="numbers"> (10) يوم </span></span>
          </div>
          <div class="button-stage">
            <button class=" request-start-working mx-2">طلب بدءالاعمال</button>
            <button class="edit-button mx-2">إضافة امر تغيير</button>
          </div>
        </div>
      </div>

      <div class="card col-lg-6 col-sm-12 my-5 ">
          <div class="d-flex justify-content-between align-items-baseline mt-2 ">
            <span class="first-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                <circle cx="15" cy="15.7217" r="15" fill="#FF5555" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="white">5</text>
              </svg>
            </span>
            <div class=" ">
              <p class="me-3">المرحلةالاولي</p>
            </div>
            <div class=" ">
              <button class="first-stage mx-2">طلب تعديل</button>
              <button class="recieve-stage mx-2">استلام المرحلة</button>
            </div>
          </div>
          <div class="seperator"></div>
          <div class="d-flex justify-content-between align-items-baseline my-2 lastCard">
            <div class="span-stage">
              <span>عدد التعديلات: <span class="numbers"> 2/5 </span></span>
              <span class="fasel"> | </span>
              <span>عدد ايام المرحلة: <span class="numbers"> (10) يوم </span></span>
            </div>
            <div class="button-stage">
              <button class=" request-start-working mx-2">طلب بدءالاعمال</button>
              <button class="edit-button mx-2">توقيع غرامة تأخير</button>
            </div>
          </div>
        </div>

        <div class="card col-lg-6 col-sm-12 my-5 ">
          <div class="d-flex justify-content-between align-items-baseline mt-2 ">
            <span class="first-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                <circle cx="15" cy="15.7217" r="15" fill="#FF5555" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="white">5</text>
              </svg>
            </span>
            <div class=" ">
              <p class="me-3">المرحلةالاولي</p>
            </div>
            <div class=" ">
              <button class="first-stage mx-2">طلب تعديل</button>
              <button class="recieve-stage mx-2">استلام المرحلة</button>
            </div>
          </div>
          <div class="seperator"></div>
          <div class="d-flex justify-content-between align-items-baseline my-2 lastCard">
            <div class="span-stage">
              <span>عدد التعديلات: <span class="numbers"> 2/5 </span></span>
              <span class="fasel"> | </span>
              <span>عدد ايام المرحلة: <span class="numbers"> (10) يوم </span></span>
            </div>
            <div class="button-stage">
              <button class=" request-start-working mx-2">طلب بدءالاعمال</button>
              <button class="edit-button mx-2">توقيع غرامة تأخير</button>
            </div>
          </div>
        </div>

        <div class="card col-lg-6 col-sm-12 my-5 ">
          <div class="d-flex justify-content-between align-items-baseline mt-2 ">
            <span class="first-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                <circle cx="15" cy="15.7217" r="15" fill="#FF5555" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="white">5</text>
              </svg>
            </span>
            <div class=" ">
              <p class="me-3">المرحلةالاولي</p>
            </div>
            <div class=" ">
              <button class="first-stage mx-2">طلب تعديل</button>
              <button class="recieve-stage mx-2">استلام المرحلة</button>
            </div>
          </div>
          <div class="seperator"></div>
          <div class="d-flex justify-content-between align-items-baseline my-2 lastCard">
            <div class="span-stage">
              <span>عدد التعديلات: <span class="numbers"> 2/5 </span></span>
              <span class="fasel"> | </span>
              <span>عدد ايام المرحلة: <span class="numbers"> (10) يوم </span></span>
            </div>
            <div class="button-stage">
              <button class=" request-start-working mx-2">طلب بدءالاعمال</button>
              <button class="edit-button mx-2">توقيع غرامة تأخير</button>
            </div>
          </div>
        </div>

      <!-- start second card -->
      <div class="card col-md-6 col-sm-12 my-3">
        <div class="d-flex justify-content-between p-2">
          <span class="second-card-title">مرحلة الاستفسارات</span>
          <div class="stars ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
          </div>
        </div>
        <div class="d-flex justify-content-between p-2">
          <span class="rate">14/7/2023</span>
          <span class="rate">اكثر من رائع، ممتاز جدًا. سعدت بالتعامل معكم</span>
        </div>
      </div>

      <div class="card col-md-6 col-sm-12 my-3">
        <div class="d-flex justify-content-between p-2">
          <span class="second-card-title">مرحلة الاستفسارات</span>
          <div class="stars ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
          </div>
        </div>
        <div class="d-flex justify-content-between p-2">
          <span class="rate">14/7/2023</span>
          <span class="rate">اكثر من رائع، ممتاز جدًا. سعدت بالتعامل معكم</span>
        </div>
      </div>



      <div class="card col-md-6 col-sm-12 my-3">
        <div class="d-flex justify-content-between p-2">
          <span class="second-card-title">مرحلة الاستفسارات</span>
          <div class="stars ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
          </div>
        </div>
        <div class="d-flex justify-content-between p-2">
          <span class="rate">14/7/2023</span>
          <span class="rate">اكثر من رائع، ممتاز جدًا. سعدت بالتعامل معكم</span>
        </div>
      </div>



      <div class="card col-md-6 col-sm-12 my-3">
        <div class="d-flex justify-content-between p-2">
          <span class="second-card-title">مرحلة الاستفسارات</span>
          <div class="stars ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5.825 22.7217L8.15 15.1217L2 10.7217H9.6L12 2.72168L14.4 10.7217H22L15.85 15.1217L18.175 22.7217L12 18.0217L5.825 22.7217Z" fill="#007060"/>
            </svg>
          </div>
        </div>
        <div class="d-flex justify-content-between p-2">
          <span class="rate">14/7/2023</span>
          <span class="rate">اكثر من رائع، ممتاز جدًا. سعدت بالتعامل معكم</span>
        </div>
      </div>

      <!-- sction of modal -->
       
    </div>
  </div>
</template>

<script>
import ModalComponent from "../../components/projectPhaseModal";
export default {
  components: {
    ModalComponent
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<style  scoped>
* {
  direction: rtl;
}

.card {
  position: relative;
  margin: auto;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.70);
}

.first-svg {
  position: absolute;
  top: -10px;
  right: -15px;
}

button {
  min-width: 9rem;
  border: none;
}

.card-body {
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.card-title {
  color: #336059;
  text-align: right;
  font-family: Cairo;
  font-size: 17px;
  font-weight: 600;
  white-space: nowrap;
}

.card-content {
  color: #007060;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
}

.header {
  color: #007060;
  font-family: Cairo;
  font-size: 25px;
  font-weight: 700;
  margin: 1rem 0;
  text-align: center;
}

.first-stage-text{
  color: #007060;
}
.first-stage {
  border-radius: 5px;
  border: 2px solid #4A4E53;
  color: #4A4E53;
  padding: 5px 25px;
  background-color: #fff;
}

.recieve-stage {
  border-radius: 5px;
  background: #007060;
  color: #FFFFFF;
  padding: 5px 25px;
  border: 2px solid #007060;
}

.seperator {
  border-bottom: 1px solid #007060;
  width: 99.9%;
}

/* .button-stage button {
  margin: 0rem 0.25rem;
} */

.numbers,
.fasel {
  color: #0C483F;
  font-family: Cairo;
  font-size: 17px;
  font-weight: 700;
}

.edit-button {
  border-radius: 5px;
  background: #4A4E53;
  color: #FFFFFF;
  padding: 5px 15px;
}

.request-start-working {
  border-radius: 5px;
  background: #007060;
  color: #FFFFFF;
  padding: 5px 15px;
}

.second-card-title {
  color: #007060;
  text-align: right;
  font-family: Cairo;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.rate {
  color: #747474;
  text-align: right;
  font-family: Cairo;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.stars svg {
  margin: 0px 5px;
}

@media (max-width: 576px) {
  .lastCard span {
    font-size: 14px;
  }

  .span-stage {
    width: 160px;
  }

  .lastCard button {
    font-size: 14px;
  }
}</style>