<template>
  <Content v-if="editLoaded" :style="{padding: '50px 50px'}">
    <Card shadow style="padding:20px;">
      <h1>{{id? 'Edit':'Create'}} Question</h1>
      <Form label-position="top" ref="formQuestion" :model="formQuestion">
        <FormItem style="margin-top: 20px;" prop="caption" >
          <Input v-model="formQuestion.caption" placeholder="Question Title" size="large"></Input>
        </FormItem>
        <FormItem style="margin-top: 20px;" prop="description">
          <editor v-on:edit='processEditOperation' class="editor-content" :text='formQuestion.description' placeholder="Give Question to this question"></editor>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formQuestion')" size="large">Submit Question</Button>
        </FormItem>
      </Form>
    </Card>
  </Content>
</template>

<script>
import { mapGetters } from 'vuex'
import editor from 'vue2-medium-editor'

export default {
  props: ['id'],
  mounted () {
    if (this.id) {
      this.getQuestion()
    } else {
      this.editLoaded = true
    }
  },
  components: { editor },
  data () {
    return {
      editLoaded: false,
      formQuestion: {
        caption: '',
        description: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      let dispatch = this.id ? 'updateQuestion' : 'createQuestion'
      this.$store
        .dispatch(dispatch, {
          questionId: this.id,
          caption: this.formQuestion.caption,
          description: this.formQuestion.description
        })
        .then(newId => {
          this.$router.push({
            name: 'questionPage',
            params: {
              id: this.id || newId
            }
          })
        })
    },
    processEditOperation (operation) {
      this.formQuestion.description = operation.api.origElements.innerHTML
    },
    getQuestion () {
      console.log('kesinis')
      this.$store.dispatch('getQuestion', {
        id: this.id
      })
    }
  },
  computed: {
    ...mapGetters(['question'])
  },
  watch: {
    question: {
      deep: true,
      handler () {
        this.formQuestion = {
          caption: this.question.caption,
          description: this.question.description
        }
        this.editLoaded = true
      }
    }
  }
}
</script>

<style>

</style>
