<template>
  <Form label-position="top" ref="formAnswer" :model="formAnswer" :rules="ruleInline">
    <FormItem style="margin-top: 20px;" prop="caption">
      <editor v-on:edit='processEditOperation' class="editor-content" :text='formAnswer.caption' placeholder="Give Answer to this question"></editor>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formAnswer')" size="large">Submit answer</Button>
    </FormItem>
  </Form>
</template>

<script>
import editor from 'vue2-medium-editor'
export default {
  components: {
    editor
  },
  props: ['question'],
  data () {
    return {
      formAnswer: {
        caption: ''
      },
      ruleInline: {
        caption: [
          {
            type: 'string',
            min: 30,
            message: 'Minimum 20 character to answer',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    processEditOperation (operation) {
      this.formAnswer.caption = operation.api.origElements.innerHTML
    },
    handleSubmit (name) {
      console.log('keisni')
      this.$store.dispatch('createAnswer', {
        questionId: this.question._id,
        caption: this.formAnswer.caption
      })
      this.formAnswer.caption = ''
    }
  }
}
</script>

<style>

</style>
