<script>
  export default {
  props: [
  'productName', 'productImage'
  ]
}
</script>

<template>
  <div>
    <div>
      <img width="200" height="300" :src="productImage"  alt="">
    </div>
    <div>
      {{productName}}
    </div>
  </div>
</template>

<style scoped>

</style>
