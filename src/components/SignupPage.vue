<template>
  <Content class="single-content-page" :style="{padding: '30px 30px'}">
    <Card  class="single-page" shadow>
      <p slot="title">Sign Up</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="name">
            <Input size="large" type="text" v-model="formInline.name" placeholder="Your name">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="username">
            <Input size="large" type="text" v-model="formInline.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>            
        <FormItem prop="email">
            <Input size="large" type="email" v-model="formInline.email" placeholder="Email">
                <Icon type="ios-email-outline" slot="prepend"></Icon>
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
        name: '',
        email: '',
        password: '',
        username: ''
      },
      ruleInline: {
        name: [
          {
            required: true,
            message: 'Please fill in your name',
            trigger: 'blur'
          }
        ],
        username: [
          {
            required: true,
            message: 'Please fill in username',
            trigger: 'blur'
          }
        ],
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
          this.$store
            .dispatch('signup', {
              name: this.formInline.name,
              username: this.formInline.username,
              email: this.formInline.email,
              password: this.formInline.password
            })
            .then(() => {
              this.$router.push({ name: 'signinPage' })
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
