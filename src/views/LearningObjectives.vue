<template>
  <div class="learningObjectives">
    <div class="container">
      <div class="row" v-for="objective in learning_objectives" :key="objective.id">
        <div class="col-12">{{objective.objective}}</div>
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