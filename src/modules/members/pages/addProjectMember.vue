<template>
  <div>
    <MemberHeader />
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mx-auto mt-5 main-section">
        <div class="col-md-2 col-sm-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="50" fill="#48847B" />
            <path d="M31.5 54.5L46.2122 65L65 35" stroke="white" stroke-width="5" />
          </svg>
          <p class="project-draft">مسودة المشروع</p>
        </div>
        <hr class="col-md-6 col-sm-5 my-4 custom-hr" />
        <div class="col-md-2 col-sm-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="50" fill="#656565" />
          </svg>
          <p style="color: #656565">إرسال للمراجعة</p>
        </div>
      </div>

      <p class="projecttitle">تفاصيل المشروع</p>
      <form class="add-project" @submit.prevent="addproject()" enctype="multipart/form-data">
        <div class="row">
          <div class="col-12">
            <input type="text" class="form-control project-details"
              placeholder="المشروع عبارة عن مسودة يجب إرساله للمراجعة بعد الانتهاء." />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>اسم المشروع</p>
            <input type="text" class="form-control" v-model="form.project_title" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              وصف المشروع (مثال: عدد غرف النوم، والفراغات، ومكونات المشروع )
            </p>
            <textarea class="form-control" style="height: 100px" v-model="form.project_details"
              placeholder="ارغب في تصميم فيلا دوبليكس مكونه من 4 غرف نوم و 5 حمامات والمرافق الخدمية لها..."></textarea>
            <p class="descriptionfortextarea">
              عدد الحروف لا يقل عن 150 (95/150)
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <p>مساحة المشروع</p>
            <input type="number" class="form-control text-start" min="0" placeholder="م^2" v-model="form.space" />
          </div>
          <div class="col-md-6 col-sm-12">
            <p>تصنيف المشروع</p>
            <select class="form-select custom-select" id="floatingSelect" v-model="form.service_category">
              <option selected></option>
              <option value="1">تجاري</option>
              <option value="2">سكني</option>
              <option value="3">صناعي</option>
            </select>
          </div>
        </div>
        <!-- <div class="row">
          <p>الخدمة الإلكترونية المطلوبة</p>
          <select multiple class="form-select" id="floatingSelect" v-model="form.Electronic_service">
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
        </div> -->
        <div class="row">
          <p>الخدمة الإلكترونية المطلوبة</p>
          <select multiple class="form-select" id="floatingSelect" v-model="form.Electronic_service">
            <option value="1">مراجعة و إعتماد المخططات لإصدار التراخيص</option>
            <option value="2">تصميم هندسي بغرض إستخراج رخصة بناء</option>
            <option value="3">تصميم داخلي</option>
            <option value="4">تصميم حدائق</option>
            <option value="5">تصميم هندسي بغرض إستخراج رخصة تصحيح وضع مبني قائم</option>
            <option value="6">تصميم هندسي بغرض إستخراج رخصة ترميم</option>
          </select>
        </div>
        <div class="row">
          <p>تاريخ نهاية طرح المشروع</p>
          <select class="form-select" id="floatingSelect" v-model="form.last_offers_date">
            <option selected></option>
            <option value="1">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
            <option value="2">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
          </select>
          <p class="descriptionfortextarea">
            لن يتم استقبال عروض اسعار جديدة ولن يظهر المشروع في منصة المشاريع
            بعد انتهاء طرح المشروع
          </p>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <p>المنطقة</p>
            <input class="form-control" id="area" v-model="form.area" />
          </div>
          <div class="col-md-6 col-sm-12">
            <p>المدة المقترحة لأنهاء الاعمال المطلوبة</p>
            <input type="number" placeholder="عدد الايام" class="form-control" min="0"
              v-model="form.project_days_limit" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <p>اختيار تصنيف المكاتب الهندسية</p>
            <select class="form-select" id="floatingSelect" v-model="form.Eng_offices_class">
              <option selected></option>
              <option value="1">تصنيف درجة 1 الي 3</option>
              <option value="2">تصنيف درجة 3 الي 6</option>
            </select>
            <p class="descriptionfortextarea">
              تختلف الاسعار نسبيا مع اختيار التصنيف (حيث انه التصنيف خو الاعلي
              سعرا)
            </p>
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
              <img src="../../../assets/3322766-2001.png" class="upload-image" />
            </label>
            <input type="file" id="propertyDoc" class="file-input" @change="handleFileSelect" style="display: none" />
          </div>
          <div class="col">
            <p class="text-center">
              صورة من هوية المالك <span class="text-danger">*</span>
            </p>
            <label for="ownerIdDoc" class="file-label">
              <img src="../../../assets/3322766-2001.png" class="upload-image" />
            </label>
            <input type="file" id="ownerIdDoc" class="file-input" @change="handleFileSelect" style="display: none" />
          </div>
          <div class="col">
            <p class="text-center">مستندات اخري داعمة</p>
            <label for="otherDocs" class="file-label">
              <img src="../../../assets/3322766-2001.png" class="upload-image" />
            </label>
            <input type="file" id="otherDocs" class="file-input" @change="handleFileSelect" style="display: none" />
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
        <div class="row">
          <button type="submit" class="btn btn-success">
            طرح المشروع
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import memberService from "../services/memberService";
import MemberHeader from "../components/MemberHeader.vue";

export default {
  components: {
    MemberHeader,
  },
  setup() {
    const form = ref({
      project_title: "",
      project_details: "",
      space: "",
      service_category: "",
      Electronic_service: [],
      last_offers_date: "",
      area: "",
      project_days_limit: "",
      Eng_offices_class:"",
      city: "",
      offer_choosing_date: "12-11-2023",
      title_deed: "",
      owner_id: "",
      other_files: ref([]),
      request_qty_tables: false,
      request_engs: 0,
    });

    const selectedFile = ref([]);
    const handleFileSelect = (event) => {
      if (event.target.files.length > 0) {
        selectedFile.value.push(event.target.files[0]);
      }
    };

    const addproject = () => {
      const convertedObject = {};
      for (const value of form.value.Electronic_service) {
        const option = document.querySelector(`option[value="${value}"`);
        if (option) {
          convertedObject[value] = option.text;
        }
      }
      // console.log(convertedObject)
      const formData = new FormData();
      formData.append("project_title", form.value.project_title);
      formData.append("project_details", form.value.project_details);
      formData.append("space", form.value.space);
      formData.append("service_category", form.value.service_category);
      formData.append("Electronic_service",JSON.stringify(convertedObject));
      formData.append("last_offers_date", form.value.last_offers_date);
      formData.append("area", form.value.area);
      formData.append("project_days_limit", form.value.project_days_limit);
      formData.append("Eng_offices_class",form.value.Eng_offices_class)
      formData.append("city", form.value.city);
      formData.append("offer_choosing_date", form.value.offer_choosing_date);
      formData.append("title_deed", selectedFile.value[0]);
      formData.append("owner_id", selectedFile.value[1]);
      formData.append("other_files", selectedFile.value[2]);
      formData.append("request_qty_tables", form.value.request_qty_tables);
      formData.append("request_engs", form.value.request_engs);

      const formDataObject = Object.fromEntries(formData);
      // console.log(formDataObject);
      memberService.addproject(formDataObject).then()

      // if (form.value.title_deed && selectedFile.value.length > 0) {
      //   formData.append('title_deed', form.value.title_deed);
      // } else if (selectedFile.value.length > 0) {
      //   formData.append('title_deed', selectedFile.value);
      // }
    };
    onMounted(() => {
      // addproject();
    });
    return {
      form,
      handleFileSelect,
      selectedFile,
      addproject,
    };
  },
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

.form-control {
  border: 1.5px solid #656565;
  background: #fff;

}

form .form-control {
  margin-right: 0px;
  border-radius: 10px;
  border: 1.5px solid #656565;
  background: #fff;
}

form .form-select {
  margin-right: 10px;
  border-radius: 10px;
  border: 1.5px solid #656565;
  background: #fff;
}

.custom-select {
  text-align: left;
}

/* Style the selected option */
/* Style the selected option */
select#floatingSelect option:checked {
  background-color: #0c483f;
  color: #fff;
}

/* Style the options on hover */
.custom-select:hover option:hover {
  background-color: #0c483f;
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
}

.form-control.project-details::placeholder {
  color: rgba(84, 132, 125, 0.7);
}

.descriptionfortextarea {
  color: #0c483f;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
}

.form-control::-webkit-selection {
  background-color: #0c483f;
  color: white;
}

/* For Firefox */
.form-control::selection {
  background-color: #0c483f;
  color: white;
}

/* For Internet Explorer */
.form-control::-ms-value {
  background-color: #0c483f;
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
  background-color: #0c483f;
}

.form-check-input:checked {
  border-color: #0c483f;
  background-color: #0c483f;
}

.project-draft {
  color: #48847b;
}

/* Style for the file input labels */
.file-label {
  cursor: pointer;
}

/* Style for the uploaded images */
.upload-image {
  width: 100px;
  /* Adjust the width as needed */
  height: 100px;
  /* Adjust the height as needed */
  object-fit: cover;
  padding: 10px;
  border-radius: 13px;
  background-color: #f2f2f2;
  box-shadow: 3px 4px 20px 0px rgba(0, 0, 0, 0.25);
  color: #48847B;
}
</style>
