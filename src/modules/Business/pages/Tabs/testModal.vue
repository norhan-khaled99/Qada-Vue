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
        <div class="modal-content rounded-5 " style="background-color: #259F5A; width:45rem ">
          <div class="modal-body d-flex flex-column align-items-center ">
             <img src="../../../../assets/Ellipse31.png" alt="" class="my-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="131" height="124" viewBox="0 0 131 124" fill="none">
              <path d="M7 72.3L57.0652 108L121 6" stroke="#259F5A" stroke-width="22"/>
            </svg>
            <div class="modal-text my-3">
                تم إرسال رسالتك الي فريقنا بنجاح , نشكرك لتواصلك معنا
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
    }, 10000); // 10000 milliseconds = 10 seconds
  };
</script>


<style scoped>

.blur-background {
  filter: blur(5px);
  /* You can adjust the blur intensity as needed */
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
</style>