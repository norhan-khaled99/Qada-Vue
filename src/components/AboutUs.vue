<template>
    <header>
        <h3>عن قدة</h3>
    </header>
    <div class="container-fluid">
        <p>مرحبًا بك في منصة قدة! نحن نسعى جاهدين لتوفير بيئة ملائمة ومبتكرة للمهندسين والعمل الحر في المملكة العربية
            السعودية. نؤمن بأن المهندسين لديهم الكفاءة والقدرة على إحداث تغيير إيجابي في المجتمع والمساهمة في تطويره.</p>
        <p>في منصة قدة، نعمل على توفير فرص العمل والمشاريع للمهندسين المتخصصين في مختلف المجالات، بدءًا من الهندسة المعمارية
            والهندسة المدنية وصولاً إلى الهندسة الكهربائية والميكانيكية، والعديد من المجالات الأخرى. نحن نربط المهندسين
            بالعملاء المحتملين الذين يبحثون عن خبراتهم ومهاراتهم.</p>
        <p>تتيح منصتنا للمهندسين العمل الحر واختيار المشاريع التي يرغبون في العمل عليها. بفضل قدرات التواصل المباشر المتاحة
            على المنصة، يمكن للمهندسين والعملاء التفاعل وتحديد متطلبات المشروع وضمان تنفيذه بنجاح.</p>
        <p>نهدف أيضًا إلى تسهيل عملية البحث عن المهندسين المؤهلين والموثوق بهم في المملكة العربية السعودية. توفر منصتنا
            آليات بحث متقدمة وقوائم مفصلة للمهندسين، مما يساعد العملاء على العثور بسهولة على المهندس المثالي لمشروعهم.</p>
        <p>نحن نسعى دائمًا لتحسين وتطوير منصتنا لتلبية احتياجات المهندسين والعملاء على حد سواء. نحن نعمل بشكل مستمر على
            توفير أدوات وموارد إضافية تساعد المهندسين في تطوير مهاراتهم وتحقيق نجاح أعمالهم.</p>
        <p>نحن فريق متحمس وملتزم يعمل بجد لتقديم خدمة استثنائية للمهندسين والعملاء في منصة قدة. نرحب بكم جميعًا للانضمام
            إلينا والاستفادة من فرص العمل والتعاون المثمر. معًا، يمكننا تحقيق تطور مذهل في قطاع الهندسة والعمل الحر في
            المملكة العربية السعودية.</p>
        <p>شكرًا لثقتكم بمنصة قدة!</p>
        <p>فريق منصة قدة</p>
    </div>
    <div class="header">اراء بعض العملاء عنا</div>
    <div class="row w-75 m-auto justify-content-between">
        <div class="col-lg-2">
            <img src="../assets/Ellipse.png" class="rounded-circle">
        </div>
        <div class="col-lg-2">
            <img src="../assets/Ellipse.png" class="rounded-circle">
        </div>
        <div class="col-lg-2">
            <img src="../assets/Ellipse.png" class="rounded-circle">
        </div>
    </div>
    <div class="row w-75 m-auto justify-content-around">

        <div class="col-lg-2 card">
            <div class="container">
                <div class="headercard">اريج علي</div>
                <p class="pcard">( عميل مميز )</p>
                <p class="p2" style="font-size: 3rem; margin-bottom: -1rem;">“</p>
                <p class="p2">
                    اسعدني العمل مع فريق قدة
                    انهم يقدمون خدمة رائعة
                    وتعامل ممتاز , كان لي الشرف
                    في التعامل معكم , واتمني
                    ان تتكرر مرة اخري , تحياتي
                </p>
                <p class="p2" style="text-align: left; font-size: 3rem;">“</p>
            </div>
        </div>
        <div class="col-lg-2 card">
            <div class="headercard">اريج علي</div>
            <p class="pcard">( عميل مميز ) </p>
            <p class="p2" style="font-size: 3rem; margin-bottom: -1rem;">“</p>
            <p class="p2">
                اسعدني العمل مع فريق قدة
                انهم يقدمون خدمة رائعة
                وتعامل ممتاز , كان لي الشرف
                في التعامل معكم , واتمني
                ان تتكرر مرة اخري , تحياتي
            </p>
            <p class="p2" style="text-align: left; font-size: 3rem;">“</p>
        </div>
        <div class="col-lg-2 card">
            <div class="headercard">اريج علي</div>
            <p class="pcard">( عميل مميز )</p>
            <p class="p2" style="font-size: 3rem; margin-bottom: -1rem;">“</p>
            <p class="p2">
                اسعدني العمل مع فريق قدة
                انهم يقدمون خدمة رائعة
                وتعامل ممتاز , كان لي الشرف
                في التعامل معكم , واتمني
                ان تتكرر مرة اخري , تحياتي
            </p>
            <p class="p2" style="text-align: left; font-size: 3rem;">“</p>
        </div>
    </div>
    <div class="container">
        <div class="header">
            <p style="display: inline; ">يمكنك ان تشارك معهم </p>
            <p style="display: inline; color: rgba(255, 184, 0, 1);">, يهمنا رأيك حقًا </p>
            <p>شارك الآن !</p>
        </div>
    </div>
    
    <div class="container ">
        <div class="row share">
            <input type="text" placeholder="اكتب رأيك عنا ...." class="form-control " v-model="password" />
            <button type="submit" class="btn">إرسال</button>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
* {
    direction: rtl;
}

.container-fluid {
    width: 60%;
    margin-top: 2rem;
    display: right;
}

header {
    background-image: url(../assets/Rectangle\ 33.png);
    width: 100%;
    height: 100%;
    padding-bottom: 10rem;
}

header h3 {
    margin-right: 10rem;
    color: rgba(255, 255, 255, 1);
}

.header {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 800;
}

.card {
    /* margin-right: 7rem; */
    /* margin-top: 5rem; */
    background-color: rgba(15, 150, 120, 1);
    width: 18rem;
    height: 25rem;
    border-radius: 1rem;

}

.headercard {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 2rem;
    color: rgba(255, 235, 182, 1);
}

.pcard {
    color: rgba(255, 185, 0, 1);
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.p2 {
    color: rgba(245, 240, 240, 1);
}
.header p{
    font-size: 1rem;
    font-weight: 600;
    color: rgba(23, 23, 31, 1);
}
.share{
    text-align: center;
    justify-content: center;
    align-items: center;
}
.share input{
      border: 0.2rem solid rgba(15, 150, 120, 1);
      border-radius: 2rem;
}
.btn{
    width: 98.45px;
    height: 35.75px;
    border-radius: 2rem;
    background-color: rgba(15, 150, 120, 1);
    color: rgba(255, 255, 255, 1);
    margin-top: 2rem;
    margin-bottom: 2rem;

}
</style>