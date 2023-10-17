<template>
  <div class="container">
    <div class="flex-column align-items-center">
    <div class="card">
        <div class="card-body">
             <span class="card-content">تنويه</span>: حفاظًا علي الجدول الزمني لمشروعك يلزم إرسال طلب بدء أعمال للمكتب الهندسي.
        </div>
    </div>

    <div class="header">
        المراحل المستلمة
    </div>

    <div class="card col-md-6 col-sm-12"> 
      <div class="row justify-content-between seperator">
        <span>المراحل المستلمة</span>
        <span><button class="btn first-stage">طلب تعديل</button></span>
        <span><button class="btn recieve-stage">استلام المرحلة</button></span>
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
border-radius: 10px;
border: 1px solid rgba(0, 0, 0, 0.70);
}
.card-content{
color: #0C483F;
text-align: right;
font-size: 24px;
font-weight: 700;
}
.header{
color: #0C483F;
font-family: Cairo;
font-size: 25px;
font-weight: 700;
margin: 1rem 0 ;
}
.first-stage{
border-radius: 5px;
border: 2px solid #48847B;
color: #48847B;
}
.recieve-stage{
border-radius: 5px;
background: #48847B;
}
.seperator{
    border-bottom: 2px solid #48847B;
}

</style>