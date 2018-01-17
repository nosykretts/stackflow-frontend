<template>
  <Button @click="showModal">New Question
    <Modal v-model="modalVisible" title="New Question" @on-ok="hideModal" ok-text="OK" cancel-text="Cancel">
      <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>
  </Button>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      formInline: {
        caption: '',
        description: ''
      }
    }
  },
  methods: {
    submitQuestion () {
      this.$store.dispatch('createQuestion', {
        caption: this.formInline.caption,
        description: this.formInline.description
      })
    },
    ...mapMutations(['showModal', 'hideModal'])
  },
  computed: {
    modalVisible: {
      get () {
        return this.$store.getters.modalVisible
      },
      set () {
        this.$store.commit('hideModal')
      }
    }
  }
}
</script>

<style>

</style>
