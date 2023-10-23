<template>
    <div class="containe">
        <Checkline/>
    </div>
</template>

<script>
import CheckLine from "./CheckLine.vue"
export default {
    name: 'DashboardTest',
    components: {
        CheckLine
    }

}
</script>

<style scoped>
*{
    direction: rtl;
}

</style>