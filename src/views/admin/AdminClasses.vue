<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold">Manage Classes</h1>
      <button @click="openCreateModal" class="bg-blue-500 text-white p-2 rounded">Add Class</button>
      <div v-if="classes.length" class="mt-4">
        <div v-for="classItem in classes" :key="classItem.id" class="border p-4 mb-2">
          <h2 class="text-xl font-bold">{{ classItem.name }}</h2>
          <p>{{ classItem.description }}</p>
          <button @click="openEditModal(classItem)" class="bg-yellow-500 text-white p-2 rounded">Edit</button>
          <button @click="deleteClass(classItem.id)" class="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
      </div>
      <p v-else>No classes available.</p>
  
      <!-- Create/Edit Modal -->
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white p-4 rounded shadow-lg w-1/3">
          <h2 class="text-2xl font-bold">{{ editingClass ? 'Edit Class' : 'Add Class' }}</h2>
          <form @submit.prevent="saveClass">
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
              <button type="submit" class="bg-blue-500 text-white p-2 rounded">{{ editingClass ? 'Save Changes' : 'Add Class' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminClasses',
    data() {
      return {
        classes: [
          { id: 1, name: 'Yoga', description: 'A relaxing yoga class.' },
          { id: 2, name: 'Spin', description: 'High-energy spin class.' },
          { id: 3, name: 'Pilates', description: 'Core strengthening Pilates class.' }
        ],
        showModal: false,
        editingClass: null,
        form: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      openCreateModal() {
        this.editingClass = null
        this.form = { name: '', description: '' }
        this.showModal = true
      },
      openEditModal(classItem) {
        this.editingClass = classItem
        this.form = { ...classItem }
        this.showModal = true
      },
      closeModal() {
        this.showModal = false
      },
      saveClass() {
        if (this.editingClass) {
          // Edit existing class
          Object.assign(this.editingClass, this.form)
        } else {
          // Create new class
          this.classes.push({ ...this.form, id: Date.now() })
        }
        this.closeModal()
      },
      deleteClass(id) {
        this.classes = this.classes.filter(classItem => classItem.id !== id)
      }
    }
  }
  </script>
  
  