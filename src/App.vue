<script setup>
import { RouterLink, RouterView } from 'vue-router'
import List from './components/List.vue'
</script>

<template>
  <header>
    <List />
  </header>
</template>

<style>
  #app {
    max-width: unset !important;
  }
</style>
