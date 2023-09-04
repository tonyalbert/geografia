<template>
  <header>
    <Navbar />
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/nav/Navbar.vue';
</script>

