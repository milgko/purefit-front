import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAdmin: false,
  }),
  actions: {
    login(user) {
      this.user = user
      this.isAdmin = user.isAdmin
    },
    logout() {
      this.user = null
      this.isAdmin = false
    },
  },
})


