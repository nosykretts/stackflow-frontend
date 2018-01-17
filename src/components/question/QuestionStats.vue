<template>
  <div class="stats-counter">
    <div class="num-count">
      <div class="num-count-num">{{voteCount}}</div>
      <div class="num-count-text">votes</div>
    </div>
    <div class="num-count">
      <div class="num-count-num">{{question.answers.length}}</div>
      <div class="num-count-text">answers</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question'],
  computed: {
    voteCount () {
      return this.question.upvoters.length - this.question.downvoters.length
    }
  }
}
</script>

<style scoped>
.stats-counter {
  display: flex;
  flex-direction: column;
}
.num-count {
  display: flex;
  text-align: center;
  flex-direction: column;
}
.num-count:last-child {
  margin-top:10px;
  display: flex;
  text-align: center;
  flex-direction: column;
}
.num-count-num{
  font-size: 140%;
}
.num-count-text{
  font-size: 90%;
  color: gray;
}
</style>
