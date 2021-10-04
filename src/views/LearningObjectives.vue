<template>
  <div class="learningObjectives" v-for="objective in learning_objectives" :key="objective.id">
    <p>{{objective.objective}}</p>
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