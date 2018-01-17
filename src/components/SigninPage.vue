<template>
  <Content class="single-content-page" :style="{padding: '30px 30px'}">
    <Card  class="single-page" shadow>
      <p slot="title">
        <Icon type="log-in"></Icon> Sign In
      </p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" >
        <FormItem prop="email">
            <Input size="large" type="email" v-model="formInline.email" placeholder="Email">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input size="large" type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" long size="large">Signin</Button>
      </Form>       
    </Card>
  </Content>
</template>

<script>

export default {
  data () {
    return {
      formInline: {
        email: '',
        password: ''
      },
      ruleInline: {
        email: [
          {
            required: true,
            message: 'Please fill in the email',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 2,
            message: 'The password length cannot be less than 3 character',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          console.log('kesini', this.$store)
          this.$store.dispatch('signin', {
            email: this.formInline.email,
            password: this.formInline.password
          }).then(() => {
            this.$router.push({name: 'homePage'})
          })
        } else {
          this.$Message.error('Please correct your input!')
        }
      })
    }
  }
}
</script>

<style>

</style>
