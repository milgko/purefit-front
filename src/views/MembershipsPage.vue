<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold">Our Memberships</h1>
      <div v-if="memberships.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <MembershipCard v-for="membership in memberships" :key="membership.id" :membership="membership" />
      </div>
      <p v-else>No memberships available.</p>
    </div>
  </template>
  
  <script>
  import MembershipCard from '../components/MembershipCard.vue'
  
  export default {
    name: 'MembershipsPage',
    components: { MembershipCard },
    data() {
      return {
        memberships: [
          { id: 1, name: 'Basic', description: 'Access to all basic facilities.' },
          { id: 2, name: 'Premium', description: 'Access to all facilities and classes.' },
          { id: 3, name: 'VIP', description: 'All-inclusive VIP membership.' }
        ]
      }
    }
  }
  </script>
  
  
  