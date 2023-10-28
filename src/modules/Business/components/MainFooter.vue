<template>
  <footer class="text-light text-center py-3">

    <div class="container">
      <h1>قدة</h1>
      <div class="row">
        <div class="col-lg-1 offset-lg-3">
          <p>إتصل بنا</p>
        </div>
        <div class="d-flex justify-content-center col-lg-8">
          <div class="mx-3">
            <p>الاسئلة المتكررة</p>
          </div>
          <div class="mx-3">
            <p>من نحن؟</p>
          </div>
          <div class="mx-3">
            <p>الرئيسية</p>
          </div>
        </div>
      </div>
      <div class="row">
        <p>الشروط والاحكام</p>
      </div>
      <div class="row ">
        <p class="text-align-center">
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp
        </p>
        <p>i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.</p>
      </div>

      <div class="iqon">
        <i class="fa-brands fa-facebook-f text-light mx-2"></i>
        <i class="fa-brands fa-twitter text-light mx-2"></i>
        <i class="fa-brands fa-linkedin-in text-light mx-2"></i>
        <i class="fa-brands fa-instagram text-light mx-2"></i>
      </div>
    </div>

  </footer>
</template>
  
<script>
export default {};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo&display=swap");

footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #0c483f;
  font-family: "Cairo", sans-serif;
}

.endfooter {
  text-align: center;
}

.iqon:before {
  content: '';
  background-color: #00221D;
  position: absolute;
  width: 40%;
  height: 30px;
  left: 0;
  bottom: 0;
  border-top-right-radius: 61px;
}

.iqon:after {
  content: '';
  background-color: #00221D;
  position: absolute;
  width: 40%;
  height: 30px;
  right: 0;
  bottom: 0;
  border-top-left-radius: 61px;
}</style>
