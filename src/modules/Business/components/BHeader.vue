<template>
    <div class="content">
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-baseline ">
                        <li class="nav-item mx-lg-2">
                            <router-link class="nav-link qada" to="/business">قد<span>ة</span></router-link>
                        </li>
                        <li class="nav-item mx-lg-2">
                            <router-link class="nav-link ra2esia" to="/business"> الرئيسية</router-link>
                        </li>
                        <li class="nav-item mx-lg-2">
                            <router-link to="/business/aboutus" class="nav-link">من نحن؟</router-link>
                        </li>
                        <li class="nav-item mx-lg-2">
                            <router-link class="nav-link" router-link to="/business/addProjectBussiness">لوحة التحكم</router-link>
                        </li>
                        <li class="nav-item mx-lg-2">
                            <router-link to="/business/faq" class="nav-link">الاسئلة المتكررة</router-link>
                        </li>
                        <li class="nav-item mx-lg-2">
                            <router-link to="/business/termsandconditions" class="nav-link">الشروط والاحكام</router-link>
                        </li>
                        <li class="nav-item mx-lg-2">
                            <router-link to="/business/successPartners" class="nav-link">شركاء النجاح</router-link>
                        </li>
                        <li class="nav-item mx-lg-2">
                            <router-link to="/business/contactus" class="nav-link">إتصل بنا</router-link>
                        </li>
                        <router-link to="/loginPanal">
                            <button type="button" class="btn  login mx-lg-4">تسجيل الدخول</button>
                        </router-link>
                        <router-link to="/loginPanal">
                            <button type="button" class="btn   create">إنشاء حساب</button>
                        </router-link>
                        <li class="nav-item mx-lg-5 position-relative">
                            <i class="fa-regular fa-bell"></i>
                            <span class="position-absolute top-0 start-lg-100  badge rounded-pill bg-danger text-light">
                                10
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
    direction: rtl;
}

@import url("https://fonts.googleapis.com/css2?family=Cairo&display=swap");

nav {
    font-family: "Cairo", sans-serif;
}
p {
    font-size: 20px;
}

.navBg-img {
    width: 100vw;
    object-fit: cover;
}

li a {
    color: #000000CC;
    font-weight: 500;
    font-size: 18px;
}

li .qada {
    font-size: 35px;
}

.fa-bell {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.80);
    color: #000000CC;
    ;
}

.create {
    background-color: #fff;
    color: #259F5A;
    border-color: #259F5A;
    border-radius: 1rem;
    width: 150px;
    height: 40px;
}

.login {
    background-color: #259F5A;
    color: #fff;
    width: 150px;
    height: 40px;
    border-radius: 1rem;
    border-color: #259F5A;
}

li .ra2esia {
    color: #259F5A;
    text-decoration-line: underline;
}

li span {
    color: #259F5A;
}
</style>
