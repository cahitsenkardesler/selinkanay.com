import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// GitHub Pages ile uyumlu router için baz URL'yi doğru şekilde ayarla
const base = import.meta.env.BASE_URL || '/selin-kanay/'

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hakkimda',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hizmetler',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/uzmanlik',
      name: 'expertise',
      component: () => import('../views/ExpertiseView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/randevu',
      name: 'appointment',
      component: () => import('../views/AppointmentView.vue')
    },
    // Bulunamayan rotalar için yönlendirme
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    // Her sayfa geçişinde sayfanın en üstüne kaydır
    return { top: 0 }
  }
})

export default router 