<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold">Welcome to PureFit</h1>
      <p class="mt-2">Your go-to gym for fitness and health.</p>
      <router-link to="/classes" class="text-blue-500">Explore Classes</router-link>
      <router-link to="/memberships" class="text-blue-500 ml-4">Our Memberships</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  }
  </script>
  