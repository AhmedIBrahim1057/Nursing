<template>
  <div class="preRequisites" v-for="requisite in pre_requisites" :key="requisite.id">
    <p>{{requisite.requisite}}</p>
  </div>
</template>

<script>
export default {
  name:'Pre-Requisites',
  data(){
    return{
      pre_requisites:[]
    }
  },
  methods:{
    getPreRequisites(){
      this.pre_requisites = this.$store.getters['preRequisites']
    }
  },
  mounted() {
    this.getPreRequisites()
  }
}
</script>

<style>

</style>