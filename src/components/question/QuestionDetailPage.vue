<template>
  <Content v-if="question" :style="{padding: '50px 50px'}">
    <Card shadow>
      <div slot="title">
        <h1 style="padding: 20px;">{{question.caption}}</h1>
      </div>
      <!-- <pre>{{JSON.stringify(question,null, 2)}}</pre> -->
      <div style="padding:20px;">
        <Row :gutter="20">
          <Col :span="18">
          <Row :gutter="0">
            <Col :span="2">
            <VoteBase :context="question" @voteClicked="questionVoteClicked" />
            </Col>
            <Col :span="22">
            <p>{{question.description}}</p>
            <UserInfo :creator="question.creator" :createdAt="question.createdAt" />
            </Col>
          </Row>
          <Row :gutter="0">
            <Col :span="24">
            <br>
            <h3>{{question.answers.length}} Answer</h3>
            <hr class="hr-tipis">
            </Col>
          </Row>
          <Row v-for="answer in question.answers" :key="answer._id" :gutter="0">
            <Col :span="2">
              <VoteBase :context="answer" @voteClicked="answerVoteClicked" />
            </Col>
            <Col :span="22">
            <!-- <p>{{answer.caption}}</p> -->
              <span v-html="answer.caption"></span>
              <UserInfo :creator="answer.creator" :isAnswer="true" :createdAt="answer.createdAt" />
              <hr class="hr-tipis">
            </Col>
          </Row>
          <Row :gutter="0">
            <Col :span="2">
              <br>
            </Col>
            <Col :span="22">
              <AnswerForm :question="question"/>
            </Col>
          </Row>
          </Col>
          <Col :span="6">
            <Button type="warning" long size="large">Edit Question</Button>
          <!-- <QuestionVote :question="question"/> -->
          <!-- <QuestionStats :question="question"/> -->
          </Col>
        </Row>
      </div>
    </Card>
  </Content>
</template>

<script>
import AnswerForm from '@/components/answer/Answerform'
import VoteBase from '@/components/common/VoteBase'
import AnswerList from '@/components/answer/AnswerList'
import UserInfo from '@/components/common/UserInfo'
import QuestionStats from './QuestionStats'

import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['id'],
  components: { VoteBase, QuestionStats, UserInfo, AnswerList, AnswerForm },
  mounted() {
    this.getQuestion({ id: this.id })
  },
  methods: {
    ...mapActions(['getQuestion']),
    handleQuestionVote(direction) {
      this.$store.dispatch('')
    },
    answerVoteClicked({direction, id}) {
      this.$store.dispatch('toggleVoteAnswer',{
        questionId: this.id,
        answerId: id,
        direction
      })
    },
    questionVoteClicked({direction}) {
      this.$store.dispatch('toggleVoteQuestion',{
        questionId: this.id,
        direction
      })
    }
  },
  computed: {
    ...mapGetters(['question'])
  }
}
</script>

<style>

</style>
