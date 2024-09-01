import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/login/LoginView.vue'
import WordsList from '@/views/admin/WordsList.vue'
import QuizMode from '@/views/admin/QuizMode.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'wordslist',
      component: WordsList
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/quizmode',
      name: 'quizmode',
      component: QuizMode
    }
    // {
    //   path: '/todolist',
    //   name: 'todolist',
    //   component: TodoList,
    //   children: [
    //     {
    //       path: '',
    //       name: 'listall',
    //       component: ListAll
    //     },
    //     {
    //       path: 'undone',
    //       name: 'undone',
    //       component: ListUndone
    //     },
    //     {
    //       path: 'done',
    //       name: 'done',
    //       component: ListDone
    //     }
    //   ]
    // }
  ]
})

export default router
