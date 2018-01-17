<template>
  <div class="clearfixx">
  <div class="common-user-info-wrapper">
    <span class="asked-time">{{isAnswer? 'answered':'asked'}} {{moment(createdAt).fromNow()}}</span>
     <div class="common-user-info">
        <img :src="avatarUrl">
        <span>{{creator.name}}</span>
      </div>
  </div>
   </div>
</template>

<script>
export default {
  props: ['creator', 'isAnswer', 'createdAt'],
  computed: {
    avatarUrl () {
      return `https://ui-avatars.com/api/?name=${this.creator.name}&background=2d8cf0&color=fff&size=35`
    }
  }
}
</script>

<style scoped>
.common-user-info-wrapper{
  display:flex;
  /* background: rgb(196, 255, 196); */
  flex-direction: column;
  position: relative;
  margin-top: 5px;
  top:0;
  float:right;
  min-width: 300px;
}
.asked-time{
  font-size: 90%;
  margin-bottom:5px;
  color:gray;
  /* background:burlywood; */
}
.common-user-info{
  display: flex;
  align-items: center;
}
.common-user-info > span {
  /* background:red; */
  color: #2d8cf0;
}
.common-user-info > img{
  /* border-radius:100px; */
  margin-right: 10px;
  width: 35px;
  height: 35px;
}
</style>
