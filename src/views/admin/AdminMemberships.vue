<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold">Manage Memberships</h1>
      <button @click="openCreateModal" class="bg-blue-500 text-white p-2 rounded">Add Membership</button>
      <div v-if="memberships.length" class="mt-4">
        <div v-for="membership in memberships" :key="membership.id" class="border p-4 mb-2">
          <h2 class="text-xl font-bold">{{ membership.name }}</h2>
          <p>{{ membership.description }}</p>
          <button @click="openEditModal(membership)" class="bg-yellow-500 text-white p-2 rounded">Edit</button>
          <button @click="deleteMembership(membership.id)" class="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
      </div>
      <p v-else>No memberships available.</p>
  
      <!-- Create/Edit Modal -->
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white p-4 rounded shadow-lg w-1/3">
          <h2 class="text-2xl font-bold">{{ editingMembership ? 'Edit Membership' : 'Add Membership' }}</h2>
          <form @submit.prevent="saveMembership">
            <div class="mt-4">
              <label class="block">Name</label>
              <input v-model="form.name" class="border p-2 w-full rounded" type="text" required />
            </div>
            <div class="mt-4">
              <label class="block">Description</label>
              <textarea v-model="form.description" class="border p-2 w-full rounded" required></textarea>
            </div>
            <div class="mt-4 flex justify-end">
              <button @click="closeModal" class="bg-gray-500 text-white p-2 rounded mr-2">Cancel</button>
              <button type="submit" class="bg-blue-500 text-white p-2 rounded">{{ editingMembership ? 'Save Changes' : 'Add Membership' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminMemberships',
    data() {
      return {
        memberships: [
          { id: 1, name: 'Basic', description: 'Access to all basic facilities.' },
          { id: 2, name: 'Premium', description: 'Access to all facilities and classes.' },
          { id: 3, name: 'VIP', description: 'All-inclusive VIP membership.' }
        ],
        showModal: false,
        editingMembership: null,
        form: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      openCreateModal() {
        this.editingMembership = null
        this.form = { name: '', description: '' }
        this.showModal = true
      },
      openEditModal(membership) {
        this.editingMembership = membership
        this.form = { ...membership }
        this.showModal = true
      },
      closeModal() {
        this.showModal = false
      },
      saveMembership() {
        if (this.editingMembership) {
          // Edit existing membership
          Object.assign(this.editingMembership, this.form)
        } else {
          // Create new membership
          this.memberships.push({ ...this.form, id: Date.now() })
        }
        this.closeModal()
      },
      deleteMembership(id) {
        this.memberships = this.memberships.filter(membership => membership.id !== id)
      }
    }
  }
  </script>
  
  
  