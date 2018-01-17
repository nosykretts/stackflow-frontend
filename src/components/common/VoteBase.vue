<template>
    <div class="vote-wrapper">
      <div>
        <Button type="ghost" icon="arrow-up-b" @click="vote('up')"></Button>
      </div>
      <div class="vote-count">{{voteCount}}</div>
      <div>
        <Button type="ghost" icon="arrow-down-b" @click="vote('down')"></Button>
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
  },
  methods: {
    vote(direction){
      this.$emit('voteClicked', {
        direction,
        id: this.context._id
      })
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
  font-size: 250%;
  line-height: 1;
}
</style>
