<template>
  <div class="patientHistory h-100">
    <div class="container h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="row">
          <div class="col-12">
            <table class="table table-striped table-responsive">
              <thead>
                <tr>
                  <th scope="col" colspan="2">
                    <h1>Patient’s History</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>{{this.$store.getters['patientHistory'].name}}</td>
                  
                </tr>
                <tr>
                  <th scope="row">Age</th>
                  <td>{{this.$store.getters['patientHistory'].age}}</td>
                </tr>
                <tr>
                  <th scope="row">Incident Description</th>
                  <td>
                    <ul>
                      <li v-for="item in this.$store.getters['patientHistory'].incident_description" :key="item.id">
                          {{item}}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      
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