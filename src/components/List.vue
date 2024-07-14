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
  flex: 1 1 calc(25% - 10px); /* 25% para 4 itens por linha menos a margem */
  box-sizing: border-box;
  margin: 5px;
}

@media (max-width: 1200px) {
  .product-item {
    flex: 1 1 calc(33.33% - 10px); /* 33.33% para 3 itens por linha */
  }
}

@media (max-width: 900px) {
  .product-item {
    flex: 1 1 calc(50% - 10px); /* 50% para 2 itens por linha */
  }
}

@media (max-width: 600px) {
  .product-item {
    flex: 1 1 calc(100% - 10px); /* 100% para 1 item por linha */
  }
}
</style>
