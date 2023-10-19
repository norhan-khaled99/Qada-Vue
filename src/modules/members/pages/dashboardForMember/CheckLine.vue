<template>
    <div class="container mt-3">
         THIS IS GOOD BUT NOT APPEAR IN MOBILE
        <!-- <div class="d-flex justify-content-center my-5 m-auto col-md-6 col-sm">
            <div class="col-md-2 col-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#48847B" />
                <path d="M31.5 54.5L46.2122 65L65 35" stroke="white" stroke-width="5" />
              </svg>
            </div>
            <div class="col-md-3 col-sm-5 my-3 custom-hr"></div>
            <div class="col-md-2 col-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30.3165" cy="29.6407" r="29.6407" fill="#656565"/>
              </svg>
            </div>
            <div class="col-md-3 col-sm-5 my-3 custom-hr"></div>
            <div class="col-md-2 col-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                <circle cx="30.4786" cy="29.6407" r="28.6407" stroke="#656565" stroke-width="2"/>
                <path d="M16 21L43 21M16 30L43 30M16 39L43 39" stroke="#656565" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div> -->

          <div class="d-flex justify-content-center my-5 m-auto col-md-6 col-sm-12">
            <div class="col-md-2 col-sm-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="50" fill="#48847B" />
                    <path d="M31.5 54.5L46.2122 65L65 35" stroke="white" stroke-width="5" />
                </svg>
            </div>
            <hr class="col-md-3 col-sm-5 my-3 custom-hr">
              
            <!-- <div class="col-3 border"></div> -->
            <div class="col-md-2 col-sm-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30.3165" cy="29.6407" r="29.6407" fill="#656565"/>
                  </svg>
            </div>
            <hr class="col-md-3 col-sm-5 my-3 custom-hr">

            <!-- <div class="col-3 border"></div> -->
            <div class="col-md-3 col-sm-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                    <circle cx="30.4786" cy="29.6407" r="28.6407" stroke="#656565" stroke-width="2"/>
                    <path d="M16 21L43 21M16 30L43 30M16 39L43 39" stroke="#656565" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
        </div>
          
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    direction: rtl;
}
.container {
    text-align: center;
}
.custom-hr {
    border: none;
    height:5px;
    background-color: black; 
  }
.fa-solid {
    color: #48847B;
}

svg{
    height: 50%;
    width: 50%;
} 
.border {
    width: 15%;
    height: 5px;
    background-color: #48847B;
    margin: 15px auto;
}
</style>
