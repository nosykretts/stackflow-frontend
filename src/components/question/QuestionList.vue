<template>
  <Row type="flex" :gutter="20">
    <Col span="24" class="list-row-wrapper">

        <QuestionCardItem v-for="question in questions" :key="question._id" :question="question"/>
        
    </Col>
     
  </Row>
</template>

<script>
import QuestionCardItem from './QuestionCardItem'

export default {
  props: ['questions'],
  components: {QuestionCardItem}
}
</script>

<style>
.list-row-wrapper{
  
}
</style>
