<template>
  <div>
    <Row v-for="answer in question.answers" :key="answer._id" :gutter="10" >
              <Col :span="2">
                <VoteBase :context="answer"/>
              </Col> 
              <Col :span="22">
                <p>{{answer.caption}}</p>
                <UserInfo :creator="answer.creator" :isAnswer="true" :createdAt="answer.createdAt"/>
                <hr class="hr-tipis">
              </Col>
    </Row>  
  </div>
</template>

<script>
import VoteBase from '@/components/common/VoteBase'
import UserInfo from '@/components/common/UserInfo'
export default {

  props: ['question'],
  components: {UserInfo, VoteBase}
}
</script>

<style>

</style>
