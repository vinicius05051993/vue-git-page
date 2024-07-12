<script>
import Product from './Product.vue'
export default {
  components: { Product },
  data() {
    return {
      listProduct: [
        {
          'name': 'product name test',
          'image': 'https://t4.ftcdn.net/jpg/03/46/30/89/360_F_346308958_fC5HaJsUptzREIblQBgQkPJDGjl6jjkF.jpg'
        },
        {
          'name': 'other product',
          'image': 'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg'
        },
        {
          'name': 'one more product',
          'image': 'https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8='
        },
        {
          'name': 'product name test',
          'image': 'https://t4.ftcdn.net/jpg/03/46/30/89/360_F_346308958_fC5HaJsUptzREIblQBgQkPJDGjl6jjkF.jpg'
        },
        {
          'name': 'other product',
          'image': 'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg'
        },
        {
          'name': 'one more product',
          'image': 'https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8='
        },
        {
          'name': 'product name test',
          'image': 'https://t4.ftcdn.net/jpg/03/46/30/89/360_F_346308958_fC5HaJsUptzREIblQBgQkPJDGjl6jjkF.jpg'
        },
        {
          'name': 'other product',
          'image': 'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg'
        },
        {
          'name': 'one more product',
          'image': 'https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8='
        },
        {
          'name': 'product name test',
          'image': 'https://t4.ftcdn.net/jpg/03/46/30/89/360_F_346308958_fC5HaJsUptzREIblQBgQkPJDGjl6jjkF.jpg'
        },
        {
          'name': 'other product',
          'image': 'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg'
        },
        {
          'name': 'one more product',
          'image': 'https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8='
        }
      ],
    }
  }
}
</script>

<template>
  <div class="product-list">
    <div v-for="(product, index) in listProduct" :key="index" class="product-item">
      <Product :product-name="product.name" :product-image="product.image" />
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-item {
  width: calc(33.33% - 100px); /* 33.33% width minus margin */
  padding: 10px;
  margin: 0 50px; /* Adjust margin as needed */
}

/* Optional: To adjust the spacing between items */
.product-item:nth-child(3n+1) {
  clear: both;
}
</style>
