<template>
  <div class="container">
    <p class="table-header">الصفحة</p>
    <div class=" table-responsive  my-3">
      <table class="table-border">
        <tbody>
          <tr>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="#ABABAB" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="white">1</text>
              </svg>
            </td>
            <td>تقرير دراسة الموقع ودراسة احتياج المصرف والتصاميم الأولية</td>
          </tr>
          <tr>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="#ABABAB" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="white">2</text>
              </svg>
            </td>
            <td>تطوير التصميم بعد اعتماده</td>
          </tr>
          <tr>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="#ABABAB" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="white">3</text>
              </svg>
            </td>
            <td>إعداد المخططات الوثائق التنفيذية النهائية ومستندات الطرح وجداول الكميات</td>
          </tr>
          <tr>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="#ABABAB" />
                <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="16" fill="white">4</text>
              </svg></td>
            <td>إستخراج الرخص</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
* {
  direction: rtl;
}
.table-header {
  color: #000;
  text-align: center;
  font-family: Cairo;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.table-responsive {
  color: #000;
}
table{
  border-collapse: collapse;
  border: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
}

table,
th,
td {
    border:lightgray;
}

th,
td {
    padding: 10px;
    text-align: center;
}

</style>
