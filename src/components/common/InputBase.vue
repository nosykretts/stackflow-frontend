<template>
  <Form label-position="top">
    <FormItem v-if="!isAnswer" label="Title">
      <Input placeholder="Question title" v-model="contextForm.caption"></Input>
    </FormItem>
    <FormItem label="">
      <editor class="editor-content" :text='postForm.article'></editor>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">Submit</Button>
    </FormItem>
  </Form>
</template>

<script>
import editor from 'vue2-medium-editor'
export default {
  components: {
    editor
  },
  data() {
    return {
      contextForm: {
        caption: '',
        description: ''
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style>

</style>
