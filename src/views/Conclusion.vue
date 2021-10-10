<template>
  <div class="conclusion h-100">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="row">
          <div class="col-12">
              <h1 class="mb-3 mb-md-5">Conclusion</h1>
              <p>{{this.$store.getters['conclusion']}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Conclusion',
}
</script>

<style scoped>

</style>
