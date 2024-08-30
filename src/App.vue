<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="bg-blue-500 p-4 text-white">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-xl font-bold">PureFit</div>
        <div>
          <router-link to="/" class="px-4 py-2 hover:bg-blue-600 rounded">Home</router-link>
          <router-link to="/classes" class="px-4 py-2 hover:bg-blue-600 rounded">Classes</router-link>
          <router-link to="/memberships" class="px-4 py-2 hover:bg-blue-600 rounded">Memberships</router-link>
          <router-link to="/about-us" class="px-4 py-2 hover:bg-blue-600 rounded">About Us</router-link>
          <router-link v-if="authStore.isAdmin" to="/admin/dashboard" class="px-4 py-2 hover:bg-blue-600 rounded">Admin</router-link>
          <button v-if="!authStore.user" @click="showLoginModal = true" class="px-4 py-2 bg-green-500 hover:bg-green-600 rounded">Login</button>
          <button v-if="authStore.user" @click="logout" class="px-4 py-2 bg-red-500 hover:bg-red-600 rounded">Logout</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto p-4">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center p-4 mt-4">
      <p>&copy; 2024 PureFit. All rights reserved.</p>
    </footer>

    <!-- Login Modal -->
    <div v-if="showLoginModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div class="bg-white p-4 rounded shadow-lg">
        <h2 class="text-xl mb-4">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block mb-1">Username</label>
            <input v-model="username" type="text" class="border rounded w-full p-2" required />
          </div>
          <div class="mb-4">
            <label class="block mb-1">Password</label>
            <input v-model="password" type="password" class="border rounded w-full p-2" required />
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
          <button @click="showLoginModal = false" class="ml-2 bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from './stores/auth';

export default {
  name: 'App',
  data() {
    return {
      username: '',
      password: '',
      showLoginModal: false,
    }
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    login() {
      
      const user = { username: this.username, role: this.username === 'admin' ? 'admin' : 'user' };
      
      if (user) {
        this.authStore.login(user);
        this.username = '';
        this.password = '';
        this.showLoginModal = false;
      } else {
        alert('Invalid credentials');
      }
    },
    logout() {
      this.authStore.logout();
    }
  }
}
</script>

<style>

</style>
