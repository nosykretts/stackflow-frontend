<template>
  <Header class="main-header">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo" @click="$router.push({name:'homePage'})">stack<span>flow</span>
      </div>
      <Button type="primary" @click="$router.push({name:'signinPage'})">Sign In</Button>
      <Button type="primary" @click="$router.push({name:'signupPage'})">Sign Up</Button>
      <Button type="primary" @click="$router.push({name:'questionCreate'})">New Question</Button>
      
      <Button type="primary" @click="handleSignout">Sign Out</Button>
       <QuestionNewButton/>
    </Menu>
  </Header>
</template>

<script>
import QuestionNewButton from '@/components/question/QuestionNewButton'
export default {
  name: 'MainHeader',
  components: {QuestionNewButton},
  methods:{
    handleSignout() {
      this.$store.dispatch('signout')
      .then(() => {
        this.$router.push({name:'homePage'})
      })
    }
  }
}
</script>

<style>
.layout-logo {
  width: 200px;
  /* height: 30px; */
  line-height: 1;
  text-shadow: 2px;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  color: white;
  font-size: 31px;
  padding: 0;
  position: relative;
  top: 16px;
  left: 0;
  font-weight: 300;
}
.layout-logo > span {
  /* font-size: 65%; */
  font-weight: 400;
}
.main-header {
  /* margin-bottom:45px; */
  border-bottom: 5px solid #2d8cf0;
  /* padding: 0 10px; */
}
.ivu-layout-header{
  height: auto !important;
}
</style>