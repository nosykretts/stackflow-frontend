<template>
    <div class="vote-wrapper">
      <div>
        <Button type="ghost" icon="arrow-up-a"></Button>
      </div>
      <div class="vote-count">{{voteCount}}</div>
      <div>
        <Button type="ghost" icon="arrow-down-a"></Button>
      </div>
    </div>
</template>

<script>
export default {
  props: ['context'],
  computed: {
    voteCount(){
      return this.context.upvoters.length - this.context.downvoters.length
    }
  }
}
</script>

<style>
.vote-wrapper{
 display: flex;
 flex-direction: column;
 text-align: center;
}
.vote-count{
  font-size: 150%;
}
.vote-wrapper button{
  margin: 0;
  padding: 0;
  border: none;
  font-size: 150%;
  line-height: 1;
}
</style>
