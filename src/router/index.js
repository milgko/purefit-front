import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ClassesPage from '../views/ClassesPage.vue'
import MembershipsPage from '../views/MembershipsPage.vue'
import AboutUsPage from '../views/AboutUsPage.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminClasses from '../views/admin/AdminClasses.vue'
import AdminMemberships from '../views/admin/AdminMemberships.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/classes', component: ClassesPage },
  { path: '/memberships', component: MembershipsPage },
  { path: '/about-us', component: AboutUsPage },
  { path: '/admin/dashboard', component: AdminDashboard },
  { path: '/admin/classes', component: AdminClasses },
  { path: '/admin/memberships', component: AdminMemberships },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

