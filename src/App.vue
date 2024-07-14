<script setup>
import { RouterLink, RouterView } from 'vue-router'
import List from './components/List.vue'
</script>

<template>
  <div class="grid-container">
    <div class="header">Header</div>
    <div class="menu">aqui eu coloco o menu</div>
    <div class="main">
      <List />
    </div>
    <div class="footer">Footer</div>
  </div>
</template>

<style>
  #app {
    max-width: unset !important;
    padding: unset !important;
    display: unset !important;
  }

  .header { grid-area: header; }
  .menu { grid-area: menu; }
  .main { grid-area: main; }
  .footer { grid-area: footer; }

  .grid-container {
    display: grid;
    grid-template-areas:
    'header header header header header header'
    'menu menu main main main main'
    'footer footer footer footer footer footer';
    gap: 10px;
    padding: 10px;
    background-color: #2196F3;
  }

  .grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
</style>
