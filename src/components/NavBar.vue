<template>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold">PureFit</router-link>
        <div>
          <router-link to="/" class="mr-4">Home</router-link>
          <router-link to="/classes" class="mr-4">Classes</router-link>
          <router-link to="/memberships" class="mr-4">Memberships</router-link>
          <router-link to="/about-us">About Us</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>
  
  