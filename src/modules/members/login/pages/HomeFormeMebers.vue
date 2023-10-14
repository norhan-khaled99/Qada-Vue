<template>
  <div class="container">
    <h1>home for member</h1>
    <div class="row">
      <div class="header">
       <div > جميع مشاريعك الهندسية تحت  </div>
       <span class="header"> منصة واحدة</span>
      </div>
    </div>
    <div class="row">
      
    </div>
    <div class="row-col-6 my-5 add-project">
      <button class="btn btn-outline-success add-project-text">اطرح مشروعك الآن</button>
    </div>
  </div>
</template>

<script>
// import member from '../../../../styles/member.css'; // Import styles as an object

export default {

};
</script>

<style scoped>
.header{
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem; 
  font-weight:600px ;
}
.header span{
  color: #259F5A;
  margin: 0;
  padding: 0;
}
.add-project button{
  border-radius: 20px;
  border: 3px solid #272627; 
  padding:10px 50px ;
}
.add-project button :hover{
  transition: all 300ms ease-out;
  border-radius: 20px;
  border: 3px solid #272627; 
  padding:10px 50px ;
  background-color: white;
}
.add-project-text{
  color: #272627;
  font-size: 20px;
  text-align: center;
}
</style>
