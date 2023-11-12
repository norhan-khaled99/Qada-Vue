<template>
    <div class="sideCard">
        <ul>
            <li class="text-light">مرحبا</li>
            <li class="authName">عبدالعزيز</li>
            <li class="mt-4"><router-link class="sidbarLink" to="homepage">الرئيسية</router-link></li>
            <li class="mt-4"><router-link class="sidbarLink" to="">الاحصائيات</router-link></li>
            <li class="mt-4"><router-link class="sidbarLink" to="">الفريق</router-link></li>
            <li class="mt-4"><router-link class="sidbarLink" to="">المشاريع</router-link></li>
            <li class="mt-4"><router-link class="sidbarLink" to="">تسجيل خروج</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sideCard {
    background-color: #59467C;
    color: #fff;
    width: 170px;
    text-align: center;
    border-radius: 18px 0 0 18px;
}

.sideCard li {
    list-style-type: none;
}
.sidbarLink{
    text-decoration: none;
    color: #FFFFFFB2;
    font-size: 18px;
    line-height: 33.73px;
}
.sideCard .authName {
    color: #ffffff;
    font-weight: 700;
    font-size: 25px;
    line-height: 46.85px;
}

</style>