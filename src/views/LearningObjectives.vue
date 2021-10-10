<template>
  <div class="learningObjectives h-100">
    <div class="container h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="row" >
          <div class="col-12">
            <h1 class="mb-3 mb-md-5">Learning Objectives</h1>
            <ul>
              <li v-for="objective in learning_objectives" :key="objective.id" class="my-2">
                {{objective.objective}}
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
  name: 'LearningObjectives',
  data(){
    return{
      learning_objectives:[]
    }
  },
  methods:{
    getLearningObjectives(){
      this.learning_objectives = this.$store.getters['learningObjectives']
    }
  },
  mounted() {
    this.getLearningObjectives()
  }
}
</script>

<style scoped>
</style>