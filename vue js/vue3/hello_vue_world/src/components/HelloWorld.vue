<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <input type="text" name="name" id="name" ref="name">
    <button type="button" @click="handleClickEvent">Modify Styles</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      title: 'Hey You, Take It Easy'
    }
  },
  props: {
    msg: String
  },
  methods: {
    handleClickEvent(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  background-color: blanchedalmond;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
