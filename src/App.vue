<template>
  <router-view/>
  <div id="nav-btns" class="w-100 text-center">
    <button class="btn btn-primary mx-2" @click="prev">prev</button>
    <button class="btn btn-primary mx-2" @click="next">next</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    refresh(){
      this.$store.dispatch('getExperimentData')
    },
    prev() {
      if(this.$store.state.step <= 1)
      {
        return false
      }
      else{
        this.$store.state.step -= 1 
        console.log('prev : ', this.$store.state.step)
        this.$router.push( {name: `step${this.$store.state.step}`} )
      }
    },
    next() {
      if(this.$store.state.step >= 3)
      {
        return false
      }
      else{
        this.$store.state.step += 1 
        console.log('next : ', this.$store.state.step)
        this.$router.push( {name: `step${this.$store.state.step}`} )
      }
    }
  },
  mounted(){
    this.refresh()
  }
}
</script>

<style>
@import './main.css';
.container{
  height: 95vh !important;
}

</style>
