<script>
  export default {
  props: [
  'productName', 'productImage'
  ]
}
</script>

<template>
  <div class="product-container">
    <div class="item-image">
      <img :src="productImage"  alt="">
    </div>
    <div class="item-details">
      {{productName}}
    </div>
  </div>
</template>

<style scoped>
  .product-container {
    padding: 20px;
  }

  img {
    height: 400px;
    width: 300px;
  }
</style>
