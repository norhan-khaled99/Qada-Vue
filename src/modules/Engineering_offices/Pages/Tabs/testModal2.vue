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
        <div class="modal-content rounded-5 " style="background-color: #0F9678; width:35rem ">
          <div class="modal-body d-flex flex-column align-items-center ">
            <div class="modal-text my-5">
                تم إرسال رسالتك الي فريقنا بنجاح , نشكرك لتواصلك معنا
            </div>
            <div class="d-flex justify-content-around">
              <button class="btn btn-success">نعم</button>
              <button class="btn btn-danger">لا</button>
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
 *{
  direction: rtl;
 }

.test-5{
    background-color: #0F9678;
}

.modal-text{
color:#FFF;
text-align: center;
font-family: Cairo;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
white-space: nowrap;
padding-right: 20px;
padding-left:20px ;
}
img{
    width: 40%;
    height: 40%;
    position: relative;
  
}
svg{
  position: absolute;
  top: 100px;

}
button{
  margin: 0rem 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
}
</style>