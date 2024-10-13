<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <Modal :heading="modal_heading" :text="modal_test" theme="sale" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      modal_heading: 'Sign Up For Give-Away',
      modal_test: 'Sign up to get a ticket to your favorite musician concert'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
