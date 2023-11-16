<!-- eslint-disable no-undef -->
<template>
    <div class="container">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" @click="showModal">
     test button
    </button>
  
    <!-- Modal -->
    <div
      class="modal fade "
      id="demoModal"
      tabindex="-1"
      aria-labelledby="demoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog ">
        <div class="modal-content rounded-5" style="background-color:#1A6177;width:45rem ">
          <div class="modal-body d-flex flex-column align-items-center ">
            <div class="modal-text my-3">
                <p class="text-center">ادخل البيانات المطلوبة من فضلك</p>

                <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>

                <p><span class="">تنويه</span> : عرض السعر  المرسل يشمل ضريبة القيمة المضافة 15%. سيتم حساب عمولة المنصة 7%  بشكل آلي من قيمة العقد كاملًا</p>
                <p>بالإضافة إلي ضريبة القيمة المضافة 15%. يتم حساب عمولة 7% في كل مرحلة من مراحل المشروع.</p>
                <div class="row d-flex btn-offers">
                  <button>اضافة العرض الفني</button>
                  <button>اضافة العرض السعري</button>
                  <button>ارسال</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
<!--   
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
  </script> -->

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

.blur-background {
  filter: blur(5px);
  /* You can adjust the blur intensity as needed */
}


.modal-text{
color:#FFF;
text-align: center;
font-family: Cairo;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.btn-offers button{
border-radius: 8px;
background: #008955;
}

</style>