<template>
    <div class="containe">
        <!-- <div class="sideCard">
            <p >مرحبا</p>
            <h4>عبدالعزيز</h4>
            <p >الرئيسية</p>
            <p >حسابي</p>
            <p >المراسلات</p>
            <p >تسجيل خروج</p>
        </div> -->
        <CheckLine />
        <div class="row m-auto headerCard text-sm-center">
            <div class="col-lg-3 ">
                <h6>رقم المرجعي</h6>
                <p>156137</p>
            </div>
            <div class="col-lg-3 ">
                <h6>اسم المشروع</h6>
                <p>فيلا 5اوض 3حمامات</p>
            </div>
            <div class="col-lg-3 ">
                <h6>اخر موعد الاستفسارات</h6>
                <p>17-5-2023</p>
            </div>
            <div class="col-lg-3 ">
                <h6>عدد العروض</h6>
                <p>25</p>
            </div>
        </div>
        <div class="table-container m-auto">
            <table class=" w-lg-50 w-sm-25 m-auto my-5">
                <tbody>
                    <tr class="firstTr">
                        <th>
                            <p>1</p>
                        </th>
                        <td>تقرير دراسة الموقع ودراسة احتياج المصرف والتصاميم الأولية</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>تطوير التصميم بعد اعتماده</td>
                    </tr>
                    <tr>
                        <th> 3</th>
                        <td>إعداد المخططات الوثائق التنفيذية النهائية ومستندات الطرح وجداول الكميات</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>إستخراج الرخص</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import CheckLine from './CheckLine.vue'
export default {
    name: 'DashboardCard',
    components: {
        CheckLine
    }
}
</script>

<style scoped>
* {
    direction: rtl;
}

.contanie {
    position: relative;
}

.sideCard {
    position: absolute;
    top: 45%;
    background-color: #54847D;
    color: #fff;
    width: 150px;
    text-align: center;
    border-radius: 18px 0 0 18px;
}

.headerCard {
    width: 50%;
}

h6 {
    color: #575757;
    font-weight: 600;
}

table {
    border-collapse: collapse;
    border-radius: 20px;
    box-shadow: 2px 2px 15px 0px #00000040;
}

td {
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
}

th {
    width: 50px;
    text-align: center;
    color: #54847D;
}

</style>