<template>
  <div class="preRequisites h-100">
    <div class="container h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="row">
          <div class="col-12">
            <h1 class="mb-5">Pre-requisites</h1>
            <ul>
              <li v-for="requisite in pre_requisites" :key="requisite.id" class="my-2">
                {{requisite.requisite}}
              </li>
            </ul>
          </div>
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