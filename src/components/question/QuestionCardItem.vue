<template>

<Row :gutter="20" class="card-row">
    <Col :span="2">
      <QuestionVote :question="question"/>
    </Col> 
    <Col :span="22">
      <h3>{{question.caption}}</h3>
      <p>{{question.description}}</p>
    </Col> 
</Row> 
</template>

<script>
import QuestionVote from './QuestionVote'

export default {
  props: ['question'],
  components: {QuestionVote}
}
</script>

<style>
.card-row{
  margin-bottom: 20px;
}
</style>
