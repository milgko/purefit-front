<template>
    <div class="border p-4 rounded shadow">
      <h2 class="text-xl font-bold">{{ membership.name }}</h2>
      <p>{{ membership.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MembershipCard',
    props: {
      membership: Object,
    },
  }
  </script>
  
  