<template>
  <div class="container">
    <div class="my-5">
    <div class="card col-md-7 col-sm-12 text-center">
        <div class="card-body">
             <span class="card-content">تنويه</span>: حفاظًا علي الجدول الزمني لمشروعك يلزم إرسال طلب بدء أعمال للمكتب الهندسي.
        </div>
    </div>

    <div class="header">
        المراحل المستلمة
    </div>

    <div class="card col-md-6 col-sm-12"> 
      <div class="d-flex justify-content-between align-items-baseline ms-3 me-3 my-1">
          <div class="card-title text-right">المراحل المستلمة</div>
          <div class="">
              <button class="btn first-stage">طلب تعديل</button>
              <button class="btn recieve-stage">استلام المرحلة</button>
          </div>
      </div>
      <div class="seperator"></div>
      <div class="d-flex justify-content-between align-items-baseline ms-3 me-3 my-1">
        <div class="text-right">
          <span>عدد ايام المرحلة: <span class="numbers">  (10) يوم | </span></span>
          <span>عدد التعديلات: <span class="numbers">2/5</span></span>        
        </div>
        <div class="button-stage">
          <button class="btn request-start-working ">طلب بدءالاعمال</button>
            <button class="btn edit-button ">توقيع غرامة تأخير</button>
        </div>
    </div>
  </div>
  
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
*{
    direction: rtl;
}
.card{
margin: auto;    
border-radius: 10px;
border: 1px solid rgba(0, 0, 0, 0.70);
}
.card-body{
color: #000;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.card-title{
color: #336059;
text-align: right;
font-family: Cairo;
font-size: 17px;
font-weight: 600;
}
.card-content{
color: #259F5A;
text-align: center;
font-size: 24px;
font-weight: 700;
}
.header{
color: #259F5A;
font-family: Cairo;
font-size: 25px;
font-weight: 700;
margin: 1rem 0 ;
text-align: center;
}
.first-stage{
border-radius: 5px;
border: 2px solid hsl(171, 29%, 40%);
color: #48847B;
margin-left: 0.5rem;
padding: 5px 30px;

}
.recieve-stage{
border-radius: 5px;
background: #48847B;
color:#FFFFFF;
padding: 5px 25px;
}
.seperator{
border-bottom: 1px solid #48847B;
width: 99.9%;
}
.button-stage button{
  margin: 0rem 0.25rem;
}
.numbers{
color: #259F5A;
font-family: Cairo;
font-size: 17px;
font-weight: 700;
}
.edit-button{
border-radius: 5px;
background: #CF2525;
color:#FFFFFF;
padding: 5px 15px;
}
.request-start-working{
  border-radius: 5px;
  background: #48847B;
  color:#FFFFFF;
  padding: 5px 15px;
}

</style>