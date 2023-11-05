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
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">اضف تقييما لجودة المخرجات</h5>
            <button type="button" class="btn-close custom-close-button" style="color: #48847B;" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex flex-column align-items-center">
            <div class="my-3 modal-text fs-3" >اخبرنا ما هو تقييمك لهذا المكتب؟</div>
            <img src="../../../assets/emotji.png">
            <div class="my-3 modal-text fs-3">! كل شئ مر على ما يرام</div>
            <div>
                <input type="range" class="form-range bs-success" id="customRange1" />            
            </div>
            <div>
                <button class="accepted-btn my-3">قبول المرحلة وارسال التقييم</button>
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
*{
    direction: rtl;
}
.modal-header {
    border-bottom: 1px solid #48847B;
}
  
.modal-dialog{
border-radius: 6px;
border: 3px solid #0C483F;
background: #F2F2F2;
box-shadow: 5px 4px 15px 0px rgba(0, 0, 0, 0.10);
}
.blur-background {
  filter: blur(5px);
  /* You can adjust the blur intensity as needed */
}

.test-5{
    background-color: #0F9678;
}

.modal-text{
color: var(--BLUE20, #69708D);
text-align: center;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.accepted-btn{
    padding: 5px 30px;
    background-color: #48847B;
    border: none;
    border-radius: 5px;
    color: #FFFF;
}
.custom-close-button {
    color: #48847B;
}

#customRange1::-webkit-slider-thumb {
    background-color: #48847B;
  }
  
  #customRange1::-moz-range-thumb {
    background-color: #48847B;
  }
  
  #customRange1::-ms-thumb {
    background-color: #48847B;
  }
  
  #customRange1::-webkit-slider-runnable-track {
    background-color: #48847B;
  }
  
  #customRange1::-moz-range-track {
    background-color: #48847B;
  }
  
  #customRange1::-ms-track {
    background-color: #48847B;
  }
  
</style>