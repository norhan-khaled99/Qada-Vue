<template>
  <div class="container">
    <div class="table-container">
      <table class="responsive-table">
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.table-container {
  overflow-x: auto;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
}

.responsive-table th,
.responsive-table td {
border: 1px solid #0c483f;
  text-align: center;
  border-radius: 50px; 
  min-width: 100px;
}
</style>
