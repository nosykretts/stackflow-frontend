<template>
  <Content :style="{padding: '50px 50px'}">
    <Card shadow>
      <QuestionList :questions="questions"/>
    </Card>
  </Content>
</template>

<script>
import QuestionList from '@/components/question/QuestionList'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {QuestionList},
  mounted () {
    this.getQuestions()
  },
  methods: {
    ...mapActions(['getQuestions'])
  },
  computed: {
    ...mapGetters(['questions'])
  }
}
</script>

<style>

</style>
