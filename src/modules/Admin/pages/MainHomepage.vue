<template>
    <AdminHeader />
    <div class="container-fliud">
        <div class="row g-0">
            <div class="col-lg-3 sideCard">
                <ul>
                    <li class="text-light">مرحبا</li>
                    <li class="authName">عبدالعزيز</li>
                    <li class="mt-4"><router-link class="sidbarLink" to="homepage">الرئيسية</router-link></li>
                    <li class="mt-4"><router-link class="sidbarLink" to="usersStats">الاحصائيات</router-link></li>
                    <li class="mt-4"><router-link class="sidbarLink" to="useraccount">الفريق</router-link></li>
                    <li class="mt-4"><router-link class="sidbarLink" to="addedProjects">المشاريع</router-link></li>
                    <li class="mt-4"><router-link class="sidbarLink" to="">تسجيل خروج</router-link></li>
                </ul>
            </div>
            <div class="col-lg-8">
                <div class="row header-title my-3">
                    مسار مشاريعك
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-10 statics  ">
                        <div class="card-subtitle my-3">
                            المعلومات شاملة
                        </div>
                        <div class="my-2">
                            <span class="number-done">50</span>
                            <span class="number-done">|</span>
                            <span class="number-done"> 73</span>
                            <span class="done-projects">(مشاريع انتهت)</span>
                        </div>
                        <div class="d-flex justify-content-around my-2">
                            <div class="col-2 first-column">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M19 6H16V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V9C22 8.20435 21.6839 7.44129 21.1213 6.87868C20.5587 6.31607 19.7956 6 19 6ZM10 5H14V6H10V5ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V12.39L8.68 14C8.78618 14.0144 8.89382 14.0144 9 14H15C15.1084 13.998 15.2161 13.9812 15.32 13.95L20 12.39V18ZM20 10.28L14.84 12H9.16L4 10.28V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9V10.28Z"
                                        fill="white" />
                                </svg>
                                <span>73</span>
                                <span>مشروع</span>
                            </div>
                            <div class="col-2 d-flex flex-column second-column align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.4968 9.2162 21.3896 6.54733 19.4211 4.57889C17.4527 2.61044 14.7838 1.50318 12 1.5ZM12 21C9.61306 21 7.32387 20.0518 5.63604 18.364C3.94822 16.6761 3 14.3869 3 12C3 9.61305 3.94822 7.32387 5.63604 5.63604C7.32387 3.94821 9.61306 3 12 3V12L18.3608 18.3608C17.5266 19.1979 16.5352 19.862 15.4437 20.3149C14.3521 20.7679 13.1818 21.0007 12 21Z"
                                        fill="white" />
                                </svg>
                                <span>11</span>
                                <span class="text-center">في تقدم </span>
                            </div>
                            <div class="col-2 third-column">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <g clip-path="url(#clip0_778_10916)">
                                        <path
                                            d="M12 0C13.1016 0 14.1641 0.140625 15.1875 0.421875C16.2109 0.703125 17.1641 1.10938 18.0469 1.64062C18.9297 2.17188 19.7383 2.79688 20.4727 3.51562C21.207 4.23438 21.8359 5.04297 22.3594 5.94141C22.8828 6.83984 23.2852 7.79688 23.5664 8.8125C23.8477 9.82812 23.9922 10.8906 24 12C24 13.1016 23.8594 14.1641 23.5781 15.1875C23.2969 16.2109 22.8906 17.1641 22.3594 18.0469C21.8281 18.9297 21.2031 19.7383 20.4844 20.4727C19.7656 21.207 18.957 21.8359 18.0586 22.3594C17.1602 22.8828 16.2031 23.2852 15.1875 23.5664C14.1719 23.8477 13.1094 23.9922 12 24C10.8984 24 9.83594 23.8594 8.8125 23.5781C7.78906 23.2969 6.83594 22.8906 5.95312 22.3594C5.07031 21.8281 4.26172 21.2031 3.52734 20.4844C2.79297 19.7656 2.16406 18.957 1.64062 18.0586C1.11719 17.1602 0.714844 16.2031 0.433594 15.1875C0.152344 14.1719 0.0078125 13.1094 0 12C0 10.8984 0.140625 9.83594 0.421875 8.8125C0.703125 7.78906 1.10938 6.83594 1.64062 5.95312C2.17188 5.07031 2.79688 4.26172 3.51562 3.52734C4.23438 2.79297 5.04297 2.16406 5.94141 1.64062C6.83984 1.11719 7.79688 0.714844 8.8125 0.433594C9.82812 0.152344 10.8906 0.0078125 12 0ZM19.0664 8.02734L17.4727 6.43359L9.75 14.1562L6.52734 10.9336L4.93359 12.5273L9.75 17.3438L19.0664 8.02734Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_778_10916">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>50</span>
                                <span>انتهي</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-10 statics">
                        <div class="card-subtitle my-3">
                            فاعلية الفريق
                            <span class="team-rate">95%</span>
                        </div>
                        <div class="d-flex justify-content-around mt-5">
                            <div class="col-2 flex-column align-self-end">
                                <div>100% </div>
                                <div>75%</div>
                                <div>50% </div>
                                <div>25%</div>
                                <div>0%</div>
                            </div>
                            <div class="col-2  first-column-two ">50%</div>
                            <div class="col-2  second-column-two">91%</div>
                            <div class="col-2 third-column-two ">73% </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-0 my-5">
            <div class="team-member mb-3">
                اعضاء الفريق
            </div>
            <div class="col-lg-10 m-auto team-member-content bg-light my-5">
                <div class="row align-self-baseline">
                    <div class="col team-member-content-title">الموظف</div>
                    <div class="col team-member-content-title">موعد التسليم</div>
                    <div class="col team-member-content-title">المهمة</div>
                    <div class="col team-member-content-title">الحالة</div>
                    <div class="col team-member-content-title">إسم المشروع</div>
                </div>
                <div class="row align-self-baseline my-3">
                    <div class="col team-subtitle">محمود</div>
                    <div class="col team-subtitle">16 مايو</div>
                    <div class="col team-subtitle">غير محدد</div>
                    <div class="col team-subtitle">
                        <button class="status-button">في تقدم</button>
                    </div>
                    <div class="col team-subtitle">بناء فيلا</div>
                </div>

                <div class="row align-self-baseline my-3">
                    <div class="col team-subtitle">محمود</div>
                    <div class="col team-subtitle">16 مايو</div>
                    <div class="col team-subtitle">غير محدد</div>
                    <div class="col team-subtitle">
                        <button class="status-button">في تقدم</button>
                    </div>
                    <div class="col team-subtitle">بناء فيلا</div>
                </div>
                <div class="row align-self-baseline my-3">
                    <div class="col team-subtitle">محمود</div>
                    <div class="col team-subtitle">16 مايو</div>
                    <div class="col team-subtitle">غير محدد</div>
                    <div class="col team-subtitle">
                        <button class="status-button">في تقدم</button>
                    </div>
                    <div class="col team-subtitle">بناء فيلا</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { usebackgroundStore } from "../../../stores/background"
import AdminHeader from "../pages/AdminHeader.vue"
export default {
    components: {
        AdminHeader
    },
    data: () => ({
        backgroundStore: usebackgroundStore()
    }),
    mounted() {
        this.backgroundStore.setBgColor(1)
    },
    unmounted() {
        this.backgroundStore.setBgColor(0)
    }
}
</script>

<style  scoped>
* {
    direction: rtl;
}

.sideCard {
    background-color: #59467C;
    color: #fff;
    width: 170px;
    text-align: center;
    border-radius: 18px 0 0 18px;
    margin-left: 2rem;
}

.sideCard li {
    list-style-type: none;
}

.sidbarLink {
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

.header-title {
    color: #E4E4E4;
    text-align: right;
    font-family: Cairo;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.card-subtitle {
    color: #FFF;
    text-align: right;
    font-family: Cairo;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.statics {
    border-radius: 10px;
    border: 1px solid #E4E4E4;
    margin-left: 1.75rem;
}

.team-rate {
    color: #00FDA8;
    text-align: right;
    font-family: Cairo;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.number-done {
    color: #FFF;
    text-align: right;
    font-family: Cairo;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.done-projects {
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-family: Cairo;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.first-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: #259F5A;
}

.first-column span,
.first-column svg {
    margin: 1rem 0;
}

.second-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: #007FBB;
}

.second-column span,
.second-column svg {
    margin: 1rem 0;
}

.third-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: #95244E;
}

.third-column span,
.third-column svg {
    margin: 1rem 0;
}

.team-member {
    color: #E4E4E4;
    text-align: center;
    font-family: Cairo;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.team-member-content {
    border-radius: 20px;

}

.team-member-content-title {
    color: #7B7485;
    text-align: center;
    font-family: Cairo;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.team-subtitle {
    color: #000;
    text-align: center;
    font-family: Cairo;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.status-button {
    border-radius: 20px;
    background: rgba(0, 127, 187, 0.40);
    border: none;
}

.first-column-two {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background: #259F5A;
    max-height: 4rem;
}

.second-column-two {
    display: flex;
    text-align: center;
    flex-direction: column-reverse;
    align-items: center;
    border-radius: 10px;
    background: #007FBB;
    max-height: 6.25rem;
}

.third-column-two {
    display: flex;
    text-align: center;
    flex-direction: column-reverse;
    align-items: center;
    border-radius: 10px;
    background: #95244E;
    max-height: 4.75rem;
}


@media(max-width: 576px) {
    .team-member-content-title {
        color: #7B7485;
        text-align: center;
        font-family: Cairo;
        font-size: 10px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .statics {
        border-radius: 10px;
        border: 1px solid #E4E4E4;
        margin-bottom: 1.5rem;
        padding-left: 0.5rem;
    }
}
</style>