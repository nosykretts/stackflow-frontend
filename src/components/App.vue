<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'app',
  computed: {
    ...mapGetters(['notify'])
  },
  methods: {
    showMessage() {
      console.log(this.notify);
      switch (this.notify.type) {
        case 'info':
          this.$Message.info(this.notify.message)
          break;
        case 'success':
          this.$Message.success(this.notify.message)
          break;
        case 'warning':
          this.$Message.warning(this.notify.message)
          break;
        case 'error':
          this.$Message.error(this.notify.message)
          break;
          
        default:
          break;
      }
      
    }
  },
  watch: {
    notify: {
      deep: true,
      handler() {
        this.showMessage()
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #c7c7c7;
}
.single-content-page {
  /* justify-content: center; */
}
.single-page {
  margin: auto;
  max-width: 300px;
}
.clearfixx::after {
  content: '';
  clear: both;
  display: table;
}
.hr-tipis {
  border: none;
  border-top: 1px solid #e9eaec;
  margin: 20px 0;
}

.editor-content {
  border: 1px solid #e9eaec;
  border-radius: 4px;
  padding: 4px 7px;
  font-size: 120%;
  min-height: 120px;
}
.editor-content p {
  margin-bottom: 15px;
}
</style>
