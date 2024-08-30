<template>
    <div class="border p-4 rounded shadow">
      <h2 class="text-xl font-bold">{{ classItem.name }}</h2>
      <p>{{ classItem.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClassCard',
    props: {
      classItem: Object,
    },
  }
  </script>
  
  