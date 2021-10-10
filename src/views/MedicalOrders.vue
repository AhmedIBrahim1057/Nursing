<template>
  <div class="medicalOrders h-100">
    <div class="container h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="row" >
          <div class="col-12">
            <h1 class="mb-5">Medical Orders</h1>
            <table class="table table-responsive w-100">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Lab Investigation</th>
                        <th scope="col">Diagnostic Procedure</th>
                        <th scope="col">Medication</th>
                        <th scope="col">Instructions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Serum Electrolyte (Na, K, Ca)</td>
                        <td>chest x-ray</td>
                        <td>Increase FiO2 to 90%</td>
                        <td>Vital signs every 1h</td>
                    </tr>
                    <tr>
                        <td>Blood glucose level</td>
                        <td>CT abdomen</td>
                        <td>Initiate norepinephrine at 8 mcg/minute; titrate to keep systolic BP greater than 90</td>
                        <td>Suctioning the nasopharyngeal and oropharyngeal airways</td>
                    </tr>
                    <tr>
                        <td>Creatinine, Blood urea nitrogen</td>
                        <td>CT chest</td>
                        <td>Insulin 40 units before breakfast </td>
                        <td>Central venous pressure monitoring</td>
                    </tr>
                    <tr>
                        <td>Complete blood count</td>
                        <td>electrocardiogram</td>
                        <td>500 mL 0.9% normal saline bolus</td>
                        <td>Cannula insertion</td>
                    </tr>
                    <tr>
                        <td>Arterial blood gases</td>
                        <td>Echocardiogram</td>
                        <td>Administers dexmedetomidine</td>
                        <td>Intravenous therapy</td>
                    </tr>
                    <tr>
                        <td>PTT</td>
                        <td> </td>
                        <td>Ciprofloxacin 400 mg intravenous every 12 hours</td>
                        <td>Wound Dressing</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'MedicalOrders',
  data(){
    return{
      medical_orders:[]
    }
  },
  methods:{
    getMedicalOrders(){
      this.medical_orders = this.$store.getters['medicalOrders']
    }
  },
  mounted() {
    this.getMedicalOrders() 
  }
}
</script>

<style scoped>
    .thead-dark{
        background-color: #343A40;
        color: #fff;
    }
</style>