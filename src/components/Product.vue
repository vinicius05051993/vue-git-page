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
    height: 300px;
    width: 200px;
  }

  .item-details {
    font-size: 16px;
  }
</style>
