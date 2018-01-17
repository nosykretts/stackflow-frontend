<template>

<Row :gutter="20" class="card-row">
    <Col :span="2">
      <!-- <QuestionVote :question="question"/> -->
      <QuestionStats :question="question"/>
    </Col> 
    <Col :span="22">
      <router-link :to="to">
        <h2>{{question.caption}}</h2>
      </router-link>
      <p>{{question.description}}</p>
      <QuestionUserInfo :question="question"/>
    </Col>
</Row> 
</template>

<script>
import QuestionVote from './QuestionVote'
import QuestionStats from './QuestionStats'
import QuestionUserInfo from './QuestionUserInfo'

export default {
  props: ['question'],
  components: {QuestionVote, QuestionStats, QuestionUserInfo},
  computed:{
    to(){
      return {
        name: 'questionPage',
        params: {
          id: this.question._id
        }
      }
    }
  }

}
</script>

<style>
.card-row{
  padding-bottom: 20px;
  border-bottom: 1px solid #c7c7c7;
  margin-top: 20px;
}
.card-row:last-child{
  border-bottom: none;
}
</style>
