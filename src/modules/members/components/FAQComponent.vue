<template>
    <MemberHeader/>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 w-25">
                <p>ما الذي يميز خدماتنا؟</p>
                <p>شركتنا تعمل منذ زمن بأحدث التقنيات الممكنة
                    لما جعلنا من الاوائل دائمًا طيله هذه الفترة، لما جعلنا
                    أأمن واسرع واوسع شركة شحن طيله هذه المدة.</p>
            </div>
            <div class="col-lg-2">
                <a><i class="fa-light fa fa-circle-arrow-down"></i></a>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6 w-25   ">
                <p>ما الذي يميز خدماتنا؟</p>
            </div>
            <div class="col-lg-2">
                <a><i class="fa-light fa fa-circle-arrow-down"></i></a>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-6 w-25   ">
                <p>ما الذي يميز خدماتنا؟</p>
            </div>
            <div class="col-lg-2">
                <a><i class="fa-light fa fa-circle-arrow-down"></i></a>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-6 w-25   ">
                <p>ما الذي يميز خدماتنا؟</p>
            </div>
            <div class="col-lg-2">
                <a><i class="fa-light fa fa-circle-arrow-down"></i></a>
            </div>
        </div>

    </div>
</template>

<script setup>
import MemberHeader from "../components/MemberHeader.vue"

</script>

<style scoped>
* {
    direction: rtl;
}

.container {
    margin-bottom: 5rem;
    margin-top: 5rem;

}

.container p {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
}
</style>