<template>
  <div id="app">
    <div id="header">
      <h2>Nursing Experiment</h2>
    </div>
    <div id="body" >
      <router-view/>
    </div>
    <div id="footer" class="w-100 text-center d-flex align-items-center justify-content-center py-2">
        <button class="btn btn-primary mx-2 nav-btn" @click="prev" :disabled="this.$store.state.step <= 0"><i class="fas fa-arrow-alt-circle-left nav-icon"></i></button>
        <button class="btn btn-primary mx-2 nav-btn" @click="next" :disabled="this.$store.state.step >= 5"><i class="fas fa-arrow-alt-circle-right nav-icon"></i></button>
    </div>
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
      if(this.$store.state.step <= 0)
      {
        return false
      }
      else{
        this.$store.state.step -= 1 
        this.$router.push( {name: `step${this.$store.state.step}`} )
      }
    },
    next() {
      if(this.$store.state.step >= 5)
      {
        return false
      }
      else{
        this.$store.state.step += 1 
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

#header{
  background-color: black;
  color: white;
  padding: 10px 10px;
}

#footer{
  background-color: black;
  position: absolute;
  bottom: 0;
}

#body{
  overflow: scroll;
  height: calc(100% - 110px);
}

#body::-webkit-scrollbar {
  display: none;
}

#app{
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.nav-icon{
  font-size: 20px;
  line-height: unset !important;
}

.nav-btn{
  padding: .175rem .75rem;
}

</style>
