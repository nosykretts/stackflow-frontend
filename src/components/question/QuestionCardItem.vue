<template>

  <Row :gutter="20" class="card-row">
    <Col :span="2">
    <!-- <QuestionVote :question="question"/> -->
    <QuestionStats :question="question" />
    </Col>
    <Col :span="22">
    <router-link :to="to">
      <h2 style="line-height:1;">{{question.caption}}</h2>
    </router-link>
    <br>
    <p><span v-html="question.description"></span></p>
    <QuestionUserInfo :question="question" />
    <router-link  v-if="question.canUpdate"  class="ivu-btn ivu-btn" :to="toEdit" >Edit</router-link>
    <Poptip
        v-if="question.canDelete"
        confirm
        title="Are you sure delete this question?"
        @on-ok="handleDeleteQuestion"
        ok-text="yes"
        cancel-text="no">
        <Button>Delete</Button>
    </Poptip>
    </Col>
  </Row>
</template>

<script>
import QuestionVote from './QuestionVote'
import QuestionStats from './QuestionStats'
import QuestionUserInfo from './QuestionUserInfo'

export default {
  props: ['question'],
  components: { QuestionVote, QuestionStats, QuestionUserInfo },
  methods: {
    handleDeleteQuestion () {
      this.$store.dispatch('deleteQuestion', {
        questionId: this.question._id
      })
    }
  },
  computed: {
    to () {
      return {
        name: 'questionPage',
        params: {
          id: this.question._id
        }
      }
    },
    toEdit () {
      return {
        name: 'questionEdit',
        params: {
          id: this.question._id
        }
      }
    }
  }
}
</script>

<style>
.card-row {
  padding-bottom: 20px;
  border-bottom: 1px solid #c7c7c7;
  margin-top: 20px;
}
.card-row:last-child {
  border-bottom: none;
}
</style>
