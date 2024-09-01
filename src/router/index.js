import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/login/LoginView.vue'
import SigninView from '@/views/login/SigninView.vue'
import TodoList from '@/views/admin/TodoList.vue'
import ListAll from '@/views/admin/pages/ListAll.vue'
import ListUndone from '@/views/admin/pages/ListUndone.vue'
import ListDone from '@/views/admin/pages/ListDone.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList,
      children: [
        {
          path: '',
          name: 'listall',
          component: ListAll
        },
        {
          path: 'undone',
          name: 'undone',
          component: ListUndone
        },
        {
          path: 'done',
          name: 'done',
          component: ListDone
        }
      ]
    }
  ]
})

export default router
