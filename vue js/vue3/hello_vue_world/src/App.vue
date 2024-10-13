<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-if="showOffersModal">
      <Modal :heading="modal_heading" :text="concert_modal_test" theme="sale"   @close="toggleOffersModal">
        <button> process give-away </button>
        <template v-slot:links >
          <a href="http://" target="_blank" rel="noopener noreferrer">Sign up now</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">More Info</a>
        </template>
      </Modal>
    </div>

    <div v-if="showConcertsModal">
      <Modal :heading="concert_modal_heading" :text="modal_test"   @close="toggleConcertsModal">
        <button> There are no concerts at the moment </button>
        <template v-slot:links >
          <a href="http://" target="_blank" rel="noopener noreferrer">Sign up now</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">More Info</a>
        </template>
      </Modal>
    </div>

    <button @click="toggleOffersModal" >Offers</button>
    <button @click="toggleConcertsModal" >Concerts</button>
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
      modal_test: 'Sign up to get a ticket to your favorite musician concert',

      concert_modal_heading: 'Sign Up To View Concerts Nearby',
      concert_modal_test: 'Sign up to get a ticket to your favorite musician concert',

      showOffersModal:false,
      showConcertsModal:false
    }
  },
  methods: {
    toggleOffersModal(){
      this.showOffersModal = !this.showOffersModal
    },
    toggleConcertsModal(){
      this.showConcertsModal = !this.showConcertsModal
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
