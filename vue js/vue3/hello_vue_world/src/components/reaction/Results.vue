<template>
  <div>
    <h3>Your reaction Time is {{ results }} ms </h3>
    <p id="rank" > Rank: {{ rank }} </p>
  </div>
</template>

<script>
export default {
    props: ['results'],
    data(){
        return {
            rank : ''
        }
    },
    mounted(){
        if(this.results < 250){
            this.rank = 'Ninja Fingers'
        } else if(this.results < 600) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Tortoise Speed'
        }
    }

}
</script>

<style>

#rank{
    font-size: 1.4em;
    color: rgb(127, 142, 255);
    font-weight: bold;
}

</style>