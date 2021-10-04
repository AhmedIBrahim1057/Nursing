<template>
  <div class="patientHistory">
    <div class="container">
      <p>{{this.$store.getters['patientHistory'].name}}</p>
      <p>{{this.$store.getters['patientHistory'].age}}</p>
      <ul>
          <li v-for="item in this.$store.getters['patientHistory'].incident_description" :key="item.id">
              {{item}}
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'PatientHistory',
  data(){
    return{
    }
  },
}
</script>

<style>

</style>