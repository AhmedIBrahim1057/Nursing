<template>
  <div class="preRequisites">
    <div class="container">
      <div class="row" v-for="requisite in pre_requisites" :key="requisite.id">
        <div class="col-12">
          <p>{{requisite.requisite}}</p>
        </div>
      </div>
    </div>
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