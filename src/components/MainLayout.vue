<template>
  <div class="layout">
    <Layout>
      <main-header/>
      <router-view/>
      <Footer class="layout-footer-center">2018 &copy; Fajar Andi Patappari</Footer>
    </Layout>
  </div>
</template>

<script>
import MainHeader from './MainHeader'
export default {
  name: 'MainLayout',
  components: { MainHeader }
}
</script>

<style>
.ivu-layout{
  background: none;
}
.ivu-layout-footer{
  background:none;
}
</style>