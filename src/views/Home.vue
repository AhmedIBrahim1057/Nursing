<template>
  <div class="home h-100">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="row wrapper ">
          <div class="col-6 d-flex align-items-center justify-content-center py-3 py-md-5">
            <img alt="dll" src="@/assets/images/dll.png">
          </div>
          <div class="col-6 d-flex align-items-center justify-content-center px-3 px-md-1 py-3 py-md-5">
            <img alt="asu" src="@/assets/images/asu.png" class="asu">
          </div>
          <div class="col-12 text-center py-4 py-md-5">
            <h3 class="py-2 py-md-3 "><strong>Case Name: </strong>Acute respiratory distress syndrome</h3>
            <h3 class="py-2 py-md-3"><strong>Course Name: </strong>Critical Care Nursing</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>

.wrapper{
  max-height: 500px;
}

@media ( max-width: 768px) {
  img {
    max-width: 90%;
  }
}

@media ( min-width: 768px) {
  .asu{
    width: 200px !important;
  }
}
</style>
