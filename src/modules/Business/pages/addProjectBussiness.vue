<template>
  <div>
  <BusinessHeader />
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mx-auto mt-5 main-section">
      <div class="col-md-2 col-sm-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="50" fill="#259F5A"/>
          <path d="M31.5 54.5L46.2122 65L65 35" stroke="white" stroke-width="5"/>
        </svg>
        <p class="project-draft">مسودة المشروع</p>
      </div>
      <hr class="col-md-6 col-sm-5 my-4 custom-hr">
      <div class="col-md-2 col-sm-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="50" fill="#656565" />
        </svg>
        <p style="color:#656565;"> إرسال للمراجعة</p>
      </div>
    </div>
    <p class="projecttitle">تفاصيل المشروع</p>
    <form action="" class="add-project">
      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control  project-details" 
          placeholder="المشروع عبارة عن مسودة يجب إرساله للمراجعة بعد الانتهاء." disabled />
        </div>  
      </div>
      <div class="row">
        <div class="col-12">
        <p>اسم المشروع</p>
        <input type="text" class="form-control" v-model="form.project_title" />
      </div>
      </div>
      <div class="row ">
         <div class="col-12">
        <p>وصف المشروع (مثال: عدد غرف النوم، والفراغات، ومكونات المشروع )</p>
        <textarea class="form-control" style="height: 6.5rem" v-model="form.project_details"
          placeholder="ارغب في تصميم فيلا دوبليكس مكونه من 4 غرف نوم و 5 حمامات والمرافق الخدمية لها..."></textarea>
        <p class="descriptionfortextarea">عدد الحروف لا يقل عن 150 (95/150)</p>
         </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>مساحة المشروع</p>
          <input type="number" class="form-control text-start" min="0" placeholder="م^2" v-model="form.space" />
        </div>
        <div class="col-12">
          <p>تصنيف المشروع</p>
          <select class="form-select  custom-select p-1" id="floatingSelect" v-model="form.service_category">
            <option selected></option>
            <option value="1">تجاري</option>
            <option value="2">سكني</option>
            <option value="3">صناعي</option>
          </select>
        </div>
      </div>
      
      <div class="row">
        <div class="col-12">
        <p>تاريخ نهاية طرح المشروع</p>
        <select class="form-select custom-select  px-0" id="floatingSelect" v-model="form.last_offers_date">
          <option selected></option>
          <option value="1">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
          <option value="2">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
        </select>
        <p class="descriptionfortextarea">لن يتم استقبال عروض اسعار جديدة ولن يظهر المشروع في منصة المشاريع بعد انتهاء طرح
          المشروع </p>
        </div>  
      </div>

      <div class="row">
        
        <div class="col-md-6 col-sm-12">
          <p>تاريخ ترسيخ نهاية المشروع</p>
          <input type="number"  class="form-control" min="0" v-model="form.project_days_limit" />
        </div>

        <div class="col-md-6 col-sm-12">
          <p>المدة المقترحة لأنهاء الاعمال المطلوبة</p>
          <input type="number" placeholder="عدد الايام" class="form-control" min="0" v-model="form.project_days_limit" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>المنطقة</p>
          <select class="form-select" id="floatingSelect" v-model="form.area">
            <option selected></option>
            <option value="1">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
            <option value="2">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
          </select>
        </div>

        <div class="col-md-6 col-sm-12">
          <p>المدينة</p>
          <select class="form-select" id="floatingSelect" v-model="form.city">
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

      <div class="row my-5 justify-content-center text-center">
        <div class="col">
            <p class="text-center">صورة من صك الملكية</p>
            <label for="propertyDoc" class="file-label">
                <img src="../../../assets/3322766-2001.png" class="upload-image">
            </label>
            <input type="file" id="propertyDoc" class="file-input" style="display: none;">
        </div>
        <div class="col">
            <p class="text-center"> صورة من هوية المالك <span class="text-danger">*</span></p>
            <label for="ownerIdDoc" class="file-label">
                <img src="../../../assets/3322766-2001.png" class="upload-image">
            </label>
            <input type="file" id="ownerIdDoc" class="file-input" style="display: none;">
        </div>
        <div class="col">
            <p class="text-center">مستندات اخري داعمة </p>
            <label for="otherDocs" class="file-label">
                <img src="../../../assets/3322766-2001.png" class="upload-image">
            </label>
            <input type="file" id="otherDocs" class="file-input" style="display: none;">
        </div>
    </div>
      
      <div class="row d-flex justify-content-between">
        <div class="col-6">
          <span>طلب جداول الكميات</span>
        </div>
        <div class="col-6">
          <input class="form-check-input " type="checkbox" value="" v-model="form.request_qty_tables">
        </div>
      </div>

      <div class="row d-flex justify-content-between">
        <div class="col-6">
          <span> عرض المشروع علي مهندسين ذو تصنيف معين</span>
        </div>
        <div class="col-6">
          <input class="form-check-input " type="checkbox" value="" v-model="form.request_qty_tables">
        </div>
      </div>

      <div class="row">
        <button class="btn btn-success">طرح المشروع </button>
      </div>
    </form>
  </div>
</div> 
</template>

<script>
import { ref, onMounted } from "vue";
// import memberService from "../services/memberService";
import BusinessHeader from "../components/BusinessHeader.vue"

export default {
  components: {
    BusinessHeader
  },
  setup() {
    const form = ref({
      project_title: "",
      project_details: "",
      space: "",
      service_category: "",
      area: "",
      city: "",
      offer_choosing_date: "",
      project_days_limit: "",
      last_offers_date: "",
      request_qty_tables: ref(false),
      request_engs: "",
      delivery_date: "",
      title_deed: "",
      owner_id: "",
      other_files: ref([]),
    });

    const addproject = () => {
      // memberService.addproject(form.value).then()
    }
    onMounted(() => {
      addproject();
    })
    return {
      form
    }
  }

};
</script>

<style scoped>
* {
  direction: rtl;
}

.main-section {
  width: 80%;
  margin: auto;
}

.main-section p {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin-left: 40px;
}

.custom-hr {
  margin-left: 1.25rem;
  border: none;
  height: 5px;
  background-color: #656565;
}

form {
  width: 80%;
  margin: auto;
}

form .form-control {
  margin-right: 0px;
  
}

form .form-select {
  background-color: aqua;
}

.custom-select {
  text-align: left;
}

/* Style the selected option */
/* Style the selected option */
select#floatingSelect option:checked {
  background-color: #259F5A;
  color: #fff;
}


/* Style the options on hover */
.custom-select:hover option:hover {
  background-color: #259F5A;
  color: #fff;
}

/* Style the dropdown arrow (optional) */
select#floatingSelect {
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 30px;
  /* Adjust based on your arrow icon width */
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
  padding: -px 20px;
}

.form-control.project-details::placeholder {
  color: rgba(37, 159, 90, 0.70);
}


.descriptionfortextarea {
  color: #259F5A;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
}

.form-control::-webkit-selection {
  background-color: #259F5A;
  color: white;
}

/* For Firefox */
.form-control::selection {
  background-color: #259F5A;
  color: white;
}

/* For Internet Explorer */
.form-control::-ms-value {
  background-color: #259F5A;
  color: white;
}

.row {
  margin: 10px 0px;
}

.add-project p {
  text-align: right;
}

.add-project {
  padding: 10px;

}

.form-check-input {
  background-color: #259F5A;
}

.form-check-input:checked {
  border-color: #259F5A;
  background-color: #259F5A;
}

.project-draft {
  color: #259F5A;
}</style>
