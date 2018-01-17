<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #c7c7c7;
}
.single-content-page{
  /* justify-content: center; */
}
.single-page{
  margin: auto;
  max-width: 300px;
}
.clearfixx::after {
    content: "";
    clear: both;
    display: table;
}
.hr-tipis{
  border: none;
  border-top: 1px solid #e9eaec;
  margin: 20px 0;
}
</style>
