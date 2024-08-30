<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold">Our Classes</h1>
      <div v-if="classes.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ClassCard v-for="classItem in classes" :key="classItem.id" :classItem="classItem" />
      </div>
      <p v-else>No classes available.</p>
    </div>
  </template>
  
  <script>
  import ClassCard from '../components/ClassCard.vue'
  
  export default {
    name: 'ClassesPage',
    components: { ClassCard },
    data() {
      return {
        classes: [
          { id: 1, name: 'Yoga', description: 'A relaxing yoga class.' },
          { id: 2, name: 'Spin', description: 'High-energy spin class.' },
          { id: 3, name: 'Pilates', description: 'Core strengthening Pilates class.' }
        ]
      }
    }
  }
  </script>
  
  