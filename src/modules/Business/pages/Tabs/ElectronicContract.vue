<template>
  <div class="container">
    <div class="header-title my-3">تعاقد الكتروني</div>
    <div class="d-flex justify-content-center my-5">
      <button class="btn contract">عقد الكتروني</button>
      <button class="btn download-contract">
        تحميل العقد الالكتروني
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M23.75 11.25H18.75V3.75H11.25V11.25H6.25L15 20L23.75 11.25ZM6.25 22.5V25H23.75V22.5H6.25Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
   

</template>

<script setup>

</script>

<style scoped>
* {
  direction: rtl;
}

.header-title {
  color: #259F5A;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
}
.container {
  height: 100vh;
}
.contract {
  border-radius: 20px;
  background: #259F5A;
  color: #fff;
  padding: 0.625rem 3.125rem;
  margin-left: 1.25rem;
  white-space: nowrap;
}

.download-contract {
  border-radius: 20px;
  background: #0378ae;
  white-space: nowrap;
  color: #fff;
}
</style>
