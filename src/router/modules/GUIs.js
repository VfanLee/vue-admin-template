import Layout from '@/layout/index.vue'

export default {
  path: '/GUIs',
  component: Layout,
  name: 'GUIs',
  redirect: '/GUIs/counter',
  meta: {
    title: 'GUIs',
    icon: 'flask'
  },
  children: [
    {
      path: '/GUIs/counter',
      component: () => import('@/views/GUIs/counter.vue'),
      name: 'GUIsCounter',
      meta: {
        title: 'Counter'
      }
    },
    {
      path: '/GUIs/temperature-converter',
      component: () => import('@/views/GUIs/temperature-converter.vue'),
      name: 'GUIsTemperatureConverter',
      meta: {
        title: 'Temperature Converter'
      }
    },
    {
      path: '/GUIs/flight-booker',
      component: () => import('@/views/GUIs/flight-booker.vue'),
      name: 'GUIsFlightBooker',
      meta: {
        title: 'Flight Booker'
      }
    },
    {
      path: '/GUIs/timer',
      component: () => import('@/views/GUIs/timer.vue'),
      name: 'GUIsTimer',
      meta: {
        title: 'Timer'
      }
    },
    {
      path: '/GUIs/crud',
      component: () => import('@/views/GUIs/crud.vue'),
      name: 'GUIsCRUD',
      meta: {
        title: 'CRUD'
      }
    }
  ]
}
