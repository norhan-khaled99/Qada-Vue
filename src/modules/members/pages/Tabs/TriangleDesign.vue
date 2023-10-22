<template>
    <div class="container-fliud">
        <!-- <div class="shape">
            <div class="firstShap ">
                <svg class="w-100" xmlns="http://www.w3.org/2000/svg" width="1440" height="407" viewBox="0 0 1440 407"
                    fill="none">
                    <g filter="url(#filter0_d_1_25)">
                        <path d="M-7 397L-7 256.691L1441 30V397L-7 397Z" fill="#48847B" fill-opacity="0.8"
                            shape-rendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_25" x="-27" y="0" width="1488" height="407" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset dy="-10" />
                            <feGaussianBlur stdDeviation="10" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_25" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_25" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="407" viewBox="0 0 1440 407" fill="none">
                    <g filter="url(#filter0_d_1_26)">
                        <path d="M1441 397V256.691L-7 30V397L1441 397Z" fill="#48847B" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_26" x="-27" y="0" width="1488" height="407" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset dy="-10" />
                            <feGaussianBlur stdDeviation="10" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_26" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_26" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div> -->
    <div class="div1"></div>
    <div class="div2"></div>
    </div>
</template>

<script>
export default {
    name: 'TriangleDesign'
}
</script>

<style scoped>
.container-fliud {
    position: relative;
}

.div1 {
    position: absolute;
    top:0%;
    height: 370px;
    background: url(./Rectangle4.png);
    background-size: 100% 100%;
    width: 100%;
}

.div2 {
    position: absolute;
    top: 0%;
    height: 370px;
    background: url(./Rectangle5.png);
    background-size: 100% 100%;
    width: 100%;
    margin-bottom: 10px;
}
</style>