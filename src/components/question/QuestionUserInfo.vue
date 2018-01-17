<template>
  <div class="clearfixx">
  <div class="asker-info-wrapper">
    <span class="asked-time">asked {{moment(question.createdAt).fromNow()}}</span>
  
     
   
     <div class="asker-info">
        <img :src="avatarUrl">
        <span>{{question.creator.name}}</span>
      </div>
  </div>
   </div>
</template>

<script>
export default {
  props: ['question'],
  computed:{
    avatarUrl(){
      return `https://ui-avatars.com/api/?name=${this.question.creator.name}&background=2d8cf0&color=fff&size=35`
    }
  }
}
</script>

<style>
.asker-info-wrapper{
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
.asker-info{
  display: flex;
  align-items: center;
}
.asker-info > span {
  /* background:red; */
  color: #2d8cf0;
}
.asker-info > img{
  /* border-radius:100px; */
  margin-right: 10px;
  width: 35px;
  height: 35px;
}
</style>
