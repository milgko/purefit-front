<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold">Admin Dashboard</h1>
      <p class="mt-2">Manage classes, memberships, and more.</p>
      <router-link to="classes" class="text-blue-500">Manage Classes</router-link>
      <router-link to="memberships" class="text-blue-500 ml-4">Manage Memberships</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
  }
  </script>
  
  
  