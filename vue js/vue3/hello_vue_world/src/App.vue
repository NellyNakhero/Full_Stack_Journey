<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">

    <h1>Ninja Reaction Timer</h1>
    <button @click="start"  :disabled="isPlaying" >play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />

    <div v-if="showResults">
      <Results :results="score" />
    </div>

    





    <br>
    <br>
    <teleport to="#modals" v-if="showOffersModal">
      <Modal :heading="modal_heading" :text="concert_modal_test" theme="sale"   @close="toggleOffersModal">
        <button> process give-away </button>
        <template v-slot:links >
          <a href="http://" target="_blank" rel="noopener noreferrer">Sign up now</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">More Info</a>
        </template>
      </Modal>
    </teleport>

    <teleport to="#modals" v-if="showConcertsModal">
      <Modal :heading="concert_modal_heading" :text="modal_test"   @close="toggleConcertsModal">
        <button> There are no concerts at the moment </button>
        <template v-slot:links >
          <a href="http://" target="_blank" rel="noopener noreferrer">Sign up now</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">More Info</a>
        </template>
      </Modal>
    </teleport>

    <button @click="toggleOffersModal" >Offers</button>
    <button @click="toggleConcertsModal" >Concerts</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import Block from './components/reaction/Block.vue';
import Results from './components/reaction/Results.vue';

export default {
  name: 'App',
  components: {
    Modal,
    Block, 
    Results
  },
  data() {
    return {
      modal_heading: 'Sign Up For Give-Away',
      modal_test: 'Sign up to get a ticket to your favorite musician concert',

      concert_modal_heading: 'Sign Up To View Concerts Nearby',
      concert_modal_test: 'Sign up to get a ticket to your favorite musician concert',

      showOffersModal:false,
      showConcertsModal:false,

      isPlaying:false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    toggleOffersModal(){
      this.showOffersModal = !this.showOffersModal
    },
    toggleConcertsModal(){
      this.showConcertsModal = !this.showConcertsModal
    },
    start(){
      this.isPlaying = !this.isPlaying
      this.delay = 2000 + Math.random() * 5000
      this.showResults = false
    },
    endGame(reactionTime){
      this.score =reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: rgb(127, 142, 255);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
